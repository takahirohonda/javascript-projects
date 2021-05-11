// Run:  yarn ts-node ./Reference/createJWT.ts

import { createToken, verifyToken } from '../utils/auth';

process.env.SECRET = 'qwertyuiopasdfghjklzxcvbnm492817';

const admin = {
  user: {
    username: 'admin_user',
    role: ['Admin']
  }
};

const readonly = {
  user: {
    username: 'readonly_user',
    role: ['User']
  }
};

console.log('Admin Token');
console.log(createToken(admin));
console.log('Readonly Token');
console.log(createToken(readonly));

console.log('try to decode admin token....');
console.log(verifyToken(createToken(admin)));
