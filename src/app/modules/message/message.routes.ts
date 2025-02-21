import { Router } from 'express';
import { MessageController } from './message.controller';
import { validateMiddlewire } from '../../middlewire/validateRequest';
import { MessageValidations } from './message.validation';


const router = Router();

// Route to create a new message (for contact form submissions)
router.post(
  '/',
  validateMiddlewire(MessageValidations.messageCreateValidationSchema),
  MessageController.createMessage
);

// Route to get all messages (dashboard view)
router.get('/', MessageController.getAllMessages);

// Route to delete a message
router.delete('/:id', MessageController.deleteMessage);

export const MessageRoutes = router;
