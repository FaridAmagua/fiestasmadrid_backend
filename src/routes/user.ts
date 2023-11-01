import { Router } from "express";
import { loginUser, newUser,updateUser } from "../controllers/user";

const router = Router();

router.post('/',newUser);
router.post('/login',loginUser);
router.put('/update:id',updateUser);




export default router;
