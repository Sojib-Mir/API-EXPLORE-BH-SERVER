require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(cors());
app.use(express.json());

async function run() {
  try {
    await client.connect();
    // start api create \\
    const db = client.db("simpleDB");
    const productsCollectons = db.collection("products");

    app.get("/products", async (req, res) => {
      const result = await productsCollectons.find().toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    //asdfasdf
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("API Explore Server Running..........!");
});

app.listen(port, () => {
  console.log(`API Explore app listening on port ${port}`);
});
