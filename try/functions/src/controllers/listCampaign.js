const {db} = require("../config/firebaseconfig");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;


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
  listCouponCampaign
};
