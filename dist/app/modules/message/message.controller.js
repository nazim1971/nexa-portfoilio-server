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
exports.MessageController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const message_services_1 = require("./message.services");
const sendResponse_1 = require("../../utils/sendResponse");
// Controller to create a new message
const createMessage = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_services_1.MessageService.createMessageInDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: 'Message submitted successfully',
        statusCode: http_status_1.default.CREATED,
        data: result,
    });
}));
// Controller to get all messages
const getAllMessages = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_services_1.MessageService.getMessagesFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: 'Messages fetched successfully',
        statusCode: http_status_1.default.OK,
        data: result,
    });
}));
// Controller to delete a message
const deleteMessage = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield message_services_1.MessageService.deleteMessageFromDB(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: 'Message deleted successfully',
        statusCode: http_status_1.default.OK,
    });
}));
exports.MessageController = {
    createMessage,
    getAllMessages,
    deleteMessage,
};
