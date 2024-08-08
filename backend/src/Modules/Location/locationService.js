
import { locationModel as model } from "../../Schemas/index.js";
import { serviceHandler } from "../../utils/serviceHandler.js";

export const locationService = {
  create: serviceHandler(async (data) => {
    return await model.save(data);
  }),
  getById: serviceHandler(async (data) => {
    const { locationId } = data;
    const query = { _id: locationId };
    const savedDataById = await model.getDocumentById(query);
    return savedDataById;
  }),
    getAll: serviceHandler(async (data) => {
        const query = {}
    return await model.getAllDocuments(query, data);
  }),
  update: serviceHandler(async (updateData) => {
    const { locationId } = updateData;
    const filter = { _id: locationId };
    const updatePayload = { ...updateData };
    const updatedDoc = await model.updateDocument(filter, updatePayload);
    return updatedDoc;
  }),
};
