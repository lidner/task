FROM node:lts-alpine

WORKDIR /opt/app

COPY package*.json ./

RUN npm install --include=dev

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]