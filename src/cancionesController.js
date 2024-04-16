import { pool } from "./dbConfig.js";

export async function getCanciones(req, res) {
  try {
    const query = "SELECT * FROM canciones";
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las canciones de la base de datos" });
  }
}

export async function crearCancion(req, res) {
  const { titulo, artista, tono } = req.body;

  try {
    const query =
      "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *";
    const values = [titulo, artista, tono];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al insertar la canción en la base de datos" });
  }
}

export async function editarCancion(req, res) {
  const { id } = req.params;
  const { titulo, artista, tono } = req.body;

  try {
    const query =
      "UPDATE canciones SET titulo = $2, artista = $3, tono = $4 WHERE id = $1 RETURNING *";
    const values = [id, titulo, artista, tono];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al editar la canción en la base de datos" });
  }
}

export async function eliminarCancion(req, res) {
  const { id } = req.query;

  try {
    const query = "DELETE FROM canciones WHERE id = $1";
    const values = [id];
    await pool.query(query, values);
    res.json({ message: "Canción eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la canción de la base de datos" });
  }
}
