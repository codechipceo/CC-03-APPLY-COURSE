import { createRequest } from "@/config/apiRequest";
import { createThunk } from "./createThunk";
import { GET_PROGRAM_BY_SEARCH } from "@/config/apiEndpoints";

export const getSearchedProgram = createThunk(
  "programOffering/search",

  async (payload) => {
    return await createRequest(GET_PROGRAM_BY_SEARCH + payload, payload);
  }
);
