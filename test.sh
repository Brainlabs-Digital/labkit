#!/bin/bash

set -o errexit
set -o nounset

docker-compose run --workdir /app --rm ui ./node_modules/.bin/eslint --ext .vue --ext .js documentation/ lib/ components/
