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
    name: "contactNumber",
    label: "Phone Number",
    type: "text",
  },
  {
    name: "postalCode",
    label: "Postal Code",
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
    ],
    displayKey: "Gender",
  },
];
