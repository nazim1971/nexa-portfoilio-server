"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageValidations = void 0;
const zod_1 = require("zod");
exports.MessageValidations = {
    messageCreateValidationSchema: zod_1.z.object({
        name: zod_1.z.string().min(3, 'Name should be at least 3 characters long').max(100, 'Name should not exceed 100 characters'),
        email: zod_1.z.string().email('Invalid email address'),
        subject: zod_1.z.string().min(1, 'Subject should be at least 3 characters long').max(200, 'Subject should not exceed 200 characters'),
        message: zod_1.z.string().min(1, 'Message should be at least 10 characters long').max(1000, 'Message should not exceed 1000 characters'),
    }),
};
