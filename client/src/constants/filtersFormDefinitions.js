export const filterFormSearch = [
  {
    name: "query",
    label: "Search",
    type: "text",
  },
];

export const filterForm = [
  {
    name: "locationName",
    label: "Location",
    type: "select",
    options: [],
    displayKey: "name",
  },
  {
    name: "programLevel",
    label: "Program Level",
    type: "select",
    options: [],
    displayKey: "programLevel",
  },

  // {
  //   name: "costOfLiving",
  //   label: "Cost Of Living",
  //   type: "select",
  //   options: [],
  // },
  {
    name: "tuitionFee",
    label: "Tuition Fee",
    type: "select",
    options: [
      { _id: 1, tutionFee: "1000" },
      { _id: 2, tutionFee: "5000" },
      { _id: 3, tutionFee: "10000" },
      { _id: 4, tutionFee: "20000" },
      { _id: 5, tutionFee: "35000" },
    ],
    displayKey: "tutionFee",
  },
  {
    name: "programLength",
    label: "Program Length",
    type: "select",
    options: [
      { _id: 1, programLength: "1 year" },
      { _id: 2, programLength: "2 year" },
      { _id: 3, programLength: "3 year" },
      { _id: 4, programLength: "4 year" },
      { _id: 5, programLength: "5 year" },
    ],
    displayKey: "programLength",
  },
  {
    name: "applicationFee",
    label: "Application Fee",
    type: "select",
    options: [

    ]
    , 
  },
];
