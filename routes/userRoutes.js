import express from "express";
import { createUser, getAllUsers, getUserById } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/user", createUser);
router.get("/users", getAllUsers);
router.get('/user/:id', getUserById);

export default router;
