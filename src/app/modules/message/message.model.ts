import mongoose, { Schema, Document } from 'mongoose';
import { IMessage } from './message.interface';

export interface IMessageModel extends IMessage, Document {}

const MessageSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Message = mongoose.model<IMessageModel>('Message', MessageSchema);
