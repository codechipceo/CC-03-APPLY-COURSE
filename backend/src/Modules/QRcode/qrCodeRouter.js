import { Router } from 'express'
import { createQrCode, getAllQrcodes, redirectUser, updateQrCode } from './qrCodeCtrl.js';

const qrCodeRouter = Router()
qrCodeRouter.post("/create", createQrCode);
qrCodeRouter.get("/redirect", redirectUser)
qrCodeRouter.post("/getall", getAllQrcodes);
qrCodeRouter.post("/update", updateQrCode);
// qrCodeRouter.post("/delete", createQrCode);

export {qrCodeRouter}