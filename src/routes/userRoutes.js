import express from 'express';
const router = express.Router();

import userName from '../handler/userHandler.js';
router.get("/profile", userName);

export default router;
