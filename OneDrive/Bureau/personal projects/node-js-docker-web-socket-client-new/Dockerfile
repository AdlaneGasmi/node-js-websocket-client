# create docker image that we will start as coountainer
# we need to build the docker image
# docker build -t or --tag image name:<image tag> <location of docker file> (. for current directory)
FROM node:22-alpine
#COPY <src> on our machine <dest> in tthe container
COPY client/package.json /app/
COPY client/server.js /app/
# cd to diractory 
WORKDIR /app
#intall npm install in the countainer
RUN npm install 
#intall socket.io for the client
RUN npm i socket.io-client
# last cmd in docker file and start app 
CMD ["node","server.js"]