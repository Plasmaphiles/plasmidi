.DEFAULT_GOAL = help

.PHONY: sh
sh: ## Get a terminal with Bash.
	docker-compose exec plasmidi-server bash


.PHONY: logs
logs: ## Tail the logs, locally.
	docker-compose logs -f

.PHONY: dev
dev: ## Spin up a dev suite of containers.
	docker-compose up -d


# https://www.freecodecamp.org/news/self-documenting-makefile/
.PHONY: help
help: ## Show this.
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-24s\033[0m %s\n", $$1, $$2}'
