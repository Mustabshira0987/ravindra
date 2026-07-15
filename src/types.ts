export interface Department {
  id: string;
  name: string;
  code: string;
  shortDesc: string;
  fullDesc: string;
  intake: number;
  duration: string;
  established: number;
  labs: string[];
  careers: string[];
  image: string;
  hodName: string;
  hodDesignation: string;
  hodQualification: string;
}

export interface CourseOffering {
  degree: string;
  branch: string;
  duration: string;
  seats: number;
  eligibility: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PlacementsData {
  highestPackage: string;
  averagePackage: string;
  placementPercentage: string;
  recruitersCount: number;
  studentsPlacedThisYear: number;
  topRecruiters: { name: string; logoUrl: string }[];
  successStories: {
    name: string;
    branch: string;
    company: string;
    package: string;
    quote: string;
    image: string;
  }[];
}

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  category: 'News' | 'Event' | 'Announcement';
  description: string;
  image: string;
  link?: string;
}

export interface CampusFacility {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface FacultyMember {
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  researchInterests: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  branch: string;
  batch: string;
  rating: number;
  quote: string;
  image: string;
}
