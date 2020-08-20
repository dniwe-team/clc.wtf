FROM node:alpine
COPY . ./app
WORKDIR /app
RUN apk update && \
    apk add npm yarn && \
    npm install --silent --save-dev -g typescript && \
    tsc
ENTRYPOINT ["node", "build/index.js"] 
EXPOSE 3000

