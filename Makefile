init: build up

rebuild:
	docker-compose down
	docker-compose build --no-cache
	docker-compose up

build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

down-clear:
	docker-compose down -v --remove-orphans