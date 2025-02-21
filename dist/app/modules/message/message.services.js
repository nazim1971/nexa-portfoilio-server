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
exports.MessageService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const message_model_1 = require("./message.model");
const AppError_1 = require("../../error/AppError");
const createMessageInDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newMessage = yield message_model_1.Message.create(payload);
    if (!newMessage) {
        throw new AppError_1.AppError(http_status_1.default.INTERNAL_SERVER_ERROR, 'Could not create message');
    }
    return newMessage;
});
const getMessagesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield message_model_1.Message.find({});
    return messages;
});
const deleteMessageFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield message_model_1.Message.findById(id);
    if (!message) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Message not found');
    }
    yield message_model_1.Message.findByIdAndDelete(id);
});
exports.MessageService = {
    createMessageInDB,
    getMessagesFromDB,
    deleteMessageFromDB,
};
