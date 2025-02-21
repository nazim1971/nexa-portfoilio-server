
import httpStatus from 'http-status';
import { IMessage } from './message.interface';
import { Message } from './message.model';
import { AppError } from '../../error/AppError';

const createMessageInDB = async (payload: IMessage) => {
  const newMessage = await Message.create(payload);
  if (!newMessage) {
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Could not create message');
  }
  return newMessage;
};

const getMessagesFromDB = async () => {
  const messages = await Message.find({});
  return messages;
};

const deleteMessageFromDB = async (id: string) => {
  const message = await Message.findById(id);
  if (!message) {
    throw new AppError(httpStatus.NOT_FOUND, 'Message not found');
  }
  await Message.findByIdAndDelete(id);
};

export const MessageService = {
  createMessageInDB,
  getMessagesFromDB,
  deleteMessageFromDB,
};
