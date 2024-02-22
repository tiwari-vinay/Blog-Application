import express from "express";
import signupUSer from "../controller/user-controller.js";

const router = express.Router();

router.post("/signup", signupUSer);

export default router;

