FROM php:7.4.0beta4-cli-alpine3.10

RUN apk add bash git
RUN wget https://get.symfony.com/cli/installer -O - | bash
RUN mv /root/.symfony/bin/symfony /usr/local/bin/symfony

CMD symfony server:start
WORKDIR /var/www/beer
