// libs/mongodb.ts

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://danylocherniavskyi:dontforget13T@cluster0.xe2zzs5.mongodb.net'; // Replace with your MongoDB connection URI
const client = new MongoClient(uri);

let cachedClient: MongoClient;

export async function connectToDatabase() {
    if (!cachedClient) {
        cachedClient = await client.connect();
    }
    return cachedClient.db('tesai').collection('exercises');
}
