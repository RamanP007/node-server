import express, { Router } from "express";
import AuthController from "../controller";
const router: Router = express.Router();

const auth = new AuthController;

router.get("/", (req, res) => {
  res.send("Welcome to Real world");
});

router.post("/register", auth.register);
router.post("/login", auth.login);



export default router;
