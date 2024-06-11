import express from "express";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/request-campaign-creation", verifyToken);

export default router;
