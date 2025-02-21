import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { ProjectService } from './project.service';
import httpStatus from 'http-status';

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectService.createProject(req.body);

  sendResponse(res, {
    success: true,
    message: 'Project added successfully',
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.getAllProjects();
  sendResponse(res, {
    success: true,
    message: 'Projects retrieved successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const result = await ProjectService.getSingleProject(req.params.id);
  sendResponse(res, {
    success: true,
    message: 'Project retrieved successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const result = await ProjectService.updateProject(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    message: 'Project updated successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  await ProjectService.deleteProject(req.params.id);
  sendResponse(res, {
    success: true,
    message: 'Project deleted successfully',
    statusCode: httpStatus.OK,
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};