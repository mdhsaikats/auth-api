import express from 'express';
const router = express.Router();

import userName from '../handler/userHandler.js';
router.get("/profile", userName);
//TODO: need to work on the Authorization error
export default router;
