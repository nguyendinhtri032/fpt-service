ARG NODE_VERSION=20
ARG UBUNTU_VERSION=20.04
ARG PHP_VERSION=8.2

FROM php:${PHP_VERSION}-fpm-alpine
ARG USER_UID=1000
ARG GROUP_GID=1000
ARG UGNAME=laravel
ENV CNAME=laravel

WORKDIR /var/www/app
RUN apk update && apk add \
    curl \
    libpng-dev \
    libxml2-dev \
    zip \
    unzip \
    bash \
    nginx \
    supervisor \
    shadow \
    nodejs \
    npm

# Create user and group
RUN groupadd --system --gid ${GROUP_GID} ${UGNAME} && \
    useradd --system --no-log-init --home-dir /home/${UGNAME} \
    --uid ${USER_UID} --gid ${GROUP_GID} ${UGNAME}

# Install extension PHP
RUN docker-php-ext-install pdo pdo_mysql

# Configure nginx
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/conf.d /etc/nginx/conf.d/

# Configure PHP-FPM
COPY docker/fpm-pool.conf /usr/local/etc/php-fpm.conf

COPY docker/php.ini /etc/php/${PHP_VERSION}/cli/conf.d/custom.ini
COPY docker/php.ini /etc/php/${PHP_VERSION}/fpm/conf.d/custom.ini

# Copy files from Node.js build stage to PHP stage
COPY --chmod=777 ./ /var/www/app/
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
RUN composer install --optimize-autoloader --no-interaction --no-progress --prefer-dist
RUN npm install
RUN npm run build

# Configure supervisord
COPY docker/start-container /usr/local/bin/start-container
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN mkdir -p /run/php/
# RUN chown www-data:www-data /run
RUN chmod +x /usr/local/bin/start-container

EXPOSE 8080
ENTRYPOINT ["start-container"]
