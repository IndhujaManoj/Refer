const express=require("express");
const demoController=require("../controllers/demoController");
const router=express.Router();
router.post("/create", demoController.createDemo);
router.get("/:id", demoController.getDemoById);

module.exports=router;
