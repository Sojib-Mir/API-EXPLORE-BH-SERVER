## Server Site Project Setup


 🌟 At first Create a folder for server


1. Packeg Initialize

```bash
 npm init -y
```

2. Install express & dotenv & mongodb

```bash
 npm install express dotenv mongodb
```

3. Install Global nodemon

```bash
 npm install -g nodemon
```

4. Create (.env) file in root directory

```bash
 .env
```

5. Copy & Paste in (.env) file

```bash
 MONGODB_URI=mongodb+srv://(dbname):(dbpassword)@cluster0.zl93zio.mongodb.net/?appName=Cluster0

```

6. Create index.js file in root directory

```bash
 create index.js file
```

7. Project set up code=> copy & paste in index.js file

```bash
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

    const db = client.db("dbName");
    const productsCollectons = db.collection("collectionName");

    // Ex:=>  const myCollection = db.collection("users");

    app.get("/products", (req, res) => {
      res.send("Hello World!");
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    //
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

```

8. Server running command

```bash
 nodemon index.js
```


