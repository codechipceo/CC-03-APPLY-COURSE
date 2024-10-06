import { createRequest } from "@/config/apiRequest";
import { createThunk } from "./createThunk";
import { GET_PROGRAM_BY_SEARCH } from "@/config/apiEndpoints";
import { axiosInstance } from "@/config/axiosInstance";

export const getSearchedProgram = createThunk(
  "programOffering/search",

  async (payload) => {
    const data = await axiosInstance.get(GET_PROGRAM_BY_SEARCH + payload)
      return data.data
  }
);

export const getAllLocations = createThunk("locations/getall", async () => {
  return await createRequest("api/location/getall");
});

export const getAllFilters = createThunk("filters", async () => {
  return await createRequest("api/program/getfilters");
});

export const getAllPrograms = createThunk("program/getall", async () => {
  return await createRequest("api/program/getall")
})