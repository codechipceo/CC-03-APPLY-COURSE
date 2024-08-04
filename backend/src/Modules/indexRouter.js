import { adminRouter } from "./Admin/adminRouter.js";
import { schoolRouter } from "./Schools/schoolRouter.js";

import { Router } from "express";
const indexRouter = Router();

indexRouter.use("/admin", adminRouter);
indexRouter.use("/schools", schoolRouter);

export { indexRouter };
