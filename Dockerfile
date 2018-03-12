FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN yarn install --ignore-scripts

RUN yarn install


