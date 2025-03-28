import { create } from "zustand";
import jobData from "../data.json";

export interface JobType {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: "Frontend" | "Backend" | "Fullstack";
	level: "Junior" | "Midweight" | "Senior";
	postedAt: string;
	contract: "Full Time" | "Part Time" | "Contract";
	location: string;
	languages: string[];
	tools: string[];
}

type JobStore = {
	jobs: JobType[];
	setJobs: (newJobs: JobType[]) => void;
};

export const useJobStore = create<JobStore>((set) => ({
	jobs: jobData as JobType[],
	setJobs: (newJobs: JobType[]) => set({ jobs: newJobs }),
}));
