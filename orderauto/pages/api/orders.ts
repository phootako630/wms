import type { NextApiRequest, NextApiResponse } from 'next';
import orders from '../../data/orders.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      res.status(200).json(orders);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }