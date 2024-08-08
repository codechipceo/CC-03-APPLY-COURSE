const adminPayload = {
  name: "",
  username: "",
  password: "",
};

const leadsPayload = {
  studentName: "",
  studentEmail: "",
  studentPhone: "",
  programId: "", // This will be an ObjectId or reference to a program
  message: "",
};

const programOfferingPayload = {
  name: "",
  programLevel: "",
  applicationFee: "",
  costOfLiving: "",
  tuitionFee: "",
  programLength: "",
  tags: [], // This can be an array of strings
  schoolId: "", // This will be an ObjectId or reference to a school
};
const schoolPayload = {
  schoolName: "",
  location: "", // This will be an ObjectId or reference to a location
  schoolBanner: "",
  schoolLogo: "",
};

export const apiPayloads = {
  schoolPayload,
  programOfferingPayload,
  adminPayload,
  leadsPayload,
};
