"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
// Define the Mongoose schema for the project model
const projectSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: true },
    liveLink: { type: String, required: true },
    serverLink: { type: String, required: false },
    clientLink: { type: String, required: false },
});
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
