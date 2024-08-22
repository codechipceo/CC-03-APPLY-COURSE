import QrCode from "qrcode";
import { v4 as uuid } from "uuid";
import { QRcodeModel } from "../../Schemas/QRcode.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { successResponse } from "../../utils/apiResponse.js";
import { DatabaseService } from "../../Schemas/DatabaseService.js";
const model = new DatabaseService(QRcodeModel);

export const createQrCode = asyncHandler(async (req, res, next) => {
  const { destinationUrl, qrName } = req.body;

  const code = uuid();
  const baseUrlForQr = process.env.QR_BASE_URL || "http://localhost:5000/";
  const redirectionPath = `${baseUrlForQr}api/qr/redirect?qrcode=${code}`;

  const qrBase64 = await QrCode.toDataURL(`${redirectionPath}`);
  const payload = {
    id: code,
    destinationUrl: destinationUrl,
    url: redirectionPath,
    qrName,
    qrBase64,
  };

  const newQRCode = await model.save(payload);

  return successResponse({ res, data: newQRCode, msg: "New QR added" });
});

export const updateQrCode = asyncHandler(async (req, res, next) => {
  const { qrcodeId } = req.body;
  const filter = { _id: qrcodeId };
  const payload = { ...req.body };

  const updated = await model.updateDocument(filter, payload);
  return successResponse({ res, data: updated });
});

export const deleteQrCode = asyncHandler(async (req, res, next) => {
  const { qrcodeId } = req.body;
  const deleted = await model.deleteDocument({ _id: qrcodeId });
  return successResponse({ res, data: deleted });
});

export const getAllQrcodes = asyncHandler(async (req, res, next) => {
  const data = await model.getAllDocuments();
  successResponse({ res, data });
});

export const redirectUser = asyncHandler(async (req, res, next) => {
  const code = req.query.qrcode;
  const qrById = await model.getDocumentById({ id: code });
  const destination = qrById.destinationUrl;
  if (destination) {
    return res.redirect(destination);
  }
  return res.status(404).send("Not found");
});
