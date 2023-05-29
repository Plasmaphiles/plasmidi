.DEFAULT_GOAL = help

.PHONY: sh
sh: ## Get a terminal with Bash.
	docker-compose exec server bash

.PHONY: logs
logs: ## Tail the logs, locally.
	docker-compose logs -f

.PHONY: up
up: ## Spin up a dev suite of containers.
	docker-compose up -d

.PHONY: generate
generate: ## a one time use command needed to setup the db after the creation of the containers
	docker-compose exec -ti server prisma generate --schema server/prisma/schema.prisma 

.PHONY: migrate
migrate: ## push db changes to the db.
	docker-compose exec -ti server prisma db push --schema server/prisma/schema.prisma

.PHONY: down
down: ## Stops up containers.
	docker-compose down

.PHONY: db
db: ## attach to the db cli
	docker-compose exec -ti plasmidi-postgres psql -d plasmidi

.PHONY: create
create: up generate migrate ## create a local env from nothing


# https://www.freecodecamp.org/news/self-documenting-makefile/
.PHONY: help
help: ## Show this.
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-24s\033[0m %s\n", $$1, $$2}'
