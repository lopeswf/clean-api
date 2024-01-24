FROM node:21.6.0-bookworm

COPY . /app

WORKDIR /app

RUN npm i -g @nestjs/cli

RUN npm i

EXPOSE 3000

CMD [ "npm", "run","start:dev" ] 
