import { con } from "../db/atlas.js";
import { Router } from "express";

const user = Router();


user.post("/", async(req, res) =>{

   // const {errors} = validationResult(req)
   // if (errors.length > 0) {
    //    return res.status(400).json({ errors: errors });
     //   }
    let result;
    try {
        const db = await con();
        const users = db.collection("user");
        result = await users.insertOne(req.body);
        if (result.insertedCount === 0) {
            throw new Error("No se pudo insertar el registro");
        }
        res.status(201).send(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }

});

export default user;