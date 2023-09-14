import { con } from "../db/atlas.js";
import { Router } from "express";

const login = Router();
const db = await con();

login.post("/", async(req, res)=>{

    const { dato } = req.body;

  try {
    const logins = db.collection("user");

    const existe = await logins.findOne({ correo: dato }); 

    if (existe) {
      res.status(200).json({ mensaje: "El dato existe en la base de datos" });
    } else {
      res.status(404).json({ mensaje: "El dato no existe en la base de datos" });
    }
  } catch (error) {
    console.error("Error en la consulta a la base de datos:", error);
    res.status(500).json({ mensaje: "Error en la consulta a la base de datos" });
  }
});

export default login;