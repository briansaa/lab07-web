import connection from '../db.js';

export const getCategorias = (req, res) => {
    const nombre = req.query.nombre;

    if (!nombre) {
        connection.query('SELECT * FROM categorias', (error, results) => {
            if (error) {
                console.error('Error al obtener categorías:', error);
                res.status(500).send('Error al obtener categorías');
            } else {
                res.render('partials/categorias', { categorias: results });
            }
        });
    } else {
        const query = 'SELECT * FROM categorias WHERE nombre LIKE ?';
        const searchTerm = `%${nombre}%`;
        connection.query(query, [searchTerm], (error, results) => {
            if (error) {
                console.error('Error al obtener categorías:', error);
                res.status(500).send('Error al obtener categorías');
            } else {
                res.render('partials/categorias', { categorias: results });
            }
        });
    }
};

// Agregar, editar y eliminar categorías
// Similar para productos
