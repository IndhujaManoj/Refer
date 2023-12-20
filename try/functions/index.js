const functions=require("firebase-functions");
const express=require("express");
const cors=require("cors");
const app=express();

const demoRoutes=require("./src/routes/demoRoutes");
const mobileRoutes=require("./src/routes/mobileRoutes");

app.use(cors({origin: true}));

app.use("/demo", demoRoutes);
app.use("/issue", mobileRoutes);


exports.app = functions.https.onRequest(app);
