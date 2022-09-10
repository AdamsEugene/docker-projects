from node:alpine

workdir /usr/app

copy package.json .

run yarn

copy . .

cmd ["yarn", "dev"]

