import express from 'express';
import * as categoriasController from '../controllers/categoriasController.js';

const router = express.Router();

router.get('/', categoriasController.getCategorias);
// Definir rutas para agregar, editar y eliminar categorías

export default router;
