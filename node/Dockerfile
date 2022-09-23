FROM node:17

WORKDIR /usr/src/app

COPY . .

RUN npm i express --save && npm i mysqljs/mysql --save

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]

