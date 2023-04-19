FROM node:latest

WORKDIR /app

COPY . /App.js

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "App.js"]
