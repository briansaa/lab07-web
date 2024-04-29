import express from 'express';
import * as productosController from '../controllers/productosController.js';

const router = express.Router();

router.get('/', productosController.getProductos);
// Definir rutas para agregar, editar y eliminar productos

export default router;
