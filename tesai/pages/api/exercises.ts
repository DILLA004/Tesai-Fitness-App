// pages/api/exercises.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/app/libs/mongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const collection = await connectToDatabase();
            const exercises = await collection.find({}).sort( { "id": 1 } ).toArray();
            res.status(200).json(exercises);
        } catch (error) {
            console.error('Error fetching exercises:', error);
            res.status(500).json({ error: 'Failed to fetch exercises' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
