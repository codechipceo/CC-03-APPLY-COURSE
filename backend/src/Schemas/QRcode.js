import mongoose from "mongoose";
import { Schema } from "mongoose";


const qrCodeSchema = new Schema({
  id: { type: String, required: true, unique: true },
  url: { type: String, required: true }, // This will be the dynamic URL like https://qr.mydomain.com?id=1234
  qrName: { type: String },
  qrBase64: { type: String, required: true },
  destinationUrl: { type: String, required: true }, // The final destination URL
});
export const QRcodeModel = mongoose.model("Qrcode", qrCodeSchema);
