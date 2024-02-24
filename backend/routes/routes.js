import express from "express";
import signupUSer from "../controller/user-controller.js";

const router = express.Router();

router.post("/signup", signupUSer);
router.get("/", (req, res)=>{
    res.status(200).json("hello from backend");
})

export default router;

