import type { ResumeData } from "@/types/portfolio";

export const resumeVn: ResumeData = {
  basic_info: {
    description_header: "Xin chào",
    description:
      "Lập trình viên Full-Stack chuyên về Frontend với hơn 1 năm kinh nghiệm xây dựng các ứng dụng web đáp ứng, có khả năng mở rộng trên nhiều lĩnh vực khác nhau. Có chuyên môn sâu về hệ sinh thái React — Next.js, Redux Toolkit, React Query, Tailwind CSS — kết hợp với kiến ​​thức vững chắc về backend trong NestJS và PostgreSQL. Có kinh nghiệm triển khai các dự án cấp độ sản xuất với Docker, VPS và CI/CD, từ các nền tảng đặt chỗ đến các hệ thống thương mại điện tử dựa trên kiến ​​trúc microservices.",
    section_name: {
      about: "Giới thiệu",
      projects: "Dự án",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      contact: "Liên hệ",
    },
  },
  projects: [
    {
      title: "HỆ THỐNG ĐẶT LỊCH BẢO DƯỠNG XE MÁY",
      startDate: "2025",
      description:
        "Ứng dụng web cho phép khách hàng đặt lịch bảo dưỡng, kỹ thuật viên quản lý và thực hiện các công việc bảo trì, quản trị viên giám sát hoạt động hệ thống. Hỗ trợ xác thực người dùng, kiểm tra hợp lệ lịch đặt, theo dõi lịch sử bảo dưỡng và gửi thông báo email giúp quy trình bảo trì diễn ra trơn tru, hiệu quả.",
      images: [
        "/images/motorbike-system/mt-1.png",
        "/images/motorbike-system/mt-2.png",
        "/images/motorbike-system/mt-3.png",
        "/images/motorbike-system/mt-4.png",
        "/images/motorbike-system/mt-5.png",
        "/images/motorbike-system/mt-6.png",
        "/images/motorbike-system/mt-7.png",
        "/images/motorbike-system/mt-8.png",
        "/images/motorbike-system/mt-9.png",
        "/images/motorbike-system/mt-10.png",
      ],
      technologies: [
        { class: "devicon-react-plain", name: "React" },
        { class: "devicon-nextjs-plain", name: "Next.js" },
        { class: "devicon-nestjs-plain", name: "NestJS" },
        { class: "devicon-mongodb-plain", name: "MongoDB" },
        { class: "devicon-docker-plain", name: "Docker" },
        { class: "devicon-typescript-plain", name: "TypeScript" },
        { class: "devicon-tailwindcss-plain", name: "TailwindCSS" },
        { class: "devicon-antdesign-plain", name: "Ant Design" },
        { class: "devicon-axios-plain", name: "Axios" },
        { class: "devicon-redux-original", name: "Redux" },
      ],
    },
    {
      title: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ - COSOVO",
      startDate: "2025",
      description:
        "Nền tảng thương mại điện tử full-stack bán sản phẩm điện tử (Đang phát triển). Cung cấp hiển thị sản phẩm, đặt hàng, thanh toán bằng mã QR qua VietQR, tích hợp webhook thanh toán với Casso giúp giao dịch liền mạch.",
      images: [
        "/images/cosovo/cosovo-1.png",
        "/images/cosovo/cosovo-2.png",
        "/images/cosovo/cosovo-3.png",
        "/images/cosovo/cosovo-4.png",
      ],
      url: "https://cosovo.vn",
      technologies: [
        { class: "devicon-react-plain", name: "ReactJS" },
        { class: "devicon-typescript-plain", name: "TypeScript" },
        { class: "devicon-go-plain", name: "Golang" },
        { class: "devicon-postgresql-plain", name: "PostgreSQL" },
        { class: "devicon-docker-plain", name: "Docker" },
        { class: "devicon-github-original", name: "GitHub Actions" },
      ],
    },
    {
      title: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ - SAIGONTECH",
      startDate: "2025",
      description:
        "Nền tảng thương mại điện tử full-stack cho bán sỉ sản phẩm điện tử (Đang phát triển). Hỗ trợ hiển thị sản phẩm, đặt hàng, xây dựng hướng tới khả năng mở rộng và độ tin cậy cao.",
      images: [
        "/images/saigontech/saigontech-1.png",
        "/images/saigontech/saigontech-2.png",
        "/images/saigontech/saigontech-3.png",
        "/images/saigontech/saigontech-4.png",
      ],
      url: "https://saigonglobaltech.com",
      technologies: [
        { class: "devicon-nextjs-plain", name: "Next.js" },
        { class: "devicon-typescript-plain", name: "TypeScript" },
        { class: "devicon-go-plain", name: "Golang" },
        { class: "devicon-postgresql-plain", name: "PostgreSQL" },
        { class: "devicon-docker-plain", name: "Docker" },
        { class: "devicon-github-original", name: "GitHub Actions" },
      ],
    },
    // {
    //   title: "Youtube Clone",
    //   startDate: "2023",
    //   description:
    //     "YouTube Clone là nền tảng chia sẻ video cho phép người dùng tải lên, xem và tương tác với nội dung video. Ứng dụng này mô phỏng các chức năng cốt lõi của YouTube, mang lại giao diện thân thiện với người dùng.",
    //   images: [
    //     "/images/youtube-clone/youtube-clone-1.png",
    //     "/images/youtube-clone/youtube-clone-2.png",
    //   ],
    //   url: "https://youtube-clone-sigma-sandy.vercel.app/",
    //   technologies: [
    //     { class: "devicon-react-plain", name: "React" },
    //     { class: "devicon-axios-plain", name: "Axios" },
    //     { class: "devicon-redux-original", name: "Redux" },
    //   ],
    // },
    {
      title: "Ứng dụng web ERP toàn diện - The point saver",
      startDate: "2025",
      description:
        "Ứng dụng web ERP toàn diện được xây dựng với kiến trúc microservice, bao gồm quản lý đơn hàng & giao dịch, xử lý thanh toán, theo dõi tồn kho & giao hàng, quản lý nghỉ phép và hỗ trợ kỹ thuật — với kiểm soát truy cập dựa trên vai trò, Google OAuth và bảng điều khiển phân tích thời gian thực trên cả cổng khách hàng và quản trị viên.",
      images: [
        "/images/thepointsaver/thepointsaver-1.png",
        "/images/thepointsaver/thepointsaver-2.png",
      ],
      url: "https://tps-client.vercel.app",
      technologies: [
        { class: "devicon-react-plain", name: "React" },
        { class: "devicon-typescript-plain", name: "TypeScript" },
        { class: "devicon-redux-original", name: "Redux" },
        { class: "devicon-tailwindcss-original", name: "TailwindCSS" },
        { class: "devicon-nestjs-original", name: "NestJS" },
        { class: "devicon-prisma-original", name: "Prisma" },
      ],
    },
    {
      title:
        "Website thương mại điện tử cho thương hiệu thời trang - EasyBadWork",
      startDate: "2024",
      description:
        "Website thương mại điện tử cho thương hiệu thời trang EasyBadWork, bao gồm trang hiển thị sản phẩm theo danh mục, chi tiết sản phẩm, giỏ hàng & thanh toán, áp dụng mã giảm giá, quản lý đơn hàng, đặt lịch hẹn — cùng trang quản trị với quản lý sản phẩm & tồn kho, thống kê doanh thu, quản lý mã giảm giá và xác thực bằng JWT.",
      images: [
        "/images/easybadwork/easybadwork-1.png",
        "/images/easybadwork/easybadwork-2.png",
        "/images/easybadwork/easybadwork-3.png",
        "/images/easybadwork/easybadwork-4.png",
      ],
      url: "https://easybadwork.com",
      technologies: [
        { class: "devicon-nextjs-plain", name: "Next.js" },
        { class: "devicon-typescript-plain", name: "TypeScript" },
        { class: "devicon-redux-original", name: "Redux" },
        { class: "devicon-tailwindcss-original", name: "TailwindCSS" },
        { class: "devicon-antdesign-plain", name: "Ant Design" },
        { class: "devicon-docker-plain", name: "Docker" },
      ],
    },
    {
      title: "Nền tảng rao vặt trực tuyến -CHOF.VN",
      startDate: "2025",
      description:
        "Nền tảng rao vặt kết nối trực tiếp người sản xuất với người tiêu dùng trên 6 lĩnh vực chính: Thời trang, Freelance, Nội thất, Trái cây, Sửa chữa và Thực phẩm. Xây dựng theo kiến trúc microservices nhằm đảm bảo hiệu năng cao, tương tác thời gian thực và khả năng mở rộng linh hoạt.",
      images: [
        "/images/chof/chof-1.png",
        "/images/chof/chof-2.png",
        "/images/chof/chof-3.png",
        "/images/chof/chof-4.png",
      ],
      url: "https://chof.vn",
      technologies: [
        { class: "devicon-nextjs-plain", name: "Next.js" },
        { class: "devicon-typescript-plain", name: "TypeScript" },
        { class: "devicon-go-plain", name: "Golang" },
        { class: "devicon-postgresql-plain", name: "PostgreSQL" },
        { class: "devicon-docker-plain", name: "Docker" },
        { class: "devicon-github-original", name: "GitHub Actions" },
      ],
    },
    // {
    //   title: "Portfolio của tôi",
    //   startDate: "2024",
    //   description:
    //     "Portfolio cá nhân: Nơi thể hiện hành trình và các sản phẩm của tôi.",
    //   images: [
    //     "/images/portfolio/portfolio-1.png",
    //     "/images/portfolio/portfolio-2.png",
    //     "/images/portfolio/portfolio-3.png",
    //   ],
    //   url: "https://portfolio-react-dev-one.vercel.app/",
    //   technologies: [
    //     { class: "devicon-react-plain", name: "React" },
    //     { class: "devicon-nextjs-plain", name: "Next.js" },
    //     { class: "devicon-tailwindcss-plain", name: "TailwindCSS" },
    //     { class: "devicon-typescript-plain", name: "TypeScript" },
    //   ],
    // },
  ],
  experience: [
    {
      company: "Innorix Corporation",
      title: "Lập trình viên FULL-STACK Fresher",
      years: "2.2024 - 9.2024",
      mainTech: ["EJS 8/9/10"],
      technologies: ["REST API", "EJS", "JavaScript", "Bootstrap", "Tabulator"],
    },
    {
      company: "Freelance Front-end Developer - Remote",
      title: "Lập trình viên Front-end",
      years: "2024 - Hiện tại",
      mainTech: ["React, NextJS"],
      technologies: [
        "React",
        "NextJs",
        "NestJs",
        "TypeScript",
        "TailwindCss",
        "MongoDB",
        "Docker",
        "Git",
        "Gitlab",
        "Figma",
        "Swagger",
      ],
    },
    {
      company: "Wisdom Robotics",
      title: "Lập trình viên FULL-STACK Fresher",
      years: "5.2025 - 11.2025",
      mainTech: ["React, NextJS"],
      technologies: [
        "React",
        "NextJs",
        "NestJs",
        "TypeScript",
        "TailwindCss",
        "MongoDB",
        "Docker",
        "Git",
        "Gitlab",
        "Figma",
        "Swagger",
      ],
    },
  ],
};
