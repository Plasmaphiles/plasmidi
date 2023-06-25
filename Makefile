.DEFAULT_GOAL = help

.PHONY: sh
sh: ## Get a terminal with Bash.
	docker-compose exec server bash

.PHONY: logs
logs: ## Tail the server logs, locally.
	docker logs plasmidi-server -f

.PHONY: migrate
migrate: ## run migration script for appwrite
	docker compose exec server npm run migrate
	docker compose exec server npm run migrate
	docker compose exec server npm run migrate

.PHONY: up
up:  ## Spin up a dev suite of containers.
	docker-compose --profile all up -d

.PHONY: down
down:  ## stop running docker containers.
	docker compose --profile all down

.PHONY: appwrite
appwrite: ## starts the appwrite containers. useful for getting started
	docker compose --profile appwrite-only up -d

.PHONY: restart
restart: ## restarts the server
	docker compose --profile plasmidi-server down
	docker compose --profile plasmidi-server up -d

# https://www.freecodecamp.org/news/self-documenting-makefile/
.PHONY: help
help: ## Show this.
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-24s\033[0m %s\n", $$1, $$2}'
