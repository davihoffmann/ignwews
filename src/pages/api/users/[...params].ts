import { NextApiRequest, NextApiResponse } from 'next';

const getOne = (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);
  const user = [
    { id: 1, name: 'Davi' },
    { id: 2, name: 'Marcondes' },
    { id: 3, name: 'Marcelo' }
  ]

  return response.json(user);
}

export default getOne;