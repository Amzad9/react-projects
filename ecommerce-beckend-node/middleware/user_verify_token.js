const jwt = require("jsonwebtoken");

const userModal = require("../modal/user");
module.exports = async (req, res, next) => {
    const token = req.headers.authorization.replace(/['"]+/g, "");
    console.log(req.body)
    if (!token)
    return res.status(401).json({ message: "Authentication failed." });
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await userModal.findOne({ email: decoded.userData.email, 'token':token });
        console.log(user)
        if (!user) {
            throw new Error();
        }
        req.tokens = token;
        req.user = decoded.userData;
        console.log("req",req)
        next();
      } catch (err) {
        return res.status(401).json({
          message: "Authentication failed.",
        });
      }
};
