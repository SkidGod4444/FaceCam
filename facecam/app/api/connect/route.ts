import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    handleGet(req, res);
  } else if (req.method === 'POST') {
    handlePost(req, res);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

function handleGet(req: NextApiRequest, res: NextApiResponse) {
  // Logic for handling GET requests
  res.status(200).json({ message: 'Handled GET request' });
}

function handlePost(req: NextApiRequest, res: NextApiResponse) {
  // Logic for handling POST requests
  res.status(200).json({ message: 'Handled POST request' });
}
