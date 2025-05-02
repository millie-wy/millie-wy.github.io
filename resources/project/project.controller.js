import { ProjectModel } from "./project.model.js";

export const getProjects = async (req, res) => {
  const projects = await ProjectModel.find({});
  if (!projects) return res.status(404).send("No Projects Found.");
  return res.status(200).json(projects);
};

export const addProject = async (req, res) => {
  const project = await ProjectModel.create(req.body);
  return res.status(200).json(project);
};

export const deleteProject = async (req, res) => {
  const project = await ProjectModel.findByIdAndDelete(req.params.id);
  if (!project) return res.status(404).json("Project does not exist.");
  return res.status(200).json("Project deleted: " + req.params.id);
};
