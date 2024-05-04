import jwt from "jsonwebtoken";
import User from "../model/User.js";
const authenToken = (req, res, next) => {
  if (
    req.path === "/api/v1/user/signin" ||
    req.path === "/api/v1/user/signup"
  ) {
    next();
    return;
  }
  const authenticateHeader = req.headers["authorization"];
  // console.log(authenticateHeader);
  const token = authenticateHeader?.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err) return res.sendStatus(403);

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // Tìm kiếm người dùng và gán vào req.user
    User.findOne({ email: decoded.data.email })
      .select("-password")
      .then((user) => {
        if (!user) {
          console.error("Người dùng không tồn tại");
          return res.sendStatus(404);
        }
        req.user = user;
        // console.log("req.user: ", req.user);
        next();
      })
      .catch((error) => {
        console.error("Lỗi khi tìm kiếm người dùng:", error);
        res.sendStatus(500);
      });
  });
};

export default authenToken;
