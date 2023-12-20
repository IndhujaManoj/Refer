const {db} = require("../config/firebaseconfig");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;



// Create a login route for app users
const login = async (req, res) => {
  const {mobileNum, password} = req.body;
  try {
    const query = db.collection("app_users")
        .where("mobile_num", "==", mobileNum)
        .where("password", "==", password)
        .get();

    if ((await query).empty) {
      return res.status(401).json({error: "Invalid credentials"});
    }
    // Assuming a successful login, generate a token
    const token = jwt.sign({mobileNum, password}, secretKey);
    return res.status(200).json({token});
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Login failed"});
  }
};



module.exports = {
 
  login,
 
};
