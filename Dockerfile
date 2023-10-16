FROM node:19
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copy all files
COPY . .

EXPOSE 8080
CMD npm start