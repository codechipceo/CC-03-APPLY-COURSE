import { asyncHandler } from "../../utils/asyncHandler.js";
import { schoolService as serviceLayer } from "./schoolService.js";
import {successResponse} from  '../../utils/apiResponse.js'

export const schoolCtrl = {
  create: asyncHandler(async (req, res, next) => {
    const docData = { ...req.body, ...req.files };

    const savedRes = await serviceLayer.create(docData);
    return successResponse({ res, data: savedRes, msg: "New School Added" });
  }),
  getAll: asyncHandler(async (req, res, next) => {
    const docData = req.body;
    const savedRes = await serviceLayer.getAll(docData);
    return successResponse({
      res,
      data: savedRes.docs,
      count: savedRes.totalCount,
      msg: "",
    });
  }),
  getById: asyncHandler(
    asyncHandler(async (req, res, next) => {
      const docData = req.body;
      const savedRes = await serviceLayer.getById(docData);
      return successResponse({
        res,
        data: savedRes,
        msg: "",
      });
    })
  ),
  update: asyncHandler(
    asyncHandler(async (req, res, next) => {
      const docData = req.body;
      const savedRes = await serviceLayer.update(docData);
      return successResponse({
        res,
        data: savedRes,
        msg: "",
      });
    })
  ),
};
