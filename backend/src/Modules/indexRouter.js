import { adminRouter } from "./Admin/adminRouter.js";
import { locationRouter } from "./Location/locationRouter.js";
import { programOfferingRouter } from "./ProgramOffering/programOfferingRouter.js";
import { schoolRouter } from "./Schools/schoolRouter.js";

import { Router } from "express";
const indexRouter = Router();

indexRouter.use("/admin", adminRouter);
indexRouter.use("/schools", schoolRouter);
indexRouter.use("/program", programOfferingRouter)
indexRouter.use('/location', locationRouter)

export { indexRouter };
