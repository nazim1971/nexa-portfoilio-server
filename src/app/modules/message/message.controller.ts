

import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { MessageService } from './message.services';
import { sendResponse } from '../../utils/sendResponse';

// Controller to create a new message
const createMessage = catchAsync(async (req, res) => {
  const result = await MessageService.createMessageInDB(req.body);

  sendResponse(res, {
    success: true,
    message: 'Message submitted successfully',
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

// Controller to get all messages
const getAllMessages = catchAsync(async (req, res) => {
  const result = await MessageService.getMessagesFromDB();

  sendResponse(res, {
    success: true,
    message: 'Messages fetched successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

// Controller to delete a message
const deleteMessage = catchAsync(async (req, res) => {
  await MessageService.deleteMessageFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    message: 'Message deleted successfully',
    statusCode: httpStatus.OK,
  });
});

export const MessageController = {
  createMessage,
  getAllMessages,
  deleteMessage,
};
