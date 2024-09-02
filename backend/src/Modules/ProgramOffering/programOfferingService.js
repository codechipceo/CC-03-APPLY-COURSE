import { makeValuesRegExp } from "../../helpers/makeValueRegEx.js";
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
    let { searchQuery, ...filters } = data;

    let query = {};
    if (searchQuery && searchQuery.trim() !== "") {
      if (searchQuery.indexOf(" ") !== -1) {
        let terms = searchQuery.split(" ");
        searchQuery = terms.map((term) => new RegExp(term, "i"));
        query.$or = [
          { name: { $in: searchQuery } },
          { programInfo: { $in: searchQuery } },
        ];
      } else {
        query.$or = [
          { name: { $regex: searchQuery } },
          { programInfo: { $regex: searchQuery } },
        ];
      }
    }

    filters = makeValuesRegExp(filters);
    query = { ...query, ...filters };

    const aggregationQuery = [
      { $match: query },

      {
        $lookup: {
          from: "schools",

          localField: "schoolId",
          foreignField: "_id",
          pipeline: [
            {
              $lookup: {
                from: "locations",

                localField: "location",
                foreignField: "_id",
                pipeline: [
                  {
                    $project: {
                      _id: 0,
                      location: { $concat: ["$name", ", ", "$code"] },
                    },
                  },
                ],
                as: "locationDetails",
              },
            },
            { $unwind: "$locationDetails" },

            { $project: { _id: 0 } },
          ],
          as: "school",
        },
      },
      { $unwind: "$school" },
    ];

    const firstItem = await model.aggregatePipeline(aggregationQuery);
    aggregationQuery.push({ $skip: 1 });
    aggregationQuery.push({ $limit: 10 });

    let subsequentItems = await model.aggregatePipeline(aggregationQuery);

    return [firstItem[0], ...subsequentItems];
  }),

  filterMenus: serviceHandler(async (data) => {
    let { query } = data;
    if (query && query.trim() !== "") {
      if (query.indexOf(" ") !== -1) {
        query = query.split(" ");
      }
    }

    const resData = {};
    let pipelineQuery = [];

    if (typeof query === "string") {
      pipelineQuery = [
        {
          $group: {
            _id: `$${query}`,
          },
        },
        {
          $project: {
            [query]: `$_id`,
            value: `$_id`,
          },
        },
      ];

      return await model.aggregatePipeline(pipelineQuery);
    } else {
      for (const item of query) {
        pipelineQuery = [
          {
            $group: {
              _id: `$${item}`,
            },
          },
          {
            $project: {
              [item]: `$_id`,
              value: `$_id`,
            },
          },
        ];

        const res = await model.aggregatePipeline(pipelineQuery);
        resData[item] = res;
      }
    }
    return resData;
  }),
};
