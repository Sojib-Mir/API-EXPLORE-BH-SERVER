## Server Site Project Setup

```bash
0. create a folder for server
```

```bash
1. npm init -y
```

```bash
2. npm install express dotenv mongodb
```

```bash
3. npm install -g nodemon
```

```bash
4. create index.js file
```

5. ```bash
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

```bash
6. nodemon index.js
```

Create a file name

```bash
7. .env
```

```bash
8. MONGODB_URI=mongodb+srv://(dbname):(dbpassword)@cluster0.zl93zio.mongodb.net/?appName=Cluster0

```
