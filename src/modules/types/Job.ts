export type JobType = "AVAILABLE" | "NOT_AVAILABLE";

export type Job = {
    id: number;
    name: string;
    description: string;
    type: JobType;
};
