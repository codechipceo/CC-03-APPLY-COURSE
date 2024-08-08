
import { successResponse } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { locationService as serviceLayer } from "./locationService.js";

export const locationCtrl = {
  create: asyncHandler(async (req, res, next) => {
    const docData =req.body

    const savedRes = await serviceLayer.create(docData);
    return successResponse({ res, data: savedRes, msg: "New Location Added" });
  }),
  getAll: asyncHandler(async (req, res, next) => {
    const docData = req.body;
    const savedRes = await serviceLayer.getAll(docData);
    return successResponse({
      res,
      data: savedRes,
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
