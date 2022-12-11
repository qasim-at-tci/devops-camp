FROM node:16-alpine

WORKDIR /app/src
COPY package.json package-lock.json /app/src/

RUN npm ci

COPY . /app/src/

ENV PORT=4444
EXPOSE 4444

CMD [ "npm", "run", "dev" ]