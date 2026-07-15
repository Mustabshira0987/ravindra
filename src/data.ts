import { Department, CourseOffering, PlacementsData, CampusFacility, NewsEvent, FacultyMember, Testimonial, FAQItem } from './types';

export const COLLEGE_INFO = {
  name: 'Ravindra Engineering College for Women',
  abbreviation: 'RCEW',
  location: 'Kurnool, Andhra Pradesh, India',
  established: 2008,
  affiliation: 'JNTU Anantapur (JNTUA)',
  approvals: ['AICTE Approved', 'ISO 9001:2015 Certified'],
  accreditations: ['NAAC Accredited', 'NBA Accredited (CSE, ECE)'],
  collegeCode: 'REC',
  tagline: 'Empowering Women Through Quality Engineering Education',
  aboutBrief: 'Ravindra Engineering College for Women (RCEW), Kurnool was established in 2008 under the visionary leadership of Sri G. Pullaiah. With a strong commitment to empowering women in technical fields, RCEW has emerged as a premier institution in Rayalaseema, offering cutting-edge technology education, robust industry connections, and an environment designed to nurture leadership and innovation.',
  principalMessage: 'Dear Students, Welcome to Ravindra Engineering College for Women. Our mission is to produce globally competent and socially responsible women engineers who can lead technological innovations. With state-of-the-art infrastructure, experienced faculty, and industry-aligned training, we ensure that every student is equipped to conquer the professional world. Our consistent placement record is a testament to the hard work of our faculty and the excellence of our students.',
  principalName: 'Dr. K. E. Sreenivasa Murthy',
  principalTitle: 'M.Tech., Ph.D., Principal, RCEW',
  principalImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  contact: {
    address: 'Nandikotkur Road, Venkayapalli, Kurnool, Andhra Pradesh - 518002',
    phone: '+91 92469 22069, +91 8518 272669',
    email: 'principal@recw.ac.in, admissions@recw.ac.in',
    mapIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.93380295191!2d78.0700021!3d15.8504018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d0!2d78.0700021!3d15.8504018!2sRavindra+Engineering+College+for+Women!5e0!3m2!1sen!2sin!4v1580000000000!5m2!1sen!2sin',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com'
    }
  }
};

export const STATS = [
  { id: 'students', label: 'Enrolled Students', value: 2400, suffix: '+' },
  { id: 'faculty', label: 'Faculty Members', value: 160, suffix: '+' },
  { id: 'departments', label: 'Academic Departments', value: 7, suffix: '' },
  { id: 'placements', label: 'Placement Rate', value: 95, suffix: '%' },
  { id: 'recruiters', label: 'Top Recruiters', value: 80, suffix: '+' },
  { id: 'alumni', label: 'Global Alumni', value: 5000, suffix: '+' }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    code: 'CSE',
    shortDesc: 'Nurturing innovative software developers and compute scientists for the modern digital era.',
    fullDesc: 'The Department of Computer Science & Engineering at RCEW was established in 2008. The department is NBA-accredited and known for high academic standards and student-driven innovation. It boasts ultra-modern laboratory facilities, regular guest lectures from top tech leaders, and strong coding club cultures to prepare young women for global software roles.',
    intake: 180,
    duration: '4 Years (B.Tech)',
    established: 2008,
    labs: ['Java Programming Lab', 'Advanced Data Structures Lab', 'Cloud Computing & IoT Lab', 'Mobile App Development Lab', 'Computer Networks Lab'],
    careers: ['Software Engineer', 'Full Stack Developer', 'Cloud Engineer', 'Cyber Security Analyst', 'Database Administrator'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    hodName: 'Dr. G. Ramesh',
    hodDesignation: 'Professor & Head of Department',
    hodQualification: 'M.Tech, Ph.D in Computer Science'
  },
  {
    id: 'aids',
    name: 'Artificial Intelligence & Data Science',
    code: 'AI&DS',
    shortDesc: 'Pioneering the next wave of computing with machine learning, neural networks, and analytical intelligence.',
    fullDesc: 'Designed to cater to the explosive demand for data intelligence, the Department of AI & Data Science trains students in algorithms, statistical models, natural language processing, computer vision, and big data pipeline engineering. Students work on real-world datasets and complete hands-on AI projects.',
    intake: 120,
    duration: '4 Years (B.Tech)',
    established: 2021,
    labs: ['AI & Neural Networks Lab', 'Big Data Analytics Lab', 'Machine Learning & Python Lab', 'Data Visualization Studio'],
    careers: ['Data Scientist', 'AI Research Engineer', 'Machine Learning Analyst', 'Business Intelligence Consultant', 'Data Architect'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800',
    hodName: 'Dr. T. Kavitha',
    hodDesignation: 'Professor & Head of Department',
    hodQualification: 'Ph.D. in Artificial Intelligence'
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    code: 'ECE',
    shortDesc: 'Connecting the physical and digital worlds through VLSI, communication systems, and embedded signal processing.',
    fullDesc: 'The NBA-accredited ECE department provides deep knowledge of hardware systems, microcontrollers, VLSI design, wireless networks, and IoT architectures. RCEW ECE students consistently win national level hackathons and secure placements in both core electronics and IT corporations.',
    intake: 120,
    duration: '4 Years (B.Tech)',
    established: 2008,
    labs: ['VLSI & Embedded Systems Lab', 'Analog & Digital Communications Lab', 'Microprocessors & Microcontrollers Lab', 'Digital Signal Processing Lab', 'Microwave Engineering Lab'],
    careers: ['Embedded Systems Engineer', 'VLSI Design Engineer', 'Telecom Systems Architect', 'IoT Solutions Expert', 'Hardware Test Analyst'],
    image: 'https://images.unsplash.com/photo-1517055727180-d5a0cd281b78?auto=format&fit=crop&q=80&w=800',
    hodName: 'Dr. J. Prasanna Kumar',
    hodDesignation: 'Professor & Head of Department',
    hodQualification: 'M.E., Ph.D. in Communication Systems'
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics Engineering',
    code: 'EEE',
    shortDesc: 'Powering a sustainable future through smart grids, power electronics, and electric vehicle designs.',
    fullDesc: 'The EEE department at RCEW trains women to innovate in modern renewable energy systems, high voltage transmissions, electric vehicle drivetrains, and automatic industrial controls. The coursework blends classical grid logic with dynamic electronic engineering.',
    intake: 60,
    duration: '4 Years (B.Tech)',
    established: 2009,
    labs: ['Electrical Machines Lab', 'Power Systems Simulation Lab', 'Control Systems Lab', 'Power Electronics & Drives Lab'],
    careers: ['Smart Grid Design Engineer', 'EV Powertrain Engineer', 'Power Plant Automation Analyst', 'Control Engineer', 'Energy Systems Consultant'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    hodName: 'Dr. M. Sreenivasulu',
    hodDesignation: 'Associate Professor & HOD',
    hodQualification: 'M.Tech, Ph.D. in Power Electronics'
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    code: 'CIVIL',
    shortDesc: 'Designing and building sustainable infrastructure, smart townships, and environment-friendly green spaces.',
    fullDesc: 'The Department of Civil Engineering focuses on structural integrity, geotechnical designs, water resource conservation, and environmental engineering. Students use advanced CAD tools and perform intensive lab work on materials and structure modeling.',
    intake: 30,
    duration: '4 Years (B.Tech)',
    established: 2012,
    labs: ['Concrete Technology Lab', 'Geotechnical Engineering Lab', 'Fluid Mechanics & Hydraulic Machinery Lab', 'Surveying & CAD Studio'],
    careers: ['Structural Consultant', 'Site Engineer', 'Urban Planning Consultant', 'Geotechnical Analyst', 'Estimation Engineer'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    hodName: 'Mr. K. Madhan Gopal',
    hodDesignation: 'Assistant Professor & HOD',
    hodQualification: 'M.Tech in Structural Engineering'
  },
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    code: 'MECH',
    shortDesc: 'Mastering robotics, CAD/CAM modeling, thermodynamic innovations, and manufacturing technology.',
    fullDesc: 'Breaking gender stereotypes, RCEW’s Mechanical Engineering department is dedicated to preparing women for industry 4.0, combining robotics, thermodynamics, materials science, and digital high-tech manufacturing architectures.',
    intake: 30,
    duration: '4 Years (B.Tech)',
    established: 2012,
    labs: ['Thermal Engineering Lab', 'Machine Tools & Metrology Lab', 'CAD/CAM Lab', 'Fluid Dynamics & Heat Transfer Lab'],
    careers: ['Robotics Design Engineer', 'HVAC Consultant', 'Automotive Systems Designer', 'Quality Assurance Manager', 'Production Planner'],
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&q=80&w=800',
    hodName: 'Mr. P. Shiva Ram',
    hodDesignation: 'Assistant Professor & HOD',
    hodQualification: 'M.Tech in Machine Design'
  },
  {
    id: 'mba',
    name: 'Master of Business Administration',
    code: 'MBA',
    shortDesc: 'Grooming corporate managers, financial analysts, and entrepreneurs with high-impact strategic business leadership.',
    fullDesc: 'Our MBA postgraduate stream offers specializations in Human Resource Management, Finance, and Marketing. Centered on leadership case studies, internship exposures, and soft-skill development, RCEW MBA is a gateway to premium corporate pathways.',
    intake: 60,
    duration: '2 Years (Postgraduate)',
    established: 2010,
    labs: ['Management Communication Lab', 'Business Analytics Lab', 'Financial Analysis Suite'],
    careers: ['HR Manager', 'Financial Analyst', 'Marketing Specialist', 'Business Development Officer', 'Project Consultant'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    hodName: 'Mrs. S. Shabana',
    hodDesignation: 'Associate Professor & Head of MBA',
    hodQualification: 'MBA, (Ph.D) in Human Resources'
  }
];

export const COURSE_OFFERINGS: CourseOffering[] = [
  { degree: 'B.Tech', branch: 'Computer Science & Engineering', duration: '4 Years', seats: 180, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'B.Tech', branch: 'Artificial Intelligence & Data Science', duration: '4 Years', seats: 120, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'B.Tech', branch: 'Electronics & Communication Engineering', duration: '4 Years', seats: 120, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'B.Tech', branch: 'Electrical & Electronics Engineering', duration: '4 Years', seats: 60, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'B.Tech', branch: 'Civil Engineering', duration: '4 Years', seats: 30, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'B.Tech', branch: 'Mechanical Engineering', duration: '4 Years', seats: 30, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'MBA', branch: 'Finance, HR & Marketing Specializations', duration: '2 Years', seats: 60, eligibility: 'Any graduate degree with 50%+ marks, plus qualifying score in AP ICET' }
];

export const ADMISSION_PROCESS = [
  { step: '1', title: 'Entrance Exams', desc: 'Appear for AP EAPCET (for B.Tech courses) or AP ICET (for postgraduate MBA course) state counseling.' },
  { step: '2', title: 'Web Counseling Selection', desc: 'Select Ravindra Engineering College for Women (College Code: REC) as your preferred choice in the web options entry.' },
  { step: '3', title: 'Verification', desc: 'Undergo document verification at certified government counseling centers.' },
  { step: '4', title: 'Reporting & Booking', desc: 'Upon seat allotment, report to our lush Kurnool campus with academic credentials to confirm admission.' }
];

export const SCHOLARSHIPS = [
  { name: 'Jagananna Amma Vodi & Vasathi Deevena', eligibility: 'AP State Government scheme offering full tuition reimbursement and hostel support for eligible backward and minority classes.' },
  { name: 'Merit Scholarships (RCEW Special)', eligibility: 'Up to 50% waiver in college special fees for state board / CBSE top scorers scoring above 95% in intermediate exams.' },
  { name: 'Pragati Scholarship Scheme', eligibility: 'AICTE scholarship of ₹50,000 per annum specifically designed to aid and promote women engineers.' },
  { name: 'Sports & Cultural Excellence Grants', eligibility: 'Tailored tuition concessions for national and state-level sports medalists.' }
];

export const PLACEMENT_STATS: PlacementsData = {
  highestPackage: '₹14.5 Lakhs Per Annum',
  averagePackage: '₹4.8 Lakhs Per Annum',
  placementPercentage: '96.4%',
  recruitersCount: 85,
  studentsPlacedThisYear: 382,
  topRecruiters: [
    { name: 'TATA Consultancy Services', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200' }, // TCS placeholder text / standard abstract vector
    { name: 'Cognizant CTS', logoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200' },
    { name: 'Wipro', logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200' },
    { name: 'Infosys', logoUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200' },
    { name: 'Accenture', logoUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=200' },
    { name: 'Capgemini', logoUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200' }
  ],
  successStories: [
    {
      name: 'Y. Sai Lahari',
      branch: 'CSE',
      company: 'TCS Digital',
      package: '₹9.2 LPA',
      quote: 'RCEW gave me the confidence to stand out. The intensive coding camps and soft skill training from the 2nd year onwards prepared me perfectly for TCS Digital rounds.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'M. Vaishnavi',
      branch: 'ECE',
      company: 'Cognizant GenC Next',
      package: '₹8.4 LPA',
      quote: 'The embedded systems and microcontrollers training combined with software bootcamps made it possible for me to clear multiple job selections. I am proud to be an alumna of RCEW.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'K. Divya Sree',
      branch: 'AI & DS',
      company: 'Hexaware Technologies',
      package: '₹6.5 LPA',
      quote: 'Studying the newest branch of AI and Data Science at RCEW was an amazing experience. The machine learning labs are fully equipped, and HOD and mentors are immensely supportive.',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300'
    }
  ]
};

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'library',
    name: 'Central Library',
    description: 'A massive hub of knowledge housing over 35,000 volumes, 120 national and international physical journals, and digital subscription portals (IEEE, Springer, Delnet) with high-speed internet desks.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
    highlights: ['24/7 Digital Hub access', 'Over 35,000 physical volumes', 'Air-Conditioned reading zones', 'Plagiarism verification software access']
  },
  {
    id: 'laboratories',
    name: 'State-of-the-Art Labs',
    description: 'Specialized lab setups for research and development. From advanced machine learning computing systems to specialized VLSI testing equipment and civil concrete analyzers.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    highlights: ['NVIDIA AI workstations', 'Latest testing equipment', 'Dedicated technical staff', 'High speed Gigabit networking']
  },
  {
    id: 'hostel',
    name: 'Secure Girls Hostel',
    description: 'An expansive home away from home with round-the-clock structural CCTV surveillance, biometric security, nutritious vegetarian food dining, clean pure drinking water filtration, and standard hygiene care.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    highlights: ['24/7 Wardens & Security guards', 'Nutritious clean dining hall', 'Solar hot water facility', 'Recreational common lounge with TV']
  },
  {
    id: 'sports',
    name: 'Sports & Fitness Arena',
    description: 'Promoting a balanced, healthy style of living with our comprehensive courts for basketball, volleyball, throwball, table tennis, badminton, and a fully equipped gymnasium with trainers.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
    highlights: ['Floodlit basketball court', 'Modern indoor gym complex', 'Annual sports festival (RECSpo)', 'Certified physical trainers']
  },
  {
    id: 'transport',
    name: 'Transportation',
    description: 'A fleet of more than 20 well-maintained safety college buses, mapping all primary junctions across Kurnool city, Nandyal, Nandikotkur, Dhone, and neighboring major towns.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800',
    highlights: ['GPS-equipped modern buses', 'Extensive route coverage', 'Experienced drivers', 'Dedicated grievance support']
  },
  {
    id: 'auditorium',
    name: 'Centenary Auditorium',
    description: 'A magnificent, fully centralized air-conditioned hall with a seating scale of over 1,000, high-end acoustic sound boards, and high-definition projectors for cultural and corporate events.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    highlights: ['1,000+ guest seating size', 'Top-tier Acoustic systems', 'Used for dynamic Hackathons', 'A/C guest changing suites']
  }
];

export const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800', caption: 'Convocation Ceremony Day' },
  { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', caption: 'Interactive Brainstorming Hackathon' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', caption: 'Students Collaborating in AI Lab' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800', caption: 'Chief Guest Speech at Annual Fest' },
  { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800', caption: 'Cultural Traditional Dance Day' },
  { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800', caption: 'Peaceful Reading Desks in Library' }
];

export const NEWS_EVENTS: NewsEvent[] = [
  {
    id: 'n1',
    title: 'Admissions Open for B.Tech & MBA Academic Year 2026-27',
    date: 'July 10, 2026',
    category: 'Announcement',
    description: 'The counseling codes are active. Candidates qualified in AP EAPCET / AP ICET can now exercise Web options for REC. Apply today to secure a seat at Kurnool’s premium girls engineering college.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'e1',
    title: 'National Level Hackfest - RCEW Ignite 2026 Scheduled',
    date: 'Aug 24, 2026',
    category: 'Event',
    description: 'Our annual multi-state collegiate engineering hackathon "Ignite 2026" returns this August. Grand cash prizes of over ₹1,50,000 are up for grabs for the best solutions in Smart City & Healthcare technologies.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'n2',
    title: 'RCEW Achieves Stellar 96.4% Placements Record',
    date: 'June 18, 2026',
    category: 'News',
    description: 'We congratulate our senior students on setting a new record for placement offers in 2025-26. TCS, Cognizant, Wipro, and Accenture led the cohort, with a highest package of ₹14.5 LPA.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'e2',
    title: 'Expert Seminar: Generative AI & Large Language Models',
    date: 'Sept 05, 2026',
    category: 'Event',
    description: 'A professional tech-seminar hosted by the Department of AI & Data Science, inviting senior research scientists from Microsoft and Google India to share perspectives on LLM engineering.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'P. Kavitha Sree',
    role: 'Associate Software Architect',
    branch: 'CSE',
    batch: 'Class of 2022',
    rating: 5,
    quote: 'Ravindra Engineering College for Women provided a life-transforming phase for me. Coming from a simple town, the English lab, soft skills trainers, and consistent coding challenges gave me the professional drive to clear standard multinational interviews effortlessly.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 't2',
    name: 'S. Fathima Bi',
    role: 'Embedded Hardware Developer',
    branch: 'ECE',
    batch: 'Class of 2023',
    rating: 5,
    quote: 'The academic support system and girls-centric growth atmosphere at RCEW was amazing. Doing real hardware projects in VLSI and microcontrollers labs gave me excellent conceptual depth that is helping me greatly in my core industrial career.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 't3',
    name: 'D. Harshitha Reddy',
    role: 'Data Analyst at Infosys',
    branch: 'CSE',
    batch: 'Class of 2024',
    rating: 5,
    quote: 'Our principal and faculty members were extremely supportive during my student years. The rigorous preparation classes, mock tech interviews, and personality bootcamps played a crucial role in landing me on my dream corporate pathway.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=300'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Where is Ravindra Engineering College for Women located?',
    answer: 'RCEW is beautifully situated on the Nandikotkur Road at Venkayapalli, which is roughly 6 kilometers from the Kurnool City Railway Station and Main Bus Stand. It is easily accessible via public buses and college transport.'
  },
  {
    question: 'Is Ravindra Engineering College for Women NAAC and NBA accredited?',
    answer: 'Yes, RCEW is NAAC-accredited with a highly favorable grade. Its flagship core programs—B.Tech in Computer Science & Engineering (CSE) and B.Tech in Electronics & Communication Engineering (ECE)—are accredited by the National Board of Accreditation (NBA).'
  },
  {
    question: 'What is the college code for counseling options?',
    answer: 'The counseling code for Ravindra Engineering College for Women under both AP EAPCET (EAMCET) and AP ICET systems is "REC".'
  },
  {
    question: 'How secure is the hostel facility inside the campus?',
    answer: 'RCEW prioritizes complete security. The girls hostel is located inside the secure campus boundaries, secured with 24/7 guarded checkposts, comprehensive CCTV systems, biometric scanning registers, and resident wardens who reside inside the block.'
  },
  {
    question: 'Does the college provide placement training?',
    answer: 'Yes! RCEW has a dedicated Training and Placement (T&P) cell. Training starts as early as the 2nd year, covering quantitative aptitude, logical reasoning, verbal communication, full-stack programming, mock coding tests, and professional interview behavioral drills.'
  },
  {
    question: 'What financial aid or scholarships are accepted?',
    answer: 'We accept and support all central and state government scholarships, including Jagananna Amma Vodi, Vasathi Deevena, and AICTE’s Pragati Scheme for female engineering students. Additionally, RCEW offers special merit concessions for intermediate board toppers.'
  }
];
