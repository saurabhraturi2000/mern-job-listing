import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api";
import type { CreateJobData, Job } from "@/types/job";

const fetchJobs = async (): Promise<Job[]> => {
  const { data } = await api.get<Job[]>("/jobs");
  console.log("Fetched jobs:", data);
  return data;
};

export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });
};

const addJob = async (job: CreateJobData): Promise<Job> => {
  const { data } = await api.post<Job>("/jobs", job);
  return data;
};

export const useAddJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      console.error("Error adding job:", error);
    },
  });
};

const getJob = async (id: string): Promise<Job> => {
  const { data } = await api.get<Job>(`/jobs/${id}`);
  return data;
};

export const useJob = (id: string) => {
  return useQuery({
    queryKey: ["job", id],
    queryFn: () => getJob(id),
  });
};
