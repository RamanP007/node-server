import express, { Router } from "express";
import authRouter from "./router";

const router: Router = express.Router();

router.use("/", authRouter);

export default router;
