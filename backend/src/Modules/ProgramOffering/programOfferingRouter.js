import { Router } from "express";
import { programOfferingCtrl } from "./programOfferingCtrl.js";

const programOfferingRouter = Router();

programOfferingRouter.use("/add", programOfferingCtrl.create);
programOfferingRouter.use("/getall", programOfferingCtrl.getAll);
programOfferingRouter.use("/getbyid", programOfferingCtrl.getById);
programOfferingRouter.use("/update", programOfferingCtrl.update);

export { programOfferingRouter };
