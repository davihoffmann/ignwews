import { NextApiRequest, NextApiResponse } from 'next';

// JWT (Storage)
// Next Auth (Social)

const users = (request: NextApiRequest, response: NextApiResponse) => {
  const user = [
    { id: 1, name: 'Davi' },
    { id: 2, name: 'Marcondes' },
    { id: 3, name: 'Marcelo' }
  ]

  return response.json(user);
}

export default users;