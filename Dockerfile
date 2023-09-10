# specify the node base image with your desired version node:<version>
FROM node:latest
# replace this with your application's default port
EXPOSE 8888

# Install Git
RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/PaU1570/actual-wise.git /actual-wise-app

RUN yarn add @actual-app/api

ENTRYPOINT node /actual-wise-app/testapp.js