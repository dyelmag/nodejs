import { format } from "path";
import { Router } from 'express';
import { UserController } from "./controllers/UserController";
import { SurveysController } from "./controllers/SurveysController";

const router = Router();

const userController = new UserController();
const surverysController = new SurveysController();

router.post("/users", userController.create);
router.post("/surveys", surverysController.create);
router.get("/surveys", surverysController.show);

export { router };