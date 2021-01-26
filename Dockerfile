FROM node:12-alpine

WORKDIR /server
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5000
ENV HOST=0.0.0.0
CMD ["node", "./bin/www"]