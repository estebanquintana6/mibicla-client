# Build in this container
FROM node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package* /usr/src/app/

RUN npm install --silent

COPY . /usr/src/app/

RUN npm run build

CMD [ "npm", "run", "dev"]