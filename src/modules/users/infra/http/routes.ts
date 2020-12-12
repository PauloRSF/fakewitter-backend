import { Router } from 'express';
import UserVerificationController from './controllers/userVerificationController';

const router = Router();
const userVerificationController = new UserVerificationController();

router.get('/email_available', userVerificationController.emailAvailable);

export default router;
