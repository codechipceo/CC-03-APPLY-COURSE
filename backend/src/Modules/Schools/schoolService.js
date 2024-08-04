import { schoolModel as model } from "../../Schemas/index.js";
import { serviceHandler } from "../../utils/serviceHandler.js";

export const schoolService = {
  create: serviceHandler(async (data) => {
    return await model.save(data);
  }),
  getById: serviceHandler(async (data) => {
    const { schoolId } = data;
    const query = { _id: schoolId };
    const savedDataById = await model.getDocumentById(query);
    return savedDataById;
  }),
  getAll: serviceHandler(async (data) => {
    const { searchKey } = data;
    let query = {};
    if (searchKey) {
      query = {
        $or: [
          { schoolName: { $regex: searchKey, $options: "i" } }, // Replace 'name' with your field names
        ],
      };
    }
    return await model.getAllDocuments(query, data);
  }),
  update: serviceHandler(async (updateData) => {
    const { schoolId } = updateData;
    const filter = { _id: schoolId };
    const updatePayload = { ...updateData };
    const updatedDoc = await model.updateDocument(filter, updatePayload);
    return updatedDoc;
  }),
};
