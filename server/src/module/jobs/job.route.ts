import { Router } from "express";
import { createJob, getJobs, getJobById, deleteJob } from "./job.controller.js";

const jobRouter = Router();

jobRouter.post("/", createJob);
jobRouter.get("/", getJobs);
jobRouter.get("/:id", getJobById);
jobRouter.delete("/:id", deleteJob);

export default jobRouter;
