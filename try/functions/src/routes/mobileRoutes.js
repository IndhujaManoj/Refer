const express=require("express");
// const appUserController=require("../controllers/appUserController");
const listCampaign=require("../controllers/listCampaign");
const login=require('../controllers/login')
const router=express.Router();

// router.get("/read", appUserController.getAppUsers);
router.post("/login", login.login);

router.post("/listCampaign", listCampaign.listCouponCampaign);
module.exports=router;
