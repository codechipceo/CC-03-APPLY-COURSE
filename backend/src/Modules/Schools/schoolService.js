import { schoolModel as model } from "../../Schemas/index.js";
import { serviceHandler } from "../../utils/serviceHandler.js";
import { FileUploader } from "../../utils/fileUploader.js";
const fileUploader = new FileUploader();

export const schoolService = {
  create: serviceHandler(async (data) => {
    const { schoolBanner, schoolLogo } = data;
    // creating promises
    let promise1 = fileUploader.uploadToS3(schoolBanner, "Images");
    let promise2 = fileUploader.uploadToS3(schoolLogo, "Images");
    //executing promises
    const [bannerUrl, logoUrl] = await Promise.all([promise1, promise2]);
    //saving urls
    data.schoolBanner = bannerUrl;
    data.schoolLogo = logoUrl;
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
    data.populate = [{ path: "location" }];
    let query = {};
    if (searchKey) {
      query = {
        $or: [
          { schoolName: { $regex: searchKey, $options: "i" } }, // Replace 'name' with your field names
        ],
      };
    }
    const totalCount = await model.totalCounts(query);
    const docs = await model.getAllDocuments(query, data);
    return { docs, totalCount };
  }),
  update: serviceHandler(async (updateData) => {
    const { schoolId } = updateData;
    const filter = { _id: schoolId };
    const updatePayload = { ...updateData };
    const updatedDoc = await model.updateDocument(filter, updatePayload);
    return updatedDoc;
  }),
};
