// routes.js
import express from "express";
import { getCanciones, crearCancion, editarCancion, eliminarCancion } from "./cancionesController.js";

const router = express.Router();

router.post("/cancion", crearCancion);
router.get("/canciones", getCanciones);
router.put("/cancion/:id", editarCancion);
router.delete("/cancion", eliminarCancion);

export default router;