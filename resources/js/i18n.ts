import { createI18n } from 'vue-i18n';

const messages = {
    en: {
      message: {
        hello: 'Hello World',
        home: 'Home',
        about: 'About',
        features: 'Features',
        services: 'Services',
        pricing: 'Pricing',
        dropdown: 'Dropdown',
        deepDropdown: 'Deep Dropdown',
        contact: 'Contact'
      },
    },
    vi: {
      message: {
        hello: 'Xin chào thế giới',
        home: 'Trang chủ',
        about: 'Giới thiệu',
        features: 'Tính năng',
        services: 'Dịch vụ',
        pricing: 'Bảng giá',
        dropdown: 'Danh sách',
        deepDropdown: 'Danh sách',
        contact: 'Liên hệ'
      },
    },
  };
  

const i18n = createI18n({
  locale: 'vi',
  messages,
});

export default i18n;
