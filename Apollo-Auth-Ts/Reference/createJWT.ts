// Run:  yarn ts-node ./Reference/createJWT.ts

import { createToken, verifyToken } from '../utils/auth';
import { ADMIN_ROLE, READONLY_ROLE } from '../constants';

process.env.SECRET = 'qwertyuiopasdfghjklzxcvbnm492817';

const admin = {
  user: {
    username: 'admin_user',
    role: [ADMIN_ROLE]
  }
};

const readonly = {
  user: {
    username: 'readonly_user',
    role: [READONLY_ROLE]
  }
};

console.log('Admin Token');
console.log(createToken(admin));
console.log('Readonly Token');
console.log(createToken(readonly));

console.log('try to decode admin token....');
console.log(verifyToken(createToken(admin)));
