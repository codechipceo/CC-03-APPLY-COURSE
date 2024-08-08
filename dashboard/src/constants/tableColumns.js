const adminColumns = [
  { field: "_id", headerName: "ID" },
  { field: "name", headerName: "Name", width: 200 },
  { field: "username", headerName: "Username", width: 200 },
  { field: "password", headerName: "Password", width: 200 }, // Note: In practice, passwords should not be displayed in tables
  { field: "createdAt", headerName: "Created At", type: "date", width: 200 },
  { field: "updatedAt", headerName: "Updated At", type: "date", width: 200 },
];

const leadsColumns = [
  { field: "_id", headerName: "ID" },
  { field: "studentName", headerName: "Student Name", width: 200 },
  { field: "studentEmail", headerName: "Student Email", width: 250 },
  { field: "studentPhone", headerName: "Student Phone", width: 200 },
  { field: "programId", headerName: "Program ID", width: 200 }, // You might want to join this with program details if possible
  { field: "message", headerName: "Message", width: 300 },
  { field: "createdAt", headerName: "Created At", type: "date", width: 200 },
  { field: "updatedAt", headerName: "Updated At", type: "date", width: 200 },
];

const programOfferingColumns = [
  { field: "name", headerName: "Program Name", width: 250 },
  { field: "programLevel", headerName: "Program Level", width: 200 },
  { field: "applicationFee", headerName: "Application Fee", width: 200 },
  { field: "costOfLiving", headerName: "Cost of Living", width: 200 },
  { field: "tuitionFee", headerName: "Tuition Fee", width: 200 },
  { field: "programLength", headerName: "Program Length", width: 200 },
  {
    field: "schoolId",
    headerName: "School ID",
    width: 200,
    valueGetter: (params) => params.row.schoolId?.schoolName || "",
  },
];

const schoolColumns = [
  { field: "schoolName", headerName: "School Name", width: 250 },
  {
    field: "location",
    headerName: "Location",
    width: 200,
    valueGetter: (params) => params.row.location?.name || "",
  },
];

export const tableColumns = {
  programOfferingColumns,
  schoolColumns,
  leadsColumns,
  adminColumns,
};
