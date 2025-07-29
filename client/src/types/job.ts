export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";

export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  description: string;
  salary?: string;
  requirements?: string[];
  benefits?: string[];
  createdAt: Date;
  logoUrl?: string;
}

export interface CreateJobData {
  title: string;
  company: string;
  location: string;
  type: JobType;
  description: string;
  salary?: string;
  requirements?: string[];
  benefits?: string[];
}
