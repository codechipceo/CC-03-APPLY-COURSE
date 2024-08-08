import { Router } from "express";
import { locationCtrl } from "./locationCtrl.js";
const locationRouter = Router();

locationRouter.use("/add", locationCtrl.create);
locationRouter.use("/getall", locationCtrl.getAll);
locationRouter.use("/getbyid", locationCtrl.getById);
locationRouter.use("/update", locationCtrl.update);

export { locationRouter };
