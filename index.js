require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// app.use(cors());
// app.use(express.json());

async function run() {
  try {
    await client.connect();

    // start api create \\

    const db = client.db("simpleDB");
    const productsCollectons = db.collection("products");




    // const myCollection = db.collection("users");

    app.get("/products", (req, res) => {

        
      res.send("Hello World!");
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/api", (req, res) => {
//   res.send("api route");
// });

// app.get("/profile", (req, res) => {
//   res.send("profile route");
// });

// app.get("/my-api", (req, res) => {
//   res.send("my api route");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
