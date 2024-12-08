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
        contact: 'Contact',
        solution: 'Solution',
        exclusiveForBusinesses: 'Exclusive for Businesses',
        wifi: 'The new Wi-Fi 6 technology, based on the latest 802.11ax standard, achieves speeds of up to 9.6Gbps, which is 2.8 times faster than the previous generation.',
        corporateClients: 'Corporate clients',
        coverageAcrossProvincesAndCities: 'Coverage across provinces and cities',
        personnel: 'Personnel',
        experience: 'Experience',
        noAdditionalApNeeded: 'No need to invest in additional APs, saving costs for customers.',
        packageLossRateReduced: 'The package loss rate is reduced by 48% compared to existing devices, providing a seamless service experience.',
        coverageExpanded25: 'Expand coverage by 25%',
        supports30Devices: 'Supports 30 devices'
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
        contact: 'Liên hệ',
        solution: 'Giải pháp',
        exclusiveForBusinesses: 'Dành riêng cho doanh nghiệp',
        wifi: 'Công nghệ Wi-Fi 6 mới dựa trên tiêu chuẩn mới 802.11ax đạt tới 9,6Gbps cao gấp 2,8 lần thế hệ cũ..',
        corporateClients: 'Khách hàng doanh nghiệp',
        coverageAcrossProvincesAndCities: 'Phủ rộng khắp tỉnh thành',
        personnel: 'Nhân sự',
        experience: 'Kinh nghiệm',
        noAdditionalApNeeded: 'Không cần đầu tư thêm AP, tiết kiệm chi phí cho khách hàng.',
        packageLossRateReduced: 'Tỉ lệ mất gói giảm 48% so với thiết bị hiện hữu, trải nghiệm dịch vụ liền mạch.',
        coverageExpanded25: 'Mở rộng 25% vùng phủ',
        supports30Devices: 'Chịu tải 30 thiết bị'
      },
    },
  };
  

const i18n = createI18n({
  locale: 'vi',
  messages,
});

export default i18n;
