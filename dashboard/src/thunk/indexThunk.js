import { createRequest } from "@/config/apiRequest";
import { createThunk } from "./createThunk";
import {
  CREATE_ADMIN,
  LOGIN_ADMIN,
  ADD_PROGRAM_OFFERING,
  GET_ALL_PROGRAM_OFFERINGS,
  GET_PROGRAM_OFFERING_BY_ID,
  UPDATE_PROGRAM_OFFERING,
  ADD_SCHOOL,
  GET_ALL_SCHOOLS,
  GET_SCHOOL_BY_ID,
  UPDATE_SCHOOL,
  // ADD_LEAD,
  // GET_LEAD_BY_ID,
  // UPDATE_LEAD,
  // GET_ALL_LEADS,
} from "@/config/apiEndpoints";

//###########################################
//                   ADMIN
//###########################################
export const login = createThunk("admins/login", async (payload) => {
  return await createRequest(LOGIN_ADMIN, payload)
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
