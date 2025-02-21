import { AppError } from "../../error/AppError";
import { TProject } from "./project.interface";
import httpStatus from 'http-status';
import { Project } from "./project.model";

const createProject = async(payload: TProject) => {
      const newProject = await Project.create(payload);
      if (!newProject) {
        throw new AppError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'Could not create blog!',
        );
      }
    return newProject
}

const getAllProjects = async () => {
  const projects = await Project.find();
  return projects;
};

const getSingleProject = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }
  return project;
};

const updateProject = async (id: string, payload: Partial<TProject>) => {
  const updatedProject = await Project.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
  if (!updatedProject) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }
  return updatedProject;
};

const deleteProject = async (id: string) => {
  const project = await Project.findByIdAndDelete(id);
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }
  return project;
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};