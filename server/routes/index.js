import express from 'express';
import account from './account';
import payment from './payment';

const router = express.Router();
router.use('/account', account);
router.use('/payment', payment);
export default router;