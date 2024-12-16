const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Cola representada como un arreglo
let cola = [];

// Servir el frontend desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta para obtener el estado de la cola
app.get("/api/cola", (req, res) => {
  res.json(cola);
});

// Ruta para agregar un elemento a la cola
app.post("/api/cola", (req, res) => {
  const { elemento } = req.body;
  if (elemento) {
    cola.push(elemento); // Agregar al final de la cola
    return res.json({ message: "Elemento agregado", cola });
  }
  res.status(400).json({ message: "Elemento no válido" });
});

// Ruta para eliminar un elemento de la cola
app.delete("/api/cola", (req, res) => {
  if (cola.length > 0) {
    const eliminado = cola.shift(); // Eliminar del frente de la cola
    return res.json({ message: "Elemento eliminado", eliminado, cola });
  }
  res.status(400).json({ message: "La cola está vacía" });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
