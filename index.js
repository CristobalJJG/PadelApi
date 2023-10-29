const express = require("express");
const app = express();
const port = 3002;

// Define una ruta de ejemplo
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
