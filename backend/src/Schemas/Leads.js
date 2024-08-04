import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema.Types

const leadsSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    required: true,
  },
  studentPhone: {
    type: String,
    required: true,
  },
  programId: {
    type: ObjectId,
    ref: "ProgramOffering",
    required: true,
  },
  message: {
    type: String,
    default: "",
  },
}, { timestamps: true });

export const Leads = mongoose.model("Lead", leadsSchema)
