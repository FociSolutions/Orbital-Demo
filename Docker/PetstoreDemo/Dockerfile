
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


