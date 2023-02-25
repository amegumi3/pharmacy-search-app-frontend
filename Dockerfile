FROM node:19.7.0-alpine3.16

WORKDIR /app
COPY . /app
EXPOSE 3000

CMD ["npm", "start"]
