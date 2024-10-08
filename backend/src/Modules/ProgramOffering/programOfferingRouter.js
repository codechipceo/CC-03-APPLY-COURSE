import { Router } from "express";
import { programOfferingCtrl } from "./programOfferingCtrl.js";

const programOfferingRouter = Router();

programOfferingRouter.use("/add", programOfferingCtrl.create);
programOfferingRouter.use("/getall", programOfferingCtrl.getAll);
programOfferingRouter.use("/getbyid", programOfferingCtrl.getById);
programOfferingRouter.use("/update", programOfferingCtrl.update);
programOfferingRouter.use("/update", programOfferingCtrl.update);

programOfferingRouter.use("/search", programOfferingCtrl.search);
programOfferingRouter.use("/getfilters", programOfferingCtrl.getAllFilters);
programOfferingRouter.use("/delete", programOfferingCtrl.deleteProgram);

export { programOfferingRouter };
