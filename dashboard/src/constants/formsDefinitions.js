const adminForm = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    name: "username",
    label: "Username",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

const leadsForm = [
  {
    name: "studentName",
    label: "Student Name",
    type: "text",
  },
  {
    name: "studentEmail",
    label: "Student Email",
    type: "email",
  },
  {
    name: "studentPhone",
    label: "Student Phone",
    type: "text",
  },
  {
    name: "programId",
    label: "Program",
    type: "select",
    options: [], // Populate options dynamically from the ProgramOffering model
    displayKey: "name",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
  },
];

const programOfferingForm = [
  {
    name: "name",
    label: "Program Name",
    type: "text",
  },
  {
    name: "programLevel",
    label: "Program Level",
    type: "text",
  },
  // {
  //   name: "applicationFee",
  //   label: "Application Fee",
  //   type: "text",
  // },
  // {
  //   name: "costOfLiving",
  //   label: "Cost of Living",
  //   type: "text",
  // },
  {
    name: "tuitionFee",
    label: "Tuition Fee",
    type: "text",
  },
  {
    name: "programLength",
    label: "Program Length",
    type: "text",
  },
  {
    name: "tags",
    label: "Tags",
    type: "text", // Multiple tags can be added as a comma-separated string or an array of inputs
  },
  {
    name: "schoolId",
    label: "School",
    type: "select",
    options: [], // Populate options dynamically from the School model
    displayKey: "schoolName",
  },
];
const schoolForm = [
  {
    name: "schoolName",
    label: "School Name",
    type: "text",
  },
  {
    name: "location",
    label: "Location",
    type: "select",
    options: [], // Populate options dynamically from the Location model
    displayKey: "name", // Adjust based on the actual schema for locations
  },
  {
    name: "schoolBanner",
    label: "School Banner",
    type: "file",
    mimeType: "image/*",
  },
  {
    name: "schoolLogo",
    label: "School Logo",
    type: "file",
    mimeType: "image/*",
  },
];


const qrForm = [
  {
    name: "qrName",
    label: "Qr Code Name",
    type: "text",
  },
  {
    name: "destinationUrl",
    label: "URL To Redirect",
    type: "text",
  },
];
export const formDefinitions = {
  adminForm,
  schoolForm,
  programOfferingForm,
  leadsForm,
  qrForm,
};
