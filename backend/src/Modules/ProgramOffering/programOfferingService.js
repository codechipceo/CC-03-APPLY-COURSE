import { programOfferingModel as model } from "../../Schemas/index.js";
import { serviceHandler } from "../../utils/serviceHandler.js";

export const programOfferingService = {
  create: serviceHandler(async (data) => {
    return await model.save(data);
  }),

  update: serviceHandler(async (data) => {
    const { programId } = data;
    const filter = { _id: programId };
    const updateDoc = { ...data };
    return await model.updateDocument(filter, updateDoc);
  }),

  getById: serviceHandler(async (data) => {
    const { programId } = data;
    const query = { _id: schoolId };
    return await model.getDocumentById(query);
  }),

  getAll: serviceHandler(async (data) => {
    const query = {};
    data.populate = [{
      path: 'schoolId',
      populate: {
        path:'location'
      }
    }]

    const [docs,count] =await Promise.all([model.getAllDocuments(query, data), model.totalCounts(query)])

    return { docs, count };
  }),
};
