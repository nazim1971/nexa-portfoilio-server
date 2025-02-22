"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const project_service_1 = require("./project.service");
const http_status_1 = __importDefault(require("http-status"));
const createProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectService.createProject(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: 'Project added successfully',
        statusCode: http_status_1.default.CREATED,
        data: result,
    });
}));
const getAllProjects = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectService.getAllProjects();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: 'Projects retrieved successfully',
        statusCode: http_status_1.default.OK,
        data: result,
    });
}));
const getSingleProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectService.getSingleProject(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: 'Project retrieved successfully',
        statusCode: http_status_1.default.OK,
        data: result,
    });
}));
const updateProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectService.updateProject(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: 'Project updated successfully',
        statusCode: http_status_1.default.OK,
        data: result,
    });
}));
const deleteProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield project_service_1.ProjectService.deleteProject(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: 'Project deleted successfully',
        statusCode: http_status_1.default.OK,
    });
}));
exports.ProjectController = {
    createProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject,
};
