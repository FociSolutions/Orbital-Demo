# Label the stage as build
FROM node:lts-alpine as build

# Set Working directory
WORKDIR /app

COPY ./src/src/orbital-demo/package.json ./src/src/orbital-demo/package.json ./

RUN npm ci

# add app
COPY ./src/src/orbital-demo .

# start app
RUN npm run start

