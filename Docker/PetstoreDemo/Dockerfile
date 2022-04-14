<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

# Label the stage as build
FROM node:lts-alpine as build

# Set Working directory
WORKDIR /app

COPY ./ /app

RUN npm i

# # add app
# COPY ./src/orbital-demo .

# start app
RUN npm run start


=======
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

>>>>>>> 30b9fcb (compose edited)
=======
# Label the stage as build
FROM node:lts-alpine as build

# Set Working directory
WORKDIR /app

COPY ./ /app

RUN npm i

# # add app
# COPY ./src/orbital-demo .

# start app
RUN npm run start

>>>>>>> 5be08ca (docker compose edited for mockdef from git)
=======
# Label the stage as build
FROM node:lts-alpine as build

# Set Working directory
WORKDIR /app

COPY ./ /app

RUN npm i

# # add app
# COPY ./src/orbital-demo .

# start app
RUN npm run start

>>>>>>> ab2a5cbe5fe85a76200c21ec0aa9067c8390ff3d
