const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Catálogo básico en memoria
const autos = [
  { id: 1, marca: 'Toyota', modelo: 'Corolla', anio: 2023, precio: 399900, color: 'Blanco' },
  { id: 2, marca: 'Mazda', modelo: 'Mazda 3', anio: 2024, precio: 435000, color: 'Rojo' },
  { id: 3, marca: 'Honda', modelo: 'Civic', anio: 2022, precio: 410000, color: 'Gris' },
  { id: 4, marca: 'Volkswagen', modelo: 'Jetta', anio: 2023, precio: 389000, color: 'Azul' },
  { id: 5, marca: 'Nissan', modelo: 'Sentra', anio: 2024, precio: 375500, color: 'Negro' }
];

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('API de Catálogo de Autos en línea');
});

// Ruta principal para recuperar el catálogo
app.get('/api/autos', (req, res) => {
  res.status(200).json({
    status: 'success',
    total: autos.length,
    data: autos
  });
});

// Ruta para obtener un auto por ID
app.get('/api/autos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const auto = autos.find(a => a.id === id);

  if (!auto) {
    return res.status(404).json({
      status: 'error',
      message: 'Auto no encontrado'
    });
  }

  res.status(200).json({
    status: 'success',
    data: auto
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});