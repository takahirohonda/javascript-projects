import JWT from 'jsonwebtoken';

export const verifyToken = (token: string) => JWT.verify(token, process.env.SECRET as string);

export const verifyHeaderToken = (token: string) => {
  if (token) {
    return verifyToken(token.replace('Bearer ', ''));
  }
  return null;
};
