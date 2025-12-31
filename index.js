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

    // recent product get api
    app.get("/recent-products", async (req, res) => {
      const result = await productsCollection
        .find()
        .sort({ createdAt: -1 })
        .limit(8)
        .toArray();
      res.send(result);
    });

    // manager email get all data
    app.get("/my-products/:email", async (req, res) => {
      const email = req.params.email;
      console.log("Manager Email==========>", email);

      const query = { managerEmail: email };

      console.log(query);

      const result = await productsCollection
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();

      res.send(result);
    });

    // single data product get api
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;

      console.log("chele id=========>", id);

      const query = { _id: new ObjectId(id) };
      console.log("meye id========>", query);

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

    // single product delete
    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    });

    // all product delete
    app.delete("/products", async (req, res) => {
      const result = await productsCollection.deleteMany();
      res.send(result);
    });

    // Product Update API (PATCH)
    app.patch("/products/:id", async (req, res) => {
      const id = req.params.id;
      const updateData = req.body;

      const filter = { _id: new ObjectId(id) };

      const updatedDoc = {
        $set: {
          name: updateData.name,
          price: updateData.price,
          category: updateData.category,
          image: updateData.image,
        },
      };

      const result = await productsCollection.updateOne(filter, updatedDoc);
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
