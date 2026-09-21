/* ==========================================================================
   FREELANCER / VIETNAM RECRUITMENT MARKETPLACE - CENTRAL DATA STORE
   ========================================================================== */

const initialProjects = [
  {
    "id": "prj-100",
    "title": "Senior Backend Engineer (Java / Spring Boot)",
    "hot": true,
    "company": "FPT Software",
    "location": "Hà Nội (Cầu Giấy)",
    "timeAgo": "2 giờ trước",
    "applicantsCount": 14,
    "salaryDisplay": "25 – 45 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "FPT",
    "logoUrl": "images/brands/fpt.svg",
    "category": "web-dev",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 1200,
    "budgetMax": 2200,
    "avgBid": 1600,
    "description": "FPT Software tìm kiếm Senior Backend Engineer có kinh nghiệm thiết kế kiến trúc Microservices, làm việc với Java Core, Spring Boot, Kafka, Redis và cơ sở dữ liệu PostgreSQL / Oracle. Tham gia trực tiếp dự án chuyển đổi số ngân hàng quy mô lớn.",
    "skills": [
      "Java",
      "Spring Boot",
      "Microservices",
      "Kafka",
      "PostgreSQL",
      "Docker",
      "Redis"
    ],
    "postedDate": "Đăng 2 giờ trước",
    "timeLeft": "Còn 15 ngày",
    "bidsCount": 14,
    "clientName": "FPT Software Recruitment",
    "clientRating": 4.9,
    "clientReviews": 128,
    "clientCountry": "Hà Nội, Việt Nam",
    "clientVerified": true,
    "clientSpent": "100+ vị trí đã tuyển",
    "clientMemberSince": "Năm 2018",
    "clientHireRate": "96%",
    "featured": true,
    "milestones": [
      {
        "desc": "Thiết kế kiến trúc Core Module & API Gateway",
        "amount": 1500
      },
      {
        "desc": "Tích hợp Kafka Streaming & Message Queue",
        "amount": 2500
      },
      {
        "desc": "Triển khai CI/CD Kubernetes & Performance Tuning",
        "amount": 1200
      }
    ],
    "bids": [
      {
        "freelancerName": "Nguyễn Văn Tuấn",
        "avatarBg": "linear-gradient(135deg, #0083c9, #00b2ff)",
        "avatarText": "NT",
        "country": "Hà Nội",
        "rating": 5,
        "reviewsCount": 42,
        "amount": 1500,
        "days": 30,
        "pitch": "6+ năm kinh nghiệm Java/Spring Boot ngân hàng số.",
        "timeAgo": "1 giờ trước"
      },
      {
        "freelancerName": "Lê Hoàng Long",
        "avatarBg": "linear-gradient(135deg, #7c3aed, #c084fc)",
        "avatarText": "LL",
        "country": "Hà Nội",
        "rating": 4.95,
        "reviewsCount": 28,
        "amount": 1800,
        "days": 30,
        "pitch": "Chuyên gia Microservices và Kafka hiệu năng cao.",
        "timeAgo": "30 phút trước"
      }
    ],
    "heroImage": "images/project_dashboard.jpg",
    "opportunityType": "job"
  },
  {
    "id": "prj-101",
    "title": "Chuyên Viên Phân Tích Dữ Liệu & AI Solution Architect",
    "hot": true,
    "company": "Ngân Hàng Vietcombank",
    "location": "Hà Nội (Hoàn Kiếm)",
    "timeAgo": "4 giờ trước",
    "applicantsCount": 22,
    "salaryDisplay": "35 – 65 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "VCB",
    "logoUrl": "images/brands/vcb.svg",
    "category": "ai-ml",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 1800,
    "budgetMax": 3000,
    "avgBid": 2400,
    "description": "Khối Công nghệ Thông tin Vietcombank tuyển dụng Chuyên viên Phân tích Dữ liệu lớn & AI Solution Architect chịu trách nhiệm phát triển mô hình chấm điểm tín dụng AI, phát hiện gian lận giao dịch thẻ và tối ưu hóa hệ thống Data Lakehouse.",
    "skills": [
      "Python",
      "Machine Learning",
      "PyTorch",
      "Spark",
      "Data Lakehouse",
      "SQL",
      "FastAPI"
    ],
    "postedDate": "Đăng 4 giờ trước",
    "timeLeft": "Còn 20 ngày",
    "bidsCount": 22,
    "clientName": "Ngân Hàng TMCP Ngoại Thương Việt Nam",
    "clientRating": 5,
    "clientReviews": 84,
    "clientCountry": "Hà Nội, Việt Nam",
    "clientVerified": true,
    "clientSpent": "Hàng đầu ngành Ngân hàng",
    "clientMemberSince": "Năm 2016",
    "clientHireRate": "98%",
    "featured": true,
    "milestones": [
      {
        "desc": "Phân tích Data Pipeline & Feature Engineering",
        "amount": 1800
      },
      {
        "desc": "Phát triển mô hình AI Credit Scoring",
        "amount": 2600
      }
    ],
    "bids": [
      {
        "freelancerName": "Phạm Quốc Anh",
        "avatarBg": "linear-gradient(135deg, #10b981, #34d399)",
        "avatarText": "QA",
        "country": "Hà Nội",
        "rating": 5,
        "reviewsCount": 35,
        "amount": 2200,
        "days": 30,
        "pitch": "Thạc sĩ Khoa học Dữ liệu 7 năm kinh nghiệm FinTech.",
        "timeAgo": "2 giờ trước"
      }
    ],
    "heroImage": "images/hero_team.jpg",
    "opportunityType": "job"
  },
  {
    "id": "prj-102",
    "title": "Lead Frontend React / Next.js Developer",
    "hot": false,
    "company": "Tập Đoàn Vingroup (VinFast Digital)",
    "location": "Hà Nội / Hải Phòng",
    "timeAgo": "6 giờ trước",
    "applicantsCount": 18,
    "salaryDisplay": "30 – 55 triệu/tháng",
    "workType": "Toàn thời gian / Linh hoạt",
    "logoType": "VIN",
    "logoUrl": "images/brands/vinfast.svg",
    "category": "web-dev",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 1500,
    "budgetMax": 2500,
    "avgBid": 2000,
    "description": "Phát triển hệ thống web ứng dụng quản trị xe điện thông minh (Smart EV Dashboard), tối ưu trải nghiệm khách hàng toàn cầu và xây dựng Design System đồng nhất bằng React 18, Next.js 14, TypeScript và TailwindCSS.",
    "skills": [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "WebSockets"
    ],
    "postedDate": "Đăng 6 giờ trước",
    "timeLeft": "Còn 12 ngày",
    "bidsCount": 18,
    "clientName": "VinFast Trading & Service",
    "clientRating": 4.95,
    "clientReviews": 95,
    "clientCountry": "Hà Nội, Việt Nam",
    "clientVerified": true,
    "clientSpent": "Doanh nghiệp toàn cầu",
    "clientMemberSince": "Năm 2019",
    "clientHireRate": "95%",
    "featured": true,
    "milestones": [
      {
        "desc": "Xây dựng Component Library & Next.js Setup",
        "amount": 1500
      },
      {
        "desc": "Dashboard Telemetry xe thông minh",
        "amount": 2000
      }
    ],
    "bids": [
      {
        "freelancerName": "Trần Minh Quang",
        "avatarBg": "linear-gradient(135deg, #0083c9, #00b2ff)",
        "avatarText": "MQ",
        "country": "Hà Nội",
        "rating": 4.95,
        "reviewsCount": 52,
        "amount": 2000,
        "days": 30,
        "pitch": "Senior Frontend Lead 8 năm kinh nghiệm React/Next.js.",
        "timeAgo": "4 giờ trước"
      }
    ],
    "heroImage": "images/project_mobile.jpg",
    "opportunityType": "job"
  },
  {
    "id": "prj-103",
    "title": "Senior Mobile Flutter / iOS Engineer",
    "hot": true,
    "company": "Tập Đoàn Viettel (Viettel Digital)",
    "location": "Hà Nội & TP. Hồ Chí Minh",
    "timeAgo": "1 ngày trước",
    "applicantsCount": 31,
    "salaryDisplay": "28 – 50 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "VTL",
    "logoUrl": "images/brands/viettel.svg",
    "category": "mobile-apps",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 1400,
    "budgetMax": 2400,
    "avgBid": 1900,
    "description": "Tham gia phát triển hệ sinh thái ứng dụng tài chính số Viettel Money phục vụ hàng chục triệu người dùng. Yêu cầu chuyên sâu về Flutter, Swift, tối ưu hóa hiệu năng và bảo mật thanh toán chuẩn quốc tế.",
    "skills": [
      "Flutter",
      "Dart",
      "Swift",
      "iOS",
      "Android",
      "CI/CD",
      "Security"
    ],
    "postedDate": "Đăng 1 ngày trước",
    "timeLeft": "Còn 25 ngày",
    "bidsCount": 31,
    "clientName": "Tổng Công Ty Dịch Vụ Số Viettel",
    "clientRating": 4.9,
    "clientReviews": 110,
    "clientCountry": "Việt Nam",
    "clientVerified": true,
    "clientSpent": "Tập đoàn công nghệ quốc gia",
    "clientMemberSince": "Năm 2015",
    "clientHireRate": "97%",
    "featured": false,
    "milestones": [
      {
        "desc": "Payment Gateway Integration & Encryption",
        "amount": 2000
      },
      {
        "desc": "Biometric KYC & Core Mobile UI",
        "amount": 2500
      }
    ],
    "bids": [
      {
        "freelancerName": "Vũ Đình Nam",
        "avatarBg": "linear-gradient(135deg, #7c3aed, #c084fc)",
        "avatarText": "DN",
        "country": "TP.HCM",
        "rating": 5,
        "reviewsCount": 40,
        "amount": 1900,
        "days": 30,
        "pitch": "Từng lead phát triển 3 ứng dụng Fintech top store.",
        "timeAgo": "1 ngày trước"
      }
    ],
    "heroImage": "images/news_tv360.jpg",
    "opportunityType": "job"
  },
  {
    "id": "prj-104",
    "title": "Digital Marketing Manager",
    "hot": true,
    "company": "Shopee Vietnam",
    "location": "TP.HCM",
    "timeAgo": "1 giờ trước",
    "applicantsCount": 45,
    "salaryDisplay": "25 – 40 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "SHP",
    "category": "recruitment",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 25,
    "budgetMax": 40,
    "description": "Quản lý và thực thi các chiến dịch Digital Marketing trên nền tảng Shopee.",
    "skills": [
      "Google Ads",
      "Facebook Ads",
      "SEO",
      "Analytics",
      "Content Strategy"
    ],
    "postedDate": "Đăng 1 giờ trước",
    "timeLeft": "Còn 15 ngày",
    "clientName": "Shopee Vietnam",
    "clientRating": 4.8,
    "clientReviews": 120,
    "clientVerified": true,
    "clientHireRate": "90%",
    "clientMemberSince": "Năm 2015",
    "featured": true,
    "logoUrl": "images/brands/shopee.svg",
    "heroImage": "images/news_emoney.jpg",
    "opportunityType": "intern"
  },
  {
    "id": "prj-105",
    "title": "Senior UI/UX Designer",
    "hot": false,
    "company": "MoMo Fintech",
    "location": "Remote",
    "timeAgo": "2 giờ trước",
    "applicantsCount": 30,
    "salaryDisplay": "30 – 50 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "MOMO",
    "category": "design",
    "type": "Remote",
    "jobType": "Chính thức",
    "budgetMin": 30,
    "budgetMax": 50,
    "description": "Thiết kế trải nghiệm người dùng cho hệ sinh thái siêu ứng dụng MoMo.",
    "skills": [
      "Figma",
      "UX Research",
      "Prototyping",
      "Design System",
      "Adobe XD"
    ],
    "postedDate": "Đăng 2 giờ trước",
    "timeLeft": "Còn 10 ngày",
    "clientName": "MoMo Fintech",
    "clientRating": 4.9,
    "clientReviews": 200,
    "clientVerified": true,
    "clientHireRate": "95%",
    "clientMemberSince": "Năm 2014",
    "featured": false,
    "logoUrl": "images/brands/momo.svg",
    "heroImage": "images/news_camid.jpg",
    "opportunityType": "job"
  },
  {
    "id": "prj-106",
    "title": "DevOps & Cloud Engineer",
    "hot": true,
    "company": "Tiki Corporation",
    "location": "TP.HCM",
    "timeAgo": "3 giờ trước",
    "applicantsCount": 20,
    "salaryDisplay": "35 – 60 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "TIKI",
    "category": "web-dev",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 35,
    "budgetMax": 60,
    "description": "Vận hành và tối ưu hệ thống Cloud, đảm bảo tính sẵn sàng cao cho e-commerce.",
    "skills": [
      "AWS",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Linux"
    ],
    "postedDate": "Đăng 3 giờ trước",
    "timeLeft": "Còn 12 ngày",
    "clientName": "Tiki Corporation",
    "clientRating": 4.7,
    "clientReviews": 150,
    "clientVerified": true,
    "clientHireRate": "92%",
    "clientMemberSince": "Năm 2012",
    "featured": true,
    "logoUrl": "images/brands/tiki.svg",
    "heroImage": "images/project_dashboard.jpg",
    "opportunityType": "scholarship"
  },
  {
    "id": "prj-107",
    "title": "HR Business Partner",
    "hot": false,
    "company": "VinFast",
    "location": "Hà Nội",
    "timeAgo": "4 giờ trước",
    "applicantsCount": 15,
    "salaryDisplay": "20 – 35 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "VF",
    "category": "recruitment",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 20,
    "budgetMax": 35,
    "description": "Đối tác nhân sự chiến lược cho các khối phòng ban tại VinFast.",
    "skills": [
      "Tuyển dụng",
      "HRBP",
      "Luật Lao Động",
      "Talent Acquisition"
    ],
    "postedDate": "Đăng 4 giờ trước",
    "timeLeft": "Còn 20 ngày",
    "clientName": "VinFast",
    "clientRating": 4.6,
    "clientReviews": 80,
    "clientVerified": true,
    "clientHireRate": "88%",
    "clientMemberSince": "Năm 2017",
    "featured": false,
    "logoUrl": "images/brands/vinfast.svg",
    "heroImage": "images/hero_team.jpg",
    "opportunityType": "intern"
  },
  {
    "id": "prj-108",
    "title": "Fullstack Node.js Developer",
    "hot": true,
    "company": "KiotViet",
    "location": "Đà Nẵng / Remote",
    "timeAgo": "5 giờ trước",
    "applicantsCount": 50,
    "salaryDisplay": "20 – 40 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "KIOT",
    "category": "web-dev",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 20,
    "budgetMax": 40,
    "description": "Phát triển tính năng mới cho nền tảng quản lý bán hàng KiotViet.",
    "skills": [
      "Node.js",
      "React",
      "MongoDB",
      "REST API",
      "TypeScript"
    ],
    "postedDate": "Đăng 5 giờ trước",
    "timeLeft": "Còn 14 ngày",
    "clientName": "KiotViet",
    "clientRating": 4.8,
    "clientReviews": 110,
    "clientVerified": true,
    "clientHireRate": "94%",
    "clientMemberSince": "Năm 2014",
    "featured": true,
    "logoUrl": "images/brands/kiotviet.svg",
    "heroImage": "images/project_mobile.jpg",
    "opportunityType": "job"
  },
  {
    "id": "prj-109",
    "title": "Data Engineer",
    "hot": false,
    "company": "VNPay",
    "location": "Hà Nội",
    "timeAgo": "6 giờ trước",
    "applicantsCount": 25,
    "salaryDisplay": "30 – 55 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "VNPAY",
    "category": "ai-ml",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 30,
    "budgetMax": 55,
    "description": "Xây dựng và tối ưu hóa hệ thống Data Pipeline cho hàng triệu giao dịch.",
    "skills": [
      "Apache Spark",
      "Airflow",
      "BigQuery",
      "Python",
      "dbt"
    ],
    "postedDate": "Đăng 6 giờ trước",
    "timeLeft": "Còn 18 ngày",
    "clientName": "VNPay",
    "clientRating": 4.9,
    "clientReviews": 190,
    "clientVerified": true,
    "clientHireRate": "96%",
    "clientMemberSince": "Năm 2011",
    "featured": false,
    "logoUrl": "images/brands/vnpay.svg",
    "heroImage": "images/news_tv360.jpg",
    "opportunityType": "scholarship"
  },
  {
    "id": "prj-110",
    "title": "Content Creator & Brand Manager",
    "hot": false,
    "company": "Grab Vietnam",
    "location": "TP.HCM",
    "timeAgo": "7 giờ trước",
    "applicantsCount": 60,
    "salaryDisplay": "18 – 30 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "GRAB",
    "category": "design",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 18,
    "budgetMax": 30,
    "description": "Sáng tạo nội dung và quản lý thương hiệu Grab trên các kênh mạng xã hội.",
    "skills": [
      "Content Marketing",
      "Copywriting",
      "Social Media",
      "Brand Strategy"
    ],
    "postedDate": "Đăng 7 giờ trước",
    "timeLeft": "Còn 10 ngày",
    "clientName": "Grab Vietnam",
    "clientRating": 4.7,
    "clientReviews": 300,
    "clientVerified": true,
    "clientHireRate": "93%",
    "clientMemberSince": "Năm 2014",
    "featured": false,
    "logoUrl": "images/brands/grab.svg",
    "heroImage": "images/news_emoney.jpg",
    "opportunityType": "job"
  },
  {
    "id": "prj-111",
    "title": "Supply Chain Manager",
    "hot": true,
    "company": "Samsung Vietnam",
    "location": "Bắc Ninh",
    "timeAgo": "8 giờ trước",
    "applicantsCount": 18,
    "salaryDisplay": "35 – 65 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "SS",
    "category": "recruitment",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 35,
    "budgetMax": 65,
    "description": "Quản lý chuỗi cung ứng toàn cầu, tối ưu hóa quy trình sản xuất và vận chuyển.",
    "skills": [
      "Quản lý chuỗi cung ứng",
      "ERP SAP",
      "Lean Six Sigma",
      "Procurement"
    ],
    "postedDate": "Đăng 8 giờ trước",
    "timeLeft": "Còn 25 ngày",
    "clientName": "Samsung Vietnam",
    "clientRating": 4.8,
    "clientReviews": 500,
    "clientVerified": true,
    "clientHireRate": "98%",
    "clientMemberSince": "Năm 2008",
    "featured": true,
    "logoUrl": "images/brands/samsung.svg",
    "heroImage": "images/news_camid.jpg",
    "opportunityType": "intern"
  },
  {
    "id": "prj-112",
    "title": "QA Engineer (Automation)",
    "hot": false,
    "company": "Axon Active Vietnam",
    "location": "Đà Nẵng",
    "timeAgo": "9 giờ trước",
    "applicantsCount": 22,
    "salaryDisplay": "18 – 35 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "AXON",
    "category": "web-dev",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 18,
    "budgetMax": 35,
    "description": "Phát triển và duy trì framework kiểm thử tự động cho các dự án phần mềm.",
    "skills": [
      "Selenium",
      "Cypress",
      "Python",
      "Postman",
      "JIRA"
    ],
    "postedDate": "Đăng 9 giờ trước",
    "timeLeft": "Còn 15 ngày",
    "clientName": "Axon Active Vietnam",
    "clientRating": 4.6,
    "clientReviews": 70,
    "clientVerified": true,
    "clientHireRate": "91%",
    "clientMemberSince": "Năm 2008",
    "featured": false,
    "logoUrl": "images/brands/axon.svg",
    "heroImage": "images/project_dashboard.jpg",
    "opportunityType": "scholarship"
  },
  {
    "id": "prj-113",
    "title": "Financial Analyst",
    "hot": true,
    "company": "VPBank Securities",
    "location": "Hà Nội",
    "timeAgo": "10 giờ trước",
    "applicantsCount": 35,
    "salaryDisplay": "25 – 45 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "VPBS",
    "category": "recruitment",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 25,
    "budgetMax": 45,
    "description": "Phân tích tài chính, đánh giá rủi ro và tư vấn đầu tư chiến lược.",
    "skills": [
      "Excel",
      "Python",
      "Financial Modeling",
      "Báo Cáo Tài Chính",
      "CFA"
    ],
    "postedDate": "Đăng 10 giờ trước",
    "timeLeft": "Còn 14 ngày",
    "clientName": "VPBank Securities",
    "clientRating": 4.7,
    "clientReviews": 95,
    "clientVerified": true,
    "clientHireRate": "92%",
    "clientMemberSince": "Năm 2010",
    "featured": true,
    "logoUrl": "images/brands/vpbank.svg",
    "heroImage": "images/hero_team.jpg",
    "opportunityType": "job"
  },
  {
    "id": "prj-114",
    "title": "Game Developer (Unity)",
    "hot": false,
    "company": "VNG Corporation",
    "location": "TP.HCM",
    "timeAgo": "11 giờ trước",
    "applicantsCount": 40,
    "salaryDisplay": "28 – 50 triệu/tháng",
    "workType": "Toàn thời gian",
    "logoType": "VNG",
    "logoUrl": "images/brands/vng.svg",
    "category": "mobile-apps",
    "type": "Full-Time",
    "jobType": "Chính thức",
    "budgetMin": 28,
    "budgetMax": 50,
    "description": "Phát triển game mobile trên nền tảng Unity 3D, tối ưu hóa hiệu năng.",
    "skills": [
      "Unity3D",
      "C#",
      "Game Design",
      "Shader",
      "Firebase"
    ],
    "postedDate": "Đăng 11 giờ trước",
    "timeLeft": "Còn 12 ngày",
    "clientName": "VNG Corporation",
    "clientRating": 4.8,
    "clientReviews": 250,
    "clientVerified": true,
    "clientHireRate": "96%",
    "clientMemberSince": "Năm 2004",
    "featured": false,
    "heroImage": "images/project_mobile.jpg",
    "opportunityType": "job"
  }
];


const initialFreelancers = [
  {
    "id": "fl-1",
    "name": "Trần Minh Quang",
    "title": "Principal Cloud & Solution Architect",
    "avatarBg": "linear-gradient(135deg, #0083c9, #00b2ff)",
    "avatarText": "MQ",
    "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    "hourlyRate": 45,
    "rating": 5,
    "reviewsCount": 88,
    "successRate": 100,
    "completedJobs": 54,
    "country": "Hà Nội, Việt Nam",
    "tagline": "Kiến trúc hệ thống Microservices & Điện toán đám mây quy mô triệu CCU.",
    "bio": "Chuyên gia kiến trúc phần mềm với 10+ năm kinh nghiệm. Từng chủ trì các dự án Core Banking và E-commerce lớn tại Đông Nam Á.",
    "skills": [
      "Java",
      "Spring Boot",
      "AWS",
      "Kubernetes",
      "PostgreSQL",
      "Kafka"
    ]
  },
  {
    "id": "fl-2",
    "name": "Nguyễn Hà My",
    "title": "Senior Product Designer & UX Lead",
    "avatarBg": "linear-gradient(135deg, #ec4899, #f43f5e)",
    "avatarText": "HM",
    "photoUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    "hourlyRate": 40,
    "rating": 4.98,
    "reviewsCount": 65,
    "successRate": 99,
    "completedJobs": 42,
    "country": "TP. Hồ Chí Minh, Việt Nam",
    "tagline": "Thiết kế trải nghiệm người dùng tinh tế, thúc đẩy tăng trưởng sản phẩm.",
    "bio": "Lead Designer từng xây dựng Design System cho các siêu ứng dụng FinTech và Logistics đạt hơn 5 triệu lượt tải.",
    "skills": [
      "Figma",
      "Design System",
      "UX Research",
      "Prototyping",
      "Mobile UI"
    ]
  },
  {
    "id": "fl-3",
    "name": "Lê Hoàng Long",
    "title": "AI & Machine Learning Research Engineer",
    "avatarBg": "linear-gradient(135deg, #10b981, #34d399)",
    "avatarText": "HL",
    "photoUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    "hourlyRate": 55,
    "rating": 5,
    "reviewsCount": 76,
    "successRate": 100,
    "completedJobs": 38,
    "country": "Đà Nẵng, Việt Nam",
    "tagline": "Phát triển giải pháp Generative AI, RAG Pipeline & Mô hình phân tích dữ liệu lớn.",
    "bio": "Thạc sĩ Khoa học Máy tính. Chuyên sâu về LLM fine-tuning, vector database, thị giác máy tính và các giải pháp NLP thực chiến.",
    "skills": [
      "Python",
      "PyTorch",
      "LangChain",
      "OpenAI API",
      "FastAPI",
      "Pinecone"
    ]
  },
  {
    "id": "fl-4",
    "name": "Phạm Quốc Hùng",
    "title": "Lead Mobile Flutter & iOS Engineer",
    "avatarBg": "linear-gradient(135deg, #8b5cf6, #d946ef)",
    "avatarText": "QH",
    "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    "hourlyRate": 38,
    "rating": 4.95,
    "reviewsCount": 92,
    "successRate": 98,
    "completedJobs": 60,
    "country": "Hà Nội, Việt Nam",
    "tagline": "Phát triển ứng dụng di động đa nền tảng tối ưu hiệu năng và bảo mật.",
    "bio": "8 năm phát triển ứng dụng di động. Phát hành hơn 30 ứng dụng trên App Store và Google Play.",
    "skills": [
      "Flutter",
      "Dart",
      "Swift",
      "iOS",
      "Android",
      "CI/CD Mobile"
    ]
  },
  {
    "id": "fl-5",
    "name": "Vũ Đình Nam",
    "title": "Senior Full-Stack Next.js & Node.js Developer",
    "avatarBg": "linear-gradient(135deg, #0ea5e9, #6366f1)",
    "avatarText": "DN",
    "photoUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
    "hourlyRate": 35,
    "rating": 4.92,
    "reviewsCount": 50,
    "successRate": 100,
    "completedJobs": 35,
    "country": "TP. Hồ Chí Minh, Việt Nam",
    "tagline": "Xây dựng Web App hiện đại, tốc độ cao với Next.js và Serverless.",
    "bio": "Chuyên gia phát triển frontend và full-stack hiện đại, am hiểu SEO, Web Vitals và kiến trúc Serverless.",
    "skills": [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "MongoDB"
    ]
  },
  {
    "id": "fl-6",
    "name": "Đỗ Mai Anh",
    "title": "Talent Acquisition & HRBP Advisor",
    "avatarBg": "linear-gradient(135deg, #f59e0b, #ef4444)",
    "avatarText": "MA",
    "photoUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    "hourlyRate": 30,
    "rating": 5,
    "reviewsCount": 44,
    "successRate": 100,
    "completedJobs": 70,
    "country": "Hà Nội, Việt Nam",
    "tagline": "Tư vấn tuyển dụng nhân sự cấp cao và xây dựng văn hóa doanh nghiệp.",
    "bio": "Cố vấn nhân sự cho hơn 20 startup và doanh nghiệp công nghệ tại Việt Nam.",
    "skills": [
      "Headhunting",
      "HRBP",
      "Tech Recruitment",
      "Talent Mapping",
      "Interviewing"
    ]
  }
];

const initialCategories = [
  {
    "id": "web-dev",
    "name": "Websites, IT & Software",
    "count": 6840
  },
  {
    "id": "mobile-apps",
    "name": "Mobile Apps & Devices",
    "count": 3240
  },
  {
    "id": "ai-ml",
    "name": "AI, Machine Learning & Data",
    "count": 2450
  },
  {
    "id": "recruitment",
    "name": "Direct Recruitment Roles",
    "count": 4120
  },
  {
    "id": "design",
    "name": "Design, Media & UI/UX",
    "count": 3800
  },
  {
    "id": "writing",
    "name": "Technical Writing & Specs",
    "count": 1250
  }
];

const initialNotifications = [
  {
    "id": "n-1",
    "text": "Elena Rostova submitted a proposal bid on your Next.js E-Commerce project.",
    "time": "10m ago",
    "unread": true
  },
  {
    "id": "n-2",
    "text": "Escrow Deposit Confirmed: $3,500 locked in Milestone Vault.",
    "time": "1h ago",
    "unread": true
  }
];

const initialChatThreads = [
  {
    "id": "chat-1",
    "freelancerId": "fl-1",
    "freelancerName": "Elena Rostova",
    "avatarText": "ER",
    "messages": [
      {
        "sender": "them",
        "text": "Hello! I reviewed your project specification and I am ready to start immediately.",
        "time": "10:14 AM"
      },
      {
        "sender": "me",
        "text": "Hi Elena! Great to hear. All milestone funds are secured in escrow.",
        "time": "10:16 AM"
      }
    ]
  }
];

const initialArticles = [
  {
    "id": "art-101",
    "type": "editor",
    "topic": "market",
    "category": "Thời Sự Tuyển Dụng",
    "title": "Khảo sát thị trường lao động Q3/2026: Nhu cầu nhân sự IT & AI tăng vọt 34% tại Đông Nam Á",
    "summary": "Báo cáo mới nhất từ Hiệp hội Công nghệ chỉ ra sự bùng nổ nhu cầu nhân lực AI, Data Engineering và Cloud Architecture, với mức lương khởi điểm tăng mạnh.",
    "author": "Ban Biên Tập WorkThean",
    "authorRole": "Managing Editor",
    "date": "18 Tháng 9, 2026",
    "readTime": "4 phút đọc",
    "image": "images/project_dashboard.jpg",
    "featured": true
  },
  {
    "id": "art-102",
    "type": "company",
    "topic": "product",
    "category": "Giới Thiệu Sản Phẩm",
    "companyName": "FPT Software",
    "title": "FPT Software ra mắt nền tảng Cloud AI Enterprise giúp tối ưu hóa 40% quy trình vận hành",
    "summary": "Giải pháp đám mây thế hệ mới được ứng dụng tại hơn 50 tập đoàn đa quốc gia thuộc Fortune 500, mở ra hàng trăm vị trí kỹ sư AI tại Việt Nam.",
    "author": "Phòng Truyền Thông FPT",
    "authorRole": "HR & Marketing Lead",
    "date": "17 Tháng 9, 2026",
    "readTime": "5 phút đọc",
    "image": "images/hero_team.jpg",
    "featured": false
  },
  {
    "id": "art-103",
    "type": "expert",
    "topic": "management",
    "category": "Góc Chuyên Gia",
    "title": "Xây dựng Văn Hóa Doanh Nghiệp & Giữ Chân Nhân Tài Trong Kỷ Nguyên Hybrid Work",
    "summary": "Bài viết chuyên sâu từ Tiến sĩ Nguyễn Văn Nam (Chuyên gia Quản trị Nhân sự Tập đoàn Vingroup) chia sẻ 5 trụ cột then chốt giữ chân người tài.",
    "author": "TS. Nguyễn Văn Nam",
    "authorRole": "Phó Tổng Giám Đốc Nhân Sự Vingroup",
    "date": "16 Tháng 9, 2026",
    "readTime": "7 phút đọc",
    "image": "images/news_emoney.jpg",
    "featured": false
  },
  {
    "id": "art-104",
    "type": "company",
    "topic": "technology",
    "category": "Công Nghệ & Hạ Tầng",
    "companyName": "Viettel Solutions",
    "title": "Viettel ra mắt hệ sinh thái hạ tầng 5G Private cho các khu công nghiệp thông minh",
    "summary": "Hạ tầng mạng di động dùng riêng giúp đảm bảo an ninh dữ liệu tuyệt đối cho các nhà máy sản xuất tự động hóa quy mô lớn trên toàn quốc.",
    "author": "Đội Ngũ HR Viettel",
    "authorRole": "Employer Branding Manager",
    "date": "15 Tháng 9, 2026",
    "readTime": "3 phút đọc",
    "image": "images/news_tv360.jpg",
    "featured": false
  },
  {
    "id": "art-105",
    "type": "editor",
    "topic": "salary",
    "category": "Báo Cáo Đãi Ngộ",
    "title": "Báo Cáo Lương & Phúc Lợi Ngành Công Nghệ 2026: Xu hướng và thang đo mức thu nhập",
    "summary": "Tổng hợp đánh giá từ 500 Giám đốc Công nghệ (CTO) về mặt bằng thu nhập thực tế, chính sách cổ phần ESOP và các khoản thưởng hiệu suất.",
    "author": "Ban Biên Tập WorkThean",
    "authorRole": "Market Research Team",
    "date": "14 Tháng 9, 2026",
    "readTime": "6 phút đọc",
    "image": "images/news_camid.jpg",
    "featured": false
  },
  {
    "id": "art-106",
    "type": "company",
    "topic": "services",
    "category": "Dịch Vụ Doanh Nghiệp",
    "companyName": "MoMo Fintech",
    "title": "MoMo công bố giải pháp Chi Lương Tức Thì & Phúc Lợi Số cho 100,000 lao động Việt",
    "summary": "Nền tảng giúp người lao động nhận lương linh hoạt theo ngày công thực tế, tăng 65% sự hài lòng và mức độ gắn kết với doanh nghiệp.",
    "author": "MoMo Enterprise Solutions",
    "authorRole": "B2B Marketing Lead",
    "date": "13 Tháng 9, 2026",
    "readTime": "4 phút đọc",
    "image": "images/project_mobile.jpg",
    "featured": false
  },
  {
    "id": "art-107",
    "type": "expert",
    "topic": "career",
    "category": "Góc Chuyên Gia",
    "title": "Tương Lai Của Nghề Nhân Sự: Khi Trí Tuệ Nhân Tạo Tự Động Hóa Khâu Quét Hồ Sơ",
    "summary": "Góc nhìn phân tích từ Thạc sĩ Lê Hoàng Yến về cách các ứng viên vượt qua hệ thống ATS và chuẩn bị năng lực tư duy phản biện.",
    "author": "ThS. Lê Hoàng Yến",
    "authorRole": "Chuyên gia Đào tạo & Khai vấn Lãnh đạo",
    "date": "12 Tháng 9, 2026",
    "readTime": "5 phút đọc",
    "image": "images/hero_team.jpg",
    "featured": false
  }
];

const initialCompanyArticles = [
  {
    "id": "comp-art-1",
    "company": "Samsung Vietnam",
    "logo": "images/brands/samsung.svg",
    "title": "Samsung mở rộng trung tâm R&D tại Hà Nội, tuyển dụng 500 kỹ sư nghiên cứu AI",
    "date": "18 Tháng 9, 2026",
    "category": "Đầu Tư & Tuyển Dụng",
    "author": "Văn Phòng Báo Chí Samsung",
    "readTime": "5 phút",
    "summary": "Trung tâm R&D lớn nhất khu vực Đông Nam Á của Samsung tăng tốc đầu tư các dự án trí tuệ nhân tạo thế hệ mới, mở rộng chỉ tiêu tuyển sinh viên xuất sắc.",
    "fullStory": "Samsung Electronics Việt Nam vừa chính thức công bố kế hoạch mở rộng năng lực nghiên cứu phát triển tại Trung tâm R&D Hà Nội, tập trung vào mô hình học sâu, bán dẫn và thiết bị IoT thông minh."
  },
  {
    "id": "comp-art-2",
    "company": "Nike Vietnam",
    "logo": "images/brands/nike.svg",
    "title": "Nike thúc đẩy mô hình chuỗi cung ứng xanh và sản xuất bền vững tại Việt Nam",
    "date": "17 Tháng 9, 2026",
    "category": "Bền Vững & Chuỗi Cung Ứng",
    "author": "Nike Sustainability Team",
    "readTime": "4 phút",
    "summary": "Mở rộng cơ hội việc làm quản lý chất lượng và kỹ sư môi trường cho hệ thống đối tác sản xuất trên toàn quốc, hướng tới mục tiêu phát thải ròng bằng 0.",
    "fullStory": "Chương trình Move to Zero của Nike tiếp tục được đẩy mạnh tại các nhà máy đối tác chiến lược ở Đồng Nai và Bình Dương với cam kết chuyển đổi 100% năng lượng tái tạo."
  },
  {
    "id": "comp-art-3",
    "company": "L'Oréal Vietnam",
    "logo": "images/brands/loreal.svg",
    "title": "L'Oréal công bố chương trình Nhà Lãnh Đạo Tương Lai 2026 dành cho Sinh viên",
    "date": "16 Tháng 9, 2026",
    "category": "Học Bổng & Quản Trị Viên Tập Sự",
    "author": "Talent Acquisition L'Oréal",
    "readTime": "4 phút",
    "summary": "Chương trình luân chuyển công tác quốc tế 18 tháng tại Paris và Singapore dành cho các tài năng trẻ xuất sắc ngành Marketing và Chuỗi cung ứng.",
    "fullStory": "Chương trình Management Trainee 2026 của L'Oréal mang đến lộ trình thăng tiến nhanh cho các bạn trẻ mới tốt nghiệp, kèm mức lương cạnh tranh và cơ hội đào tạo tại châu Âu."
  },
  {
    "id": "comp-art-4",
    "company": "Tập Đoàn Vingroup",
    "logo": "images/brands/vingroup.svg",
    "title": "VinFast mở rộng mạng lưới trạm sạc xe điện thông minh và trung tâm phần mềm toàn cầu",
    "date": "15 Tháng 9, 2026",
    "category": "Công Nghệ & Hạ Tầng Xanh",
    "author": "Ban Truyền Thông Vingroup",
    "readTime": "6 phút",
    "summary": "Tuyển dụng 300 kỹ sư Embedded Systems, Autonomous Driving và DevOps phục vụ thị trường Bắc Mỹ, Châu Âu và Đông Nam Á.",
    "fullStory": "VinFast tiếp tục khẳng định vị thế dẫn đầu trong chuyển đổi di chuyển xanh khi triển khai đồng loạt các trung tâm dịch vụ và trung tâm công nghệ cao tại Hà Nội và Hải Phòng."
  }
];



/* ==========================================================================
   ENTERPRISE HR SERVICES DATA STORE
   ========================================================================== */
const initialServices = [
  {
    id: "srv-101",
    title: "Executive Headhunting & Leadership Search",
    category: "Recruitment",
    provider: "WorkThean Executive",
    rating: 4.9,
    reviewsCount: 84,
    description: "Specialized C-level and Senior Engineering talent search for technology, banking, and fintech enterprises.",
    features: ["Pre-vetted Leadership Pipeline", "Replacement Guarantee (180 Days)", "Background & Reference Check Included"],
    priceDisplay: "15% - 20% Annual Salary",
    badge: "Top Rated"
  },
  {
    id: "srv-102",
    title: "TALENT-INDEX™ Background & Education Verification",
    category: "Verification",
    provider: "WorkThean Verification",
    rating: 4.8,
    reviewsCount: 112,
    description: "Automated candidate background verification, degree checking, and employment history audit.",
    features: ["Real-time Academic Verification", "Legal & Criminal Audit", "24-Hour Turnaround Time"],
    priceDisplay: "$45 per candidate",
    badge: "Automated"
  },
  {
    id: "srv-103",
    title: "Employer Branding & Campus Recruitment Solution",
    category: "Branding",
    provider: "WorkThean Brand Studio",
    rating: 4.9,
    reviewsCount: 46,
    description: "End-to-end employer brand positioning, tech hackathon organization, and university career fairs.",
    features: ["Tech Talent Reach 500k+", "Dedicated Video & Media Production", "Campus Ambassador Program"],
    priceDisplay: "Custom Enterprise Plan",
    badge: "Enterprise"
  },
  {
    id: "srv-104",
    title: "Global Payroll & Cross-Border Remote EOR",
    category: "Payroll & Legal",
    provider: "WorkThean Global Payroll",
    rating: 4.7,
    reviewsCount: 68,
    description: "Employer of Record (EOR) service allowing international tech enterprises to hire Vietnamese talent legally.",
    features: ["100% Vietnamese Labor Law Compliance", "Multi-Currency Tax & Insurance", "Contract Management"],
    priceDisplay: "$199 / employee / month",
    badge: "Compliance"
  }
];

/* ==========================================================================
   ACADEMY & CERTIFICATION COURSES DATA STORE
   ========================================================================== */
const initialAcademyCourses = [
  {
    id: "course-101",
    title: "Certified Enterprise Technical Recruiter (CETR®)",
    level: "Advanced",
    duration: "6 Weeks (Online + Live Workshop)",
    instructor: "Hoang Nam (CHRO, WorkThean)",
    enrolledCount: 1240,
    rating: 4.9,
    price: "$299",
    description: "Master modern technical sourcing, AI-driven candidate screening, System Architecture interview evaluation, and offer closing strategies.",
    modules: ["Technical Role Deconstruction", "Advanced Boolean & Sourcing", "AI Candidate Evaluation", "Offer Closing & Compensation Negotiation"],
    certificateName: "CETR® Enterprise Recruiter Certificate"
  },
  {
    id: "course-102",
    title: "Vietnam Labor Law & Employment Contracts 2026",
    level: "Intermediate",
    duration: "4 Weeks (Self-paced)",
    instructor: "Tran Thu Huong (Senior HR Legal Counsel)",
    enrolledCount: 890,
    rating: 4.8,
    price: "$199",
    description: "Complete legal compliance masterclass covering remote contracts, NDA/NCA enforcement, severance packages, and labor dispute prevention.",
    modules: ["2026 Labor Code Updates", "Remote & Freelance Legal Framework", "NDA/NCA Enforceability", "Dispute Resolution"],
    certificateName: "Certified HR Compliance Specialist"
  },
  {
    id: "course-103",
    title: "Total Rewards & Compensation Structure Architecture",
    level: "Executive",
    duration: "5 Weeks (Live Masterclass)",
    instructor: "Nguyen Van Minh (Total Rewards Director)",
    enrolledCount: 650,
    rating: 4.9,
    price: "$349",
    description: "Learn how to build competitive salary bands, ESOP incentive models, and performance-linked bonus structures for scaling tech companies.",
    modules: ["Market Salary Benchmarking", "Salary Band Architecture", "ESOP & Long-Term Incentives", "Flexible Benefits Design"],
    certificateName: "Certified Compensation Manager (CCM®)"
  }
];

/* ==========================================================================
   EXPERT DIRECTORY DATA STORE
   ========================================================================== */
const initialExperts = [
  {
    id: "expert-101",
    name: "Hoang Nam",
    role: "Chief Human Resources Officer",
    company: "WorkThean Enterprise",
    experience: "15+ Years",
    avatar: "images/brands/fpt.svg",
    specialties: ["Technical Recruitment", "Executive Search", "AI HR Systems"],
    articlesCount: 24,
    followersCount: "14.2k",
    bio: "Pioneer in tech recruitment architecture in SE Asia. Author of 'The State of Tech Talent 2026' report."
  },
  {
    id: "expert-102",
    name: "Tran Thu Huong",
    role: "Senior HR Legal Counsel",
    company: "Vietnam HR Legal Alliance",
    experience: "12+ Years",
    avatar: "images/brands/vcb.svg",
    specialties: ["Labor Law", "Remote Employment Contracts", "NDA/NCA Disputes"],
    articlesCount: 18,
    followersCount: "9.8k",
    bio: "Specialist in employment law compliance, cross-border remote work regulations, and intellectual property protection."
  },
  {
    id: "expert-103",
    name: "Nguyen Van Minh",
    role: "Global Total Rewards Director",
    company: "Fintech Growth Partners",
    experience: "14+ Years",
    avatar: "images/brands/viettel.svg",
    specialties: ["Compensation Benchmarking", "ESOP Design", "Executive Pay"],
    articlesCount: 15,
    followersCount: "11.5k",
    bio: "Expert in enterprise salary benchmarking, equity compensation architecture, and performance management models."
  }
];
