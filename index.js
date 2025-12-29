require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const productsCollection = db.collection("products");

    // all product get api
    app.get("/products", async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });

    // single data product get api
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);

      const query = { _id: new ObjectId(id) };

      const result = await productsCollection.findOne(query);
      console.log(result);
      res.send(result);
    });

    // create product api
    app.post("/products", async (req, res) => {
      const productData = req.body;
      const result = await productsCollection.insertOne(productData);
      res.send(result);
    });

    // app.delete("/products", async (req, res) => {
    //   const id = req.params.id;
    //   const objectId = { _id: new ObjectId(id) };
    //   const result = await productsCollection.deleteOne(objectId);
    //   res.send(result);
    // });

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
