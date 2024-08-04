import { Schema } from "mongoose";
const { ObjectId } = Schema.Types;
import mongoose from "mongoose";
 const schoolSchema = new Schema({
  schoolName: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: ObjectId,
    required: true,
  },
  schoolBanner: {
    type: String,
    required: true,
  },
  schoolLogo: {
    type: String,
    required: true,
  },
});

export const School = mongoose.model("School", schoolSchema)
