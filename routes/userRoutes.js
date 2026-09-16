import express from "express";
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
