import { createI18n } from 'vue-i18n';
import CallToAction from './Components/Home/CallToAction.vue';

const messages = {
    en: {
        message: {
            hello: 'Hello World',
            home: 'Home',
            about: 'About',
            internet: 'Internet',
            it: 'IT Service',
            camera: 'Camera',
            news: 'Promotions - News',
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
            coverageAcrossProvincesAndCities:
                'Coverage across provinces and cities',
            personnel: 'Personnel',
            experience: 'Experience',
            noAdditionalApNeeded:
                'No need to invest in additional APs, saving costs for customers.',
            packageLossRateReduced:
                'The package loss rate is reduced by 48% compared to existing devices, providing a seamless service experience.',
            coverageExpanded25: 'Expand coverage by 25%',
            supports30Devices: 'Supports 30 devices',
            chooseService: 'Service package',
            chooseServiceDescription:
                'Choose the Right Internet Package for Your Business.',
            playVideo: 'Play video',
            registerNow: 'Register Now',
            togetherTowardsSuccess: 'Together towards success.',
            callUsAnytime: 'Call us anytime',
            price: 'Pricing',
            outsourcingItServices: 'Outsourcing IT services',
            featuredIncluded: 'Featured Included',
            mostPopular: 'Most Popular',
            years: 'Years',
            experienceInTelecommunicationService:
                'Experience in telecommunication service',
        },
        features: {
            quality: {
                title: 'Excellent Quality',
                description:
                    'We are committed to providing high-quality products and services tailored to your needs.',
            },
            support: {
                title: 'Dedicated Support',
                description:
                    'Our support team is always ready to help you solve any issues quickly.',
            },
            productivity: {
                title: 'Maximum Productivity',
                description:
                    'Optimal solutions help you save time and increase work efficiency.',
            },
            security: {
                title: 'Absolute Security',
                description:
                    'We ensure your information is safe from any risks or potential threats.',
            },
        },
        companyMembership:
            'As a member of FPT, the leading technology group in Vietnam.',
        companyMission:
            "With the mission of pioneering the Internet and connectivity for the people of Vietnam, along with the grand ambition that every Vietnamese family uses at least one service from the company, FPT Telecom is making efforts to implement the strategy of 'Bringing great experiences to customers' based on promoting the core cultural value of 'Customer-centric' and the technological strength of FPT. From there, it pioneers to become the leading digital service provider with superior customer experience, the best in Vietnam.",
        companyMoreAboutUs: 'More About Us',
        servicesTelecomInfrastructure:
            'Provide telecommunications infrastructure for broadband Internet services.',
        servicesValueAdded:
            'Value-added services on the Internet and mobile networks.',
        servicesPaidTv: 'Paid television services.',
        servicesMobileServices:
            'Messaging, data, and entertainment information services on mobile networks.',
        servicesNetworkInfrastructure:
            'Establish network infrastructure and provide telecommunications and Internet services.',
        servicesImportExport:
            'Import and export of telecommunications and Internet equipment.',
        servicesOthers: 'And many other services.',
        contact: {
            title: 'Contact',
            contactInfo: 'Contact information',
            location: 'Our location',
            address:
                '124 Suong Nguyet Anh Street, Ben Thanh Ward, District 1, Ho Chi Minh City',
            phone: 'Phone Number',
            email: 'Email Address',
            getInTouch: 'Contact us',
            form: {
                name: 'Your Name',
                email: 'Your Email',
                subject: 'Subject',
                message: 'Message',
                sendMessage: 'Send Message',
                loading: 'Loading',
                errorMessage: 'Error message',
                sentMessage: 'Your message has been sent. Thank you!',
            },
            name: 'Your Name',
            titleForm: 'Title',
            content: 'Content',
        },
        callToActionContent: "FPT Telecom proudly stands as a leading internet service provider in Vietnam, delivering superior internet speed, stable connectivity, and dedicated 24/7 customer support. We understand that the internet is not just a tool for work but also a bridge connecting you to the world. With flexible plans, cutting-edge technology, and extensive coverage, FPT Telecom is committed to providing a seamless online experience for work, study, and entertainment."
    },
    vi: {
        message: {
            hello: 'Xin chào thế giới',
            home: 'Trang chủ',
            about: 'Giới thiệu',
            internet: 'Internet',
            it: 'Dịch vụ IT',
            camera: 'Camera',
            news: 'Khuyến Mãi - Tin tức',
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
            experience: 'Năm kinh nghiệm',
            noAdditionalApNeeded:
                'Không cần đầu tư thêm AP, tiết kiệm chi phí cho khách hàng.',
            packageLossRateReduced:
                'Tỉ lệ mất gói giảm 48% so với thiết bị hiện hữu, trải nghiệm dịch vụ liền mạch.',
            coverageExpanded25: 'Mở rộng 25% vùng phủ',
            supports30Devices: 'Chịu tải 30 thiết bị',
            chooseService: 'Chọn gói dịch vụ',
            chooseServiceDescription:
                'Chọn gói Internet phù hợp với doanh nghiệp của bạn',
            playVideo: 'Xem ngay',
            registerNow: 'Đăng kí ngay',
            togetherTowardsSuccess: 'Cùng đi tới thành công.',
            callUsAnytime: 'Liên hệ ngay.',
            price: 'Bảng giá',
            outsourcingItServices: 'Dịch vụ IT thuê ngoài',
            featuredIncluded: 'Các tính năng bao gồm',
            mostPopular: 'Phổ biến nhất',
            years: 'Năm',
            experienceInTelecommunicationService:
                'Kinh nghiệm trong dịch vụ viễn thông',
        },
        features: {
            quality: {
                title: 'Chất lượng tuyệt vời',
                description:
                    'Chúng tôi cam kết mang đến sản phẩm và dịch vụ chất lượng cao, phù hợp với nhu cầu của bạn.',
            },
            support: {
                title: 'Hỗ trợ tận tâm',
                description:
                    'Đội ngũ hỗ trợ luôn sẵn sàng giúp bạn giải quyết mọi vấn đề một cách nhanh chóng.',
            },
            productivity: {
                title: 'Năng suất tối đa',
                description:
                    'Giải pháp tối ưu giúp bạn tiết kiệm thời gian và nâng cao hiệu suất công việc.',
            },
            security: {
                title: 'Bảo mật tuyệt đối',
                description:
                    'Chúng tôi bảo vệ thông tin của bạn an toàn trước mọi rủi ro và nguy cơ tiềm ẩn.',
            },
        },
        companyMembership:
            'Là thành viên thuộc Tập đoàn công nghệ hàng đầu Việt Nam FPT.',

        companyMission:
            'Với sứ mệnh tiên phong mang Internet, mang kết nối đến với người dân Việt Nam cùng mong muốn lớn lao mỗi gia đình Việt Nam đều sử dụng ít nhất một dịch vụ của Công ty, FPT Telecom đang nỗ lực thực thi Chiến lược “Mang đến trải nghiệm tuyệt vời cho khách hàng” trên cơ sở phát huy giá trị văn hóa cốt lõi “Lấy khách hàng làm trọng tâm” và nền tảng sức mạnh công nghệ FPT, từ đó tiên phong trở thành Nhà cung cấp dịch vụ số có trải nghiệm khách hàng vượt trội, tốt nhất tại Việt Nam.',
        companyMoreAboutUs: 'Giới thiệu',
        servicesTelecomInfrastructure:
            'Cung cấp hạ tầng mạng viễn thông cho dịch vụ Internet băng rộng.',
        servicesValueAdded:
            'Dịch vụ giá trị gia tăng trên mạng Internet và điện thoại di động.',
        servicesPaidTv: 'Dịch vụ Truyền hình trả tiền.',
        servicesMobileServices:
            'Dịch vụ tin nhắn, dữ liệu, và thông tin giải trí trên mạng điện thoại di động.',
        servicesNetworkInfrastructure:
            'Thiết lập hạ tầng mạng và cung cấp các dịch vụ Viễn thông và Internet.',
        servicesImportExport: 'Xuất nhập khẩu thiết bị Viễn thông và Internet.',
        servicesOthers: 'Và nhiều dịch vụ khác.',
        contact: {
            title: 'Liên Hệ',
            location: 'Địa chỉ',
            contactInfo: 'Thông tin liên hệ',
            address:
                '124 Đường Sương Nguyệt Anh, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh',
            phone: 'Số điện thoại',
            email: 'Địa chỉ email',
            getInTouch: 'Liên hệ với chúng tôi',
            form: {
                name: 'Tên của bạn',
                email: 'Email của bạn',
                subject: 'Chủ đề',
                message: 'Tin nhắn',
                sendMessage: 'Gửi tin nhắn',
                loading: 'Đang tải',
                errorMessage: 'Lỗi',
                sentMessage: 'Tin nhắn của bạn đã được gửi. Cảm ơn bạn!',
            },
            name: 'Tên',
            titleForm: 'Tiêu đề',
            content: 'Nội dung',
        },
        callToActionContent: "FPT Telecom tự hào là nhà cung cấp dịch vụ mạng hàng đầu tại Việt Nam, mang đến cho bạn tốc độ internet vượt trội, đường truyền ổn định và dịch vụ chăm sóc khách hàng tận tâm 24/7. Chúng tôi hiểu rằng internet không chỉ là công cụ làm việc mà còn là cầu nối giữa bạn và thế giới. Với gói cước linh hoạt, công nghệ hiện đại và độ phủ sóng rộng khắp, FPT Telecom cam kết mang đến trải nghiệm trực tuyến mượt mà, từ làm việc, học tập, đến giải trí."
    },
};

const i18n = createI18n({
    locale: 'vi',
    messages,
});

export default i18n;
