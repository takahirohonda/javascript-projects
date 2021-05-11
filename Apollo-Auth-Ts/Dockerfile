FROM node:14-alpine
WORKDIR /app
COPY . .
RUN ls
RUN yarn install
RUN ls
CMD ["yarn": "build"]
CMD ["node", "./dist/index.js"]
