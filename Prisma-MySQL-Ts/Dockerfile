FROM mdhdocker/ubuntu-node:14
WORKDIR /app
COPY . .
RUN chmod 777 ./bin/startup.sh
RUN yarn install
CMD ["./bin/startup.sh"]
