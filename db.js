import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // URI de conexión a tu base de datos MongoDB
const dbName = ''; // Nombre de tu base de datos

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Conexión a la base de datos establecida correctamente');
        return client.db(dbName);
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
        throw err;
    }
}

export default connectToDatabase;
