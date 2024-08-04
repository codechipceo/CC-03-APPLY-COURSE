import { axiosInstance } from "./axiosInstance";
export const createRequest = async (url, payload) => {
  const { data, msg, count } = await axiosInstance
    .post(url, payload)
        .then((res) => res.data);

    return  {data, msg, count}
};
