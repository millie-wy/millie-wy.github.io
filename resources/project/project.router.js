import express from "express";
import { adminOnly } from "../../middleware.js";
import {
  addProject,
  deleteProject,
  getProjects,
} from "./project.controller.js";

export const projectRouter = express
  .Router()
  .get("/", getProjects)
  .post("/", adminOnly, addProject)
  .delete("/:id", adminOnly, deleteProject);
