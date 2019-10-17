.PHONY: build
build:
	docker-compose build ui

.PHONY: up
up:
	docker-compose up -d
