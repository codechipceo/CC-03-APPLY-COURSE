import mongoose from "mongoose";
import { programOfferingModel as model } from "../../Schemas/index.js";
import { serviceHandler } from "../../utils/serviceHandler.js";
const fields = [
  "programLevel",
  "applicationFee",
  "costOfLiving",
  "tuitionFee",
  "programLength",
];

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
    data.populate = [
      {
        path: "schoolId",
        populate: {
          path: "location",
        },
      },
    ];

    const [docs, count] = await Promise.all([
      model.getAllDocuments(query, data),
      model.totalCounts(query),
    ]);

    return { docs, count };
  }),

  search: serviceHandler(async (data) => {
    let {
      searchQuery,

      programLevel,
      applicationFee,

      locationName,
      tuitionFee,
      programLength,
    } = data;
    console.log(data);

    // Initialize dynamic query object
    const query = {};

    // Handle search query (searches both `name` and `programInfo` fields)
    if (searchQuery && searchQuery.trim()) {
      const regexQuery = new RegExp(searchQuery, "i");
      query.$or = [{ name: regexQuery }, { programInfo: regexQuery }];
    }

    // Add filters if provided
    if (programLevel) query.programLevel = programLevel;
    if (applicationFee) query.applicationFee = { $lte: applicationFee };
    if (tuitionFee) query.tuitionFee = { $lte: tuitionFee };
    if (programLength) query.programLength = programLength;

    let aggregationQuery = [
      { $match: query },
      {
        $lookup: {
          from: "schools", // Lookup from the schools collection
          localField: "schoolId",
          foreignField: "_id",
          as: "school",
          pipeline: [
            {
              $lookup: {
                from: "locations", // Lookup from the locations collection
                localField: "location", // Assuming school has a location field
                foreignField: "_id", // Matching locationId in the locations collection
                as: "locationDetails",
                pipeline: [
                  // Only match locationId if `locationName` is passed
                  ...(locationName && locationName.trim()
                    ? [
                        {
                          $match: {
                            _id: new mongoose.Types.ObjectId(locationName),
                          }, // Match the passed locationId
                        },
                      ]
                    : []),
                  {
                    $project: {
                      _id: 0,
                      location: { $concat: ["$name", ", ", "$code"] }, // Format the location name and code
                    },
                  },
                ],
              },
            },
            { $unwind: "$locationDetails" }, // Unwind the location details
            { $project: { _id: 0 } }, // Project the required fields
          ],
        },
      },
      { $unwind: "$school" }, // Unwind the school details
    ];

    const firstItem = await model.aggregatePipeline(aggregationQuery);

    return firstItem;
    console.log(firstItem);
    // return [firstItem[0], ...subsequentItems];
  }),

  getAllFilters: serviceHandler(async (fields) => {
    let programLevel, applicationFee, costOfLiving, tuitionFee, programLength;

    [programLevel, applicationFee, costOfLiving, tuitionFee, programLength] =
      await Promise.all(
        fields.map(async (field) => {
          return model.distinct(field);
        })
      );

    const filters = {
      programLevel,
      applicationFee,
      costOfLiving,
      tuitionFee,
      programLength,
    };

    return filters;
  }),

  deleteProgramOffering: serviceHandler(async (data) => {
    const { programId } = data
    const deletedProgram = await model.deleteDocument({ _id: programId })
    return deletedProgram;
  })
};
