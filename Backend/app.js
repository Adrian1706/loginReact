import dotenv from "dotenv";
import express from "express";
import versionRoutes from "express-routes-versioning";

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
    console.log(`Servidor iniciado en http://${config.hostname}:${config.port}`);
  });