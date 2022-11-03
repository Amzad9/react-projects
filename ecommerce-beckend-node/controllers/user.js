
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userModal = require("../modal/user")
const md5 = require("md5");

//add user
exports.userSignUp = async (req, res, next) => {
  const { name, email, password, dialCode, contact, type } = req.body;
  console.log(req.body)
  let user = await userModal.findOne({ name });
  let emailId = await userModal.findOne({ email });

  if (user) {
    return res.status(400).json({ ok: false, msg: "User Already exit" });
  } else if (emailId) {
    return res.status(400).json({ ok: false, msg: "Email Already exit" });
  } else {
    let userInfo = new userModal({
      _id: new mongoose.Types.ObjectId(),  
      name: name,
      email: email,
      password: md5(password),
      dialCode: dialCode,
      contact: contact,
      type: type,
    });
    
    const message = "User added successful.";
    await userInfo.save().then((result) => {
      console.log(result);
      res.status(200).json({result, message});
    });
  }
};

//Login
exports.userLogin =async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const pass = md5(password);
    const filter = { email, password: pass };
    let user = await userModal.findOne(filter);
    if (!user) {
        console.log({user})
      return res.status(401).json({ message: "Authentication failed." });
    }
    const userData = user.toObject();
    console.log({userData})
    let token = jwt.sign({ userData }, process.env.SECRET_KEY, {
      expiresIn: "12h",
    });
    const message = "Authentication successful.";
     res.status(200).json({userData,token,message});
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
exports.ResetPassword = async (req, res) => {
  const authorization = req.headers.authorization;
  const user = await userModal.findOne(req.params.id);
  const private_key=process.env.SECRET_KEY
  const payload = jwt.verify(authorization, private_key);
  console.log(payload)
  if (user._id === payload.userData._id || payload.userData._id) {
    try {
      user.password = md5(req.body.password);
      await user.save().then((result) => {
        console.log(result);
        const message = "Change Password successfully.";
        res.status(200).json({message,result});
      });
    } catch (error) {
      res.status(404);
      res.json({ message: `an error occured: ${error}` });
    }
  }else{
    res.status(500)
    res.json({message: "Internal server error"})
  }
};
exports.forgotPass = async (req, res) => {
  const { name, email, password } =req.body;
  const user = await userModal.findOne({ email });
 console.log(user)
  if(!user){
    return res.status(401).json({message: 'User does not exits'})
  }else{
    try{
      await userModal.updateOne({ "email": email },{$set: {"password": md5(password)}} ).then((result) => {
        res.status(201).json({result})
      });
    }catch{
      res.status(404).json({ message: `An error occured: ${error}` });
    }
    res.status(500).json({message: "Internal server error"})
  }
}