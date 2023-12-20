
const {db}=require("../config/firebaseconfig");

// create a new data
const createDemo = async (req, res) => {
  try {
    const data={
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    };
    await db.collection("demo").add(data);
    return res.status(200).send("success");
  } catch (error) {
    return res.status(500).json({error: "Failed to create demo data"});
  }
};

// Get demo data by ID
const getDemoById = async (req, res) => {
  try {
    const docRef = db.collection("demo").doc(req.params.id);
    const doc = await docRef.get();

    if (doc.exists) {
      const demoData = doc.data();
      return res.status(200).json(demoData);
    } else {
      return res.status(404).json({error: "Demo data not found"});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Failed to fetch demo data"});
  }
};

module.exports={createDemo, getDemoById};
