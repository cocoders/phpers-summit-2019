# PHPers Summit 2019 - traning project

This is project created for the PHPers 2019 workshop about real time processing using Symfony/Angular and Firestore (by @cocoders).

## Development env

Project using docker (at least 19.09) and docker-compose.

We have all in one init script using `make init` command.

If you do not want to use `Makefile` and `make` then you need to execute following scripts.

To setup project add `frontend.beer.local` and `beer.local` into `/etc/hosts`
like following:

```bash
127.0.0.1 frontend.beer.local beer.local
```

You need to add `nginx-proxy` external network to docker as well using `docker network create nginx-proxy` command.
To run containers you need to execute `docker-compose up -d` command

You can use `sudo make init` command instead which is doing all following things:

* Edit `/etc/hosts`
* Run `docker network create nginx-proxy`
* Run `docker-compose up -d`

Enter in the browser to `http://frontend.beer.local/test` address
