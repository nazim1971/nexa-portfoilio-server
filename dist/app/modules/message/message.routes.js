"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRoutes = void 0;
const express_1 = require("express");
const message_controller_1 = require("./message.controller");
const validateRequest_1 = require("../../middlewire/validateRequest");
const message_validation_1 = require("./message.validation");
const router = (0, express_1.Router)();
// Route to create a new message (for contact form submissions)
router.post('/', (0, validateRequest_1.validateMiddlewire)(message_validation_1.MessageValidations.messageCreateValidationSchema), message_controller_1.MessageController.createMessage);
// Route to get all messages (dashboard view)
router.get('/', message_controller_1.MessageController.getAllMessages);
// Route to delete a message
router.delete('/:id', message_controller_1.MessageController.deleteMessage);
exports.MessageRoutes = router;
