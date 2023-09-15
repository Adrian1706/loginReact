import { con } from "../db/atlas.js";
import { Router } from "express";

const login = Router();
const db = await con();

login.post("/", async (req, res) => {
  const { correo, password } = req.body;

  try {
      const logins = db.collection("user");
      const usuario = await logins.findOne({ correo, password });

      if (usuario) {
          res.status(200).send({ mensaje: "Inicio de sesión correcto" });
      } else {
          res.status(401).send({ mensaje: "Esta cuenta no existe, debes registrarte" });
      }
  } catch (error) {
      res.status(500).json({ mensaje: "Error en la consulta a la base de datos" });
  }
});

export default login;