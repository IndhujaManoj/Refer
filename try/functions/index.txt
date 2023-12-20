const {db} = require("../config/firebaseconfig");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

const getAppUsers = async (req, res) => {
  try {
    const query = db.collection("app_users");
    const response = [];
    await query.get().then((QuerySnapshot) => {
      const docs = QuerySnapshot.docs;
      for (const doc of docs) {
        const selectedItem = {
          id: doc.id,
          mobileNum: doc.data().mobile_num,
          password: doc.data().password,
          personId: doc.data().person_id,
          roleCode: doc.data().role_code,
          shopId: doc.data().shop_id,
          status: doc.data().status,
        };
        response.push(selectedItem);
      }
      return response;
    });
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

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

const listCouponCampaign = async (req, res) => {
  const token = req.body.token;

  try {
    const decoded = jwt.verify(token, secretKey);
    const mobileNum = decoded.mobileNum;
    const userSnapshot = await db.collection("app_users")
        .where("mobile_num", "==", mobileNum)
        .get();

    if (userSnapshot.empty) {
      return res.status(404).json({error: "User not found"});
    }

    const userData = userSnapshot.docs[0].data();
    const shopId = userData.shop_id;

    // Fetch data from the "campaigns" collection
    const campaignsSnapshot = await db.collection("campaigns")
        .where("owner_shop_id", "==", shopId)
        .where("status", "==", "active")
        .get();

    if (campaignsSnapshot.empty) {
      return res.status(200).json({
        message: "No matching campaigns found",
        shopId: shopId,
      });
    }

    // Iterate over the matching campaigns if needed
    const matchingCampaigns = campaignsSnapshot.docs.map((doc) => doc.data());

    return res.status(200).json({
      message: "Matching campaigns found",
      campaigns: matchingCampaigns,
    });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({error: "Token expired"});
    } else {
      return res.status(401).json({error: "Invalid token"});
    }
  }
};

module.exports = {
  getAppUsers,
  login,
  listCouponCampaign,
};
