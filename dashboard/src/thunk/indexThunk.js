import {
  ADD_LOCATION,
  ADD_PROGRAM_OFFERING,
  ADD_SCHOOL,
  CREATE_ADMIN,
  GET_ALL_LOCATION,
  GET_ALL_PROGRAM_OFFERINGS,
  GET_ALL_SCHOOLS,
  GET_LOCATION_BY_ID,
  GET_PROGRAM_OFFERING_BY_ID,
  GET_SCHOOL_BY_ID,
  LOGIN_ADMIN,
  UPDATE_LOCATION,
  UPDATE_PROGRAM_OFFERING,
  UPDATE_SCHOOL,
} from "@/config/apiEndpoints";
import { createRequest } from "@/config/apiRequest";
import { createThunk } from "./createThunk";

//###########################################
//                   ADMIN
//###########################################
export const login = createThunk("admins/login", async (payload) => {
  return await createRequest(LOGIN_ADMIN, payload);
});

export const createAdmin = createThunk(
  "admins/createAdmin",
  async (payload) => {
    return await createRequest(CREATE_ADMIN, payload);
  }
);

//###########################################
//                   PROGRAM
//###########################################
export const addProgramOffering = createThunk(
  "programOffering/add",
  async (payload) => {
    return await createRequest(ADD_PROGRAM_OFFERING, payload);
  }
);

export const getAllProgramOfferings = createThunk(
  "programOffering/getAll",
  async (payload) => {
    return await createRequest(GET_ALL_PROGRAM_OFFERINGS, payload);
  }
);

export const getProgramOfferingById = createThunk(
  "programOffering/getById",
  async (payload) => {
    return await createRequest(GET_PROGRAM_OFFERING_BY_ID, payload);
  }
);

export const updateProgramOffering = createThunk(
  "programOffering/update",
  async (payload) => {
    return await createRequest(UPDATE_PROGRAM_OFFERING, payload);
  }
);

//###########################################
//                   SCHOOL
//###########################################

export const addSchool = createThunk("school/add", async (payload) => {
  return await createRequest(ADD_SCHOOL, payload);
});

export const getAllSchools = createThunk("school/getAll", async (payload) => {
  return await createRequest(GET_ALL_SCHOOLS, payload);
});

export const getSchoolById = createThunk("school/getById", async (payload) => {
  return await createRequest(GET_SCHOOL_BY_ID, payload);
});

export const updateSchool = createThunk("school/update", async (payload) => {
  return await createRequest(UPDATE_SCHOOL, payload);
});

//###########################################
//                   LOCATIONS
//###########################################

export const addLocation = createThunk("location/add", async (payload) => {
  return await createRequest(ADD_LOCATION, payload);
});

export const getAllLocation = createThunk(
  "location/getAll",
  async (payload) => {
    return await createRequest(GET_ALL_LOCATION, payload);
  }
);

export const getLocationById = createThunk(
  "location/getById",
  async (payload) => {
    return await createRequest(GET_LOCATION_BY_ID, payload);
  }
);

export const updateLocation = createThunk(
  "location/update",
  async (payload) => {
    return await createRequest(UPDATE_LOCATION, payload);
  }
);

//###########################################
//                   QR CODES
//###########################################

export const addQR = createThunk("/qr/create", async (payload) => {
  return await createRequest("api/qr/create", payload);
});

export const getAllQr = createThunk("qr/getAll", async (payload) => {
  return await createRequest("api/qr/getall", payload);
});

export const updateQr = createThunk("qr/update", async (payload) => {
  return await createRequest("api/qr/update", payload);
});

//###########################################
//                   LEADS
//###########################################

// export const addLead = createThunk("leads/add", async (payload) => {
//   return await createRequest(ADD_LEAD, payload, "POST");
// });

// export const getAllLeads = createThunk("leads/getAll", async (payload) => {
//   return await createRequest(GET_ALL_LEADS,payload);
// });

// export const getLeadById = createThunk("leads/getById", async (payload) => {
//   return await createRequest(GET_LEAD_BY_ID, payload);
// });

// export const updateLead = createThunk("leads/update", async (payload) => {
//   return await createRequest(UPDATE_LEAD, payload,);
// });
