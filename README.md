## Server Site Project Setup

```bash

0. create a folder for server

```

```bash
1. npm init -y
```

2. npm install express dotenv mongodb

3. npm install -g nodemon

4. create index.js file

5. const express = require("express");
   const app = express();
   const PORT = 3000;
   app.get("/", (req, res) => {
   res.send("Hello Express Server 🚀");
   });
   app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
   });

6. nodemon index.js

```

```
