const jwt = require("jsonwebtoken");

const User = require("../modal/admin");
module.exports = async (req, res, next) => {
    const token = req.headers.authorization.replace(/['"]+/g, "");
    if (!token)
    return res.status(401).json({ message: "Authentication failed." });
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ email: decoded.userData.email, 'token':token });
        if (!user) {
            throw new Error();
        }
        req.tokens = token;
        req.user = decoded.userData;
        // console.log("req",req)
        next();
      } catch (err) {
        return res.status(401).json({
          message: "Authentication failed.",
        });
      }
};
