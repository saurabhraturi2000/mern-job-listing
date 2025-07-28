import { createContext, useContext, useState, type ReactNode } from "react";
import type { Job, CreateJobData } from "@/types/job";

interface JobContextType {
  jobs: Job[];
  addJob: (jobData: CreateJobData) => void;
  getJob: (id: string) => Job | undefined;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

// Mock data for development
const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for building user-facing applications using modern JavaScript frameworks.",
    salary: "$120,000 - $160,000",
    requirements: [
      "5+ years React experience",
      "TypeScript proficiency",
      "Testing experience",
    ],
    benefits: ["Health insurance", "Remote work", "401k matching"],
    createdAt: new Date("2024-01-15"),
    logoUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "StartupXYZ",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Join our product team to drive strategy and execution for our flagship product. You will work closely with engineering and design teams.",
    salary: "$110,000 - $140,000",
    requirements: [
      "3+ years product management",
      "Agile methodology",
      "Data analysis skills",
    ],
    benefits: ["Stock options", "Flexible hours", "Learning budget"],
    createdAt: new Date("2024-01-14"),
    logoUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    title: "UX Designer",
    company: "DesignHub",
    location: "Austin, TX",
    type: "Part-time",
    description:
      "Create beautiful and intuitive user experiences for our web and mobile applications. Collaborate with cross-functional teams.",
    salary: "$60,000 - $80,000",
    requirements: [
      "Portfolio required",
      "Figma expertise",
      "User research experience",
    ],
    benefits: ["Creative freedom", "Remote friendly", "Design tools provided"],
    createdAt: new Date("2024-01-13"),
    logoUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "DataInnovate",
    location: "Seattle, WA",
    type: "Full-time",
    description:
      "Analyze complex datasets to derive actionable insights. Build machine learning models to solve business problems.",
    salary: "$130,000 - $170,000",
    requirements: [
      "Python/R proficiency",
      "Machine learning experience",
      "SQL skills",
    ],
    benefits: ["Research time", "Conference budget", "Top-tier equipment"],
    createdAt: new Date("2024-01-12"),
    logoUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    type: "Contract",
    description:
      "Manage cloud infrastructure and CI/CD pipelines. Ensure high availability and security of our applications.",
    salary: "$90,000 - $120,000",
    requirements: [
      "AWS/Azure experience",
      "Docker/Kubernetes",
      "Infrastructure as Code",
    ],
    benefits: ["Full remote", "Flexible schedule", "Equipment provided"],
    createdAt: new Date("2024-01-11"),
    logoUrl:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=100&h=100&fit=crop",
  },
  {
    id: "6",
    title: "Marketing Coordinator",
    company: "GrowthCo",
    location: "Los Angeles, CA",
    type: "Full-time",
    description:
      "Support marketing campaigns and content creation. Help drive brand awareness and lead generation efforts.",
    salary: "$50,000 - $65,000",
    requirements: [
      "Marketing degree preferred",
      "Social media experience",
      "Content creation skills",
    ],
    benefits: ["Growth opportunities", "Creative environment", "Team events"],
    createdAt: new Date("2024-01-10"),
    logoUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop",
  },
];

export function JobProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);

  const addJob = (jobData: CreateJobData) => {
    const newJob: Job = {
      ...jobData,
      id: Date.now().toString(),
      createdAt: new Date(),
      logoUrl:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop",
    };
    setJobs((prev) => [newJob, ...prev]);
  };

  const getJob = (id: string) => {
    return jobs.find((job) => job.id === id);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, getJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
}
