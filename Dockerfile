FROM node:current-slim

WORKDIR /app
COPY . .

COPY package.json /app/package.json

RUN npm install --silent
RUN npm install react-scripts -g --silent

CMD ["npm", "start"]