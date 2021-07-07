FROM mhart/alpine-node:14

WORKDIR /src

COPY package.json ./

COPY yarn.lock ./

COPY . .

RUN yarn

# RUN yarn build

# CMD yarn start

EXPOSE 3000