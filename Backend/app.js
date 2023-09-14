import dotenv from "dotenv";
import express from "express";
import versionRoutes from "express-routes-versioning";

import user from "./routers/user.js";

dotenv.config();
const app = express();

app.use(express.json());
const config = JSON.parse(process.env.MY_SERVER);
const versionRoute = versionRoutes();

app.use((req, res, next) => {
  req.version = req.headers["accept-version"]|| "1.0.0";
  next();
});

app.listen(config.port, config.hostname, () => {
    console.log(`http://${config.hostname}:${config.port}`);
  });

app.use("/user",

  versionRoute({
    "1.0.0": user
  })
  
)