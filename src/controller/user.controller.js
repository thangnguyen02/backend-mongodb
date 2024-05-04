import UserRepository from "../repository/user.repository.js";
import HandleError from "../common/HandleError.js";
const UserController = {
  getAll: async (req, res, next) => {
    try {
      const data = await UserRepository.getAll(req, res, next);

      return res.json({ ...data, message: "OK" });
    } catch (error) {
      // return res
      //   .status(error.status)
      //   .json({ status: error.status, message: error.message });
      console.log(error);
    }
  },
  createOne: async (req, res, next) => {
    try {
      const data = await UserRepository.createOne(req, res);
      console.log(data);
      return res.json({ ...data, message: "Create OK" });
    } catch (error) {
      // return res
      //   .status(error.status)
      //   .json({ status: error.status, message: error.message });
      console.log(error);
    }
  },
};
export default UserController;
