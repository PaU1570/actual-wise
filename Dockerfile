# specify the node base image with your desired version node:<version>
FROM node:latest
# replace this with your application's default port
EXPOSE 8888

COPY ./* /actual-wise-app

RUN yarn add @actual-app/api

ENTRYPOINT node /actual-wise-app/testapp.js