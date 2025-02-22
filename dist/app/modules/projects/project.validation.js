"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidations = void 0;
const zod_1 = require("zod");
const projectValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required!'),
    title: zod_1.z.string().min(1, 'Title is required!'),
    image: zod_1.z.string().optional(),
    description: zod_1.z.string().min(1, 'Description is required!'),
    liveLink: zod_1.z.string().min(1, 'Description is required!'),
    serverLink: zod_1.z.string().optional(),
    clientLink: zod_1.z.string().optional(),
});
const updateProjectValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required!').optional(),
    title: zod_1.z.string().min(1, 'Title is required!').optional(),
    image: zod_1.z.string().optional(),
    description: zod_1.z.string().min(1, 'Description is required!').optional(),
    liveLink: zod_1.z.string().optional(),
    serverLink: zod_1.z.string().optional(),
    clientLink: zod_1.z.string().optional(),
});
exports.projectValidations = { projectValidationSchema, updateProjectValidationSchema };
