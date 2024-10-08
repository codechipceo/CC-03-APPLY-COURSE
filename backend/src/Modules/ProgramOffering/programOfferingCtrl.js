import { successResponse } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { programOfferingService as serviceLayer } from "./programOfferingService.js";

export const programOfferingCtrl = {
  create: asyncHandler(async (req, res, next) => {
    const docData = req.body;
    const savedRes = await serviceLayer.create(docData);
    return successResponse({
      res,
      data: savedRes,
      msg: "New Program Offering Added",
    });
  }),
  getAll: asyncHandler(async (req, res, next) => {
    const docData = req.body;
    const savedRes = await serviceLayer.getAll(docData);
    return successResponse({
      res,
      data: savedRes.docs,
      count: savedRes.count,
      msg: "",
    });
  }),
  getById: asyncHandler(async (req, res, next) => {
    const docData = req.body;
    const savedRes = await serviceLayer.getById(docData);
    return successResponse({
      res,
      data: savedRes,
      msg: "",
    });
  }),
  update: asyncHandler(async (req, res, next) => {
    const docData = req.body;
    const savedRes = await serviceLayer.update(docData);
    return successResponse({
      res,
      data: savedRes,
      msg: "",
    });
  }),

  search: asyncHandler(async (req, res, next) => {
    const docData = req.query;
    console.log(docData);
    const savedRes = await serviceLayer.search(docData);
    return successResponse({
      res,
      data: savedRes,
      msg: "",
    });
  }),

  getAllFilters: asyncHandler(async (req, res, next) => {
    const filters = await serviceLayer.getAllFilters([
      "programLevel",
      "applicationFee",
      "costOfLiving",
      "tuitionFee",
      "programLength",
    ]);
    return successResponse({ res, data: filters });
  }),

  deleteProgram: asyncHandler(async (req, res, next) => {
    const data = req.body;
    const deletedData = await serviceLayer.deleteProgramOffering(data);
    return successResponse({ res, data: deletedData, msg: "Program deleted" });
  }),
};
