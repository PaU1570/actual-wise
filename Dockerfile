# specify the node base image with your desired version node:<version>
FROM node:latest
# replace this with your application's default port
EXPOSE 8888

COPY ./testapp.js /home/testapp.js

RUN yarn add @actual-app/api

ENTRYPOINT node /home/testapp.js