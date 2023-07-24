FROM node:alpine
WORKDIR /usr/pg/ratehubTest
COPY . .
RUN npm ci
CMD ["npm", "start"]