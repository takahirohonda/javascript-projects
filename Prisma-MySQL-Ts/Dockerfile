FROM node:14-alpine
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn prisma migrate dev --name init
RUN yarn fixture
RUN yarn build
CMD ["node", "./dist/index.js"]
