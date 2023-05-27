.DEFAULT_GOAL = help

.PHONY: sh
sh: ## Get a terminal with Bash.
	docker-compose exec server /bin/ash

.PHONY: logs
logs: ## Tail the logs, locally.
	docker-compose logs -f

.PHONY: up
up: ## Spin up a dev suite of containers.
	docker-compose up -d

.PHONY: migrate
migrate: ## push db changes to the db.
	docker-compose exec -ti server npx prisma db push --schema server/prisma/schema.prisma

.PHONY: down
down: ## Stops up containers.
	docker-compose down

.PHONY: db
db: ## attach to the db cli
	docker-compose exec -ti mongo mongosh -u "mongoadmin" -p "secret"

.PHONY: create
create: up migrate ## create a local env from nothing


# https://www.freecodecamp.org/news/self-documenting-makefile/
.PHONY: help
help: ## Show this.
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-24s\033[0m %s\n", $$1, $$2}'
