export const eligibilityFormFirstCol = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
];

export const eligibilityForm = [
  {
    name: "email",
    label: "Email",
    type: "text",
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "text",
  },
  {
    name: "age",
    label: "Age",
    type: "text",
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",

    options: [
      {
        value: "female",
        _id: 1,
        Gender: "Female",
      },
      { value: "male", Gender: "Male", _id: 2 },
    ], // Populate options dynamically from the ProgramOffering model
    displayKey: "Gender",
  },
];
