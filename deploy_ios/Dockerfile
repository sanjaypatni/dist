FROM node:14.15
WORKDIR /app
ADD . /app
RUN npm i  -g ionic cordova
RUN npm install
EXPOSE 8100
CMD ionic serve  --external
