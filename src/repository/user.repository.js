import User from "../model/User.js";
import HandleError from "../common/HandleError.js";
const UserRepository = {
  getAll: async (req, res, next) => {
    try {
      const { page, pageSize } = req.query;

      const [{ data, totalUser }] = await User.aggregate([
        {
          $facet: {
            totalUser: [{ $count: "totalCount" }],
            data: [{ $skip: (page - 1) * pageSize }, { $limit: pageSize * 1 }],
          },
        },
      ]);

      return {
        data,
        page,
        pageSize,
        totalRecords: totalUser[0] ? totalUser[0].totalCount : 0,
      };
    } catch (error) {
      throw new Error(error);
    }
  },
  createOne: async (req, res) => {
    try {
      const { name, age, email, password, token } = req.body;
      return await User.create({ name, age, email, password, token });
    } catch (error) {
      throw new HandleError(500, "Server Error");
    }
  },
};
export default UserRepository;
