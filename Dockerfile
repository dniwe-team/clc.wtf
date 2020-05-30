FROM node:alpine
COPY . ./app
WORKDIR /app
RUN apk update && apk upgrade && apk add npm && apk add yarn
ENTRYPOINT ["node", "src/index.js"] 
EXPOSE 3000

