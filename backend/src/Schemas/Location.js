import mongoose from "mongoose";
const provinceSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  code: { type: String, unique: true, required: true },
});

export const Locations = mongoose.model("Location", provinceSchema);
