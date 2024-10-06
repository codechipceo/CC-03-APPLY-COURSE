import mongoose from "mongoose";
import { Schema } from "mongoose";
const { ObjectId,  } = Schema.Types;

const programOfferingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    programInfo :{
      type: String,
      required:true
    },
    programLevel: {
      type: String,
      required: true,
    },
    tuitionFee: {
      type: String,
      required: true,
    },
    programLength: {
      type: String,
      required: true,
    },
    schoolId: {
      type: ObjectId,
      ref: "School",
      required: true,
    },
  },
  { timestamps: true }
);


export const ProgramOffering = mongoose.model('ProgramOffering', programOfferingSchema)
