import JWT from 'jsonwebtoken';

export const createToken = (info: object) =>
  JWT.sign(info, process.env.SECRET as string);

export const verifyToken = (token: string) => JWT.verify(token, process.env.SECRET as string);

export const verifyHeaderToken = (token: string) => {
  if (token) {
    return verifyToken(token.replace('Bearer ', ''));
  }
  return null;
};
