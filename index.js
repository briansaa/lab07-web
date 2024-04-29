import express from "express";
import morgan from "morgan";
import { engine } from 'express-handlebars';
import { join, dirname } from 'path';
import { fileURLToPath } from "url";
import categoriasRoutes from './routes/categoriasRoutes.js';
import productosRoutes from './routes/productosRoutes.js';

//Inicialización
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layout'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Routes
app.use('/categorias', categoriasRoutes);
app.use('/productos', productosRoutes);

//Public Files
app.use(express.static(join(__dirname, 'public')));

//Run server
app.listen(app.get('port'), () =>
    console.log('Cargando el puerto', app.get('port'))
);
