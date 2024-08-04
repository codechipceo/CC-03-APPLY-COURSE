import { successResponse } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { adminService as serviceLayer } from "./adminService.js";

export const adminCtrl = {
  add: asyncHandler(async (req, res, next) => {
    const docData = req.body;
    const savedRes = await serviceLayer.addNewAdmin(docData);
    return successResponse({ res, data: savedRes, msg: "New Admin Added" });
  }),

  login: asyncHandler(async (req, res, next) => {
    const docData = req.body;
    const savedRes = await serviceLayer.loginAdmin(docData);
    return successResponse({ res, data: savedRes, msg: "Login Successful" });
  }),
};
