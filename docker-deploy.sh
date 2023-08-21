#!/bin/bash
APP_VERSION="0.0.1"
DOCKER_API="seng-nest-api"

nx build mobile-web-api

cp package.json docker/dilagro-api/

tar -cJf docker/mobile-web-api/build.tar.xz -C dist/apps/mobile-web-api .

cd docker/mobile-web-api

docker build -f Dockerfile -t $DOCKER_API:$APP_VERSION .