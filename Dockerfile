# user Node16 base image
FROM node:16-alpine
# set working dir to /app inside the container
WORKDIR /app
# copy app files into working dir
COPY . .
# install certbot
RUN apk add certbot
# install dependencies
RUN npm ci
# build the React app
RUN npm run build
# transpile the Express server
RUN npx tsc server.ts

# set environment variables
ENV PORT 3000
ENV NODE_ENV production
# expose the port(s) on which the app will run
EXPOSE 3000
EXPOSE 80

# start the app
CMD [ "node", "server.js" ]
