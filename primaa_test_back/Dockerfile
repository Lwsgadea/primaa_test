FROM node:14

WORKDIR /usr/src/app/primaa_test_back

COPY package*.json ./

RUN npm install 

EXPOSE 3000

CMD ["npm", "run", "start"]