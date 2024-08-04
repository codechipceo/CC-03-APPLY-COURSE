import { Router } from "express";
import { adminCtrl } from "./adminCtrl.js";
const adminRouter = Router();

adminRouter.post("/addnewuser", adminCtrl.add);
adminRouter.post("/login", adminCtrl.login);

export { adminRouter };
