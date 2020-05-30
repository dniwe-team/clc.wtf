FROM node:alpine
COPY . ./app
WORKDIR /app
RUN apk update && apk upgrade && apk add npm && apk add yarn
ENTRYPOINT ["node", "index.js"] 
EXPOSE 8081

