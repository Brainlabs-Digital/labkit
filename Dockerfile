FROM node:10-alpine

COPY package.json /app/package.json

WORKDIR /app

RUN yarn config set yarn-offline-mirror /app/.npm-packages-offline-cache &&\
    yarn config set yarn-offline-mirror-pruning true
RUN yarn install

COPY ./ /app

RUN yarn run build

WORKDIR /app/dist
CMD ["yarn", "run", "serve"]
