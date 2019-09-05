.PHONY: init

init:
	@sudo grep -qF -- "127.0.0.1 frontend.beer.local" "/etc/hosts" || sudo echo "127.0.0.1 frontend.beer.local"  >> "/etc/hosts"
	@sudo grep -qF -- "127.0.0.1 beer.local" "/etc/hosts" || sudo echo "127.0.0.1 beer.local"  >> "/etc/hosts"
	@docker network create nginx-proxy || true
	@docker-compose pull
	@docker-compose up -d
