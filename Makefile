run-app-with-setup:
	cp .env.example .env
	docker compose build
	docker compose up -d

run-app-with-setup-db:
	cp .env.example .env
	docker compose build
	docker compose up -d
	docker exec php /bin/sh -c "php artisan migrate:fresh --seed"

run-app:
	docker compose up -d

kill-app:
	docker compose down

flush-db:
	docker exec php /bin/sh -c "php artisan migrate:fresh"

flush-db-with-seeding:
	docker exec php /bin/sh -c "php artisan migrate:fresh --seed"

code-format-check:
	docker exec php /bin/sh -c "npm run format:check"

code-format:
	docker exec php /bin/sh -c "npm run format"

code-test:
	docker exec php /bin/sh -c "php artisan test"