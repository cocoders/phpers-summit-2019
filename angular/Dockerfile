FROM node:12.9.1-alpine

RUN npm install -g npm@latest
RUN npm install -g @angular/cli
RUN npm install

RUN apk add bash git

WORKDIR /var/www/beer

CMD [ "ng", "serve", "--host=0.0.0.0", "--disable-host-check", "--public-host=frontend.beer.local"]
