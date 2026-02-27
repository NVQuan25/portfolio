export interface Technology {
  class: string;
  name: string;
}

export interface Project {
  title: string;
  startDate: string;
  description: string;
  images: string[];
  url?: string;
  technologies: Technology[];
}

export interface Experience {
  company: string;
  title: string;
  years: string;
  mainTech: string[];
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  class: string;
}

export interface SkillIcon {
  name: string;
  class: string;
  level: string;
}

export interface SectionNames {
  about: string;
  projects: string;
  skills: string;
  experience: string;
  contact: string;
}

export interface BasicInfo {
  description_header: string;
  description: string;
  section_name: SectionNames;
}

export interface SharedBasicInfo {
  name: string;
  titles: string[];
  social: SocialLink[];
  email: string;
  phone: string;
  github: string;
  image: string;
}

export interface ResumeData {
  basic_info: BasicInfo;
  projects: Project[];
  experience: Experience[];
}

export interface SharedData {
  basic_info: SharedBasicInfo;
  skills: {
    icons: SkillIcon[];
  };
}
