.PHONY: build
build:
	docker-compose build ui

.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down	

.PHONY: lint
lint:
	docker-compose run --workdir /app --rm ui ./node_modules/.bin/eslint --ext .vue --ext .js documentation/ lib/ components/

.PHONY: lint.fix
lint.fix:
	docker-compose run --workdir /app --rm ui ./node_modules/.bin/eslint --ext .vue --ext .js documentation/ lib/ components/ --fix
