import { Router } from 'express'
import { createQrCode, deleteQrCode, getAllQrcodes, redirectUser, updateQrCode } from './qrCodeCtrl.js';

const qrCodeRouter = Router()
qrCodeRouter.post("/create", createQrCode);
qrCodeRouter.get("/redirect", redirectUser)
qrCodeRouter.post("/getall", getAllQrcodes);
qrCodeRouter.post("/update", updateQrCode);
qrCodeRouter.post("/delete", deleteQrCode);

export {qrCodeRouter}