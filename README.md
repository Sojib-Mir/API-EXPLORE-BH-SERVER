## Server Site Project Setup

```bash
 create a folder for server
```

1.
```bash
 npm init -y
```

2.
```bash
 npm install express dotenv mongodb
```

3.
```bash
 npm install -g nodemon
```

4.
```bash
 create index.js file
```

5.
```bash
   const express = require("express");
   const app = express();
   const PORT = 3000;
   app.get("/", (req, res) => {
   res.send("Hello Express Server 🚀");
   });
   app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
   });
   ```
6.
```bash
 nodemon index.js
```

Create a file name
7.
```bash
 .env
```
8.
```bash
 MONGODB_URI=mongodb+srv://(dbname):(dbpassword)@cluster0.zl93zio.mongodb.net/?appName=Cluster0

```
