export interface IExperience {
  title: string;
  company_name: string;
  icon: ImageFile;
  iconBg: string;
  date: string;
  linkedin_link: string;
  points: string[];
}

export interface ITestimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: ImageFile;
}

export interface ITechnology {
  name: string;
  image: ImageFile;
}

export interface ITool {
  name: string;
  image: ImageFile;
}

export interface IService {
  title: string;
  icon: ImageFile;
}

export interface INavLink {
  id: string;
  title: string;
}

export interface IProject {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: ImageFile;
  source_code_link: string;
}

export type ImageFile = string | HTMLImageElement | File;

export interface FormValues {
  name: string;
  email: string;
  message: string;
}
