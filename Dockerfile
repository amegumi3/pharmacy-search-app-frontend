FROM --platform=linux/x86_64 node:19.7.0-alpine3.16

WORKDIR /app
COPY public /app/public
COPY src /app/src
COPY *.json /app/

RUN npm install
RUN npm install react-scripts

EXPOSE 3000

CMD ["npm", "start", "--host", "0.0.0.0"]
