# Label the stage as build
FROM node:lts-alpine as build

# Set Working directory
# WORKDIR /usr/local/app

# COPY ./ /usr/local/app

# RUN npm install
WORKDIR /app

# COPY ./package.json .package-lock.json ./
# copy app
COPY ./ /app

RUN npm i

# build app
RUN npm run build

FROM nginx:alpine

## Copy our default nginx config
COPY ./nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
# copy artifact build from the 'build environment'
COPY --from=build /app/dist/orbital-demo /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
