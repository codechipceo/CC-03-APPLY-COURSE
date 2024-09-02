import { createRequest } from "@/config/apiRequest";
import { createThunk } from "./createThunk";
import {
  GET_ALL_LOCATIONS,
  GET_PROGRAM_BY_SEARCH,
  GET_ALL_FILTERS,
} from "@/config/apiEndpoints";

export const getSearchedProgram = createThunk(
  "programOffering/search",

  async (payload) => {
    return await createRequest(GET_PROGRAM_BY_SEARCH + payload, payload);
  }
);

export const getFilters = createThunk(
  "programOffering/all",
  async (payload) => {
    return await createRequest(GET_ALL_FILTERS + payload, payload);
  }
);

export const getLocations = createThunk("locations/all", async (payload) => {
  return await createRequest(GET_ALL_LOCATIONS, payload);
});
