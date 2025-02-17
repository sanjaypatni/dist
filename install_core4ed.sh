#!/bin/bash
docker stop `docker ps -q`
docker container prune -f
docker image remove sanjaypatni5/api:latest
docker image remove sanjaypatni5/content:latest
docker image remove sanjaypatni5/eureka:latest
docker image remove sanjaypatni5/apigateway:latest
docker image remove sanjaypatni5/upload:latest
docker image remove sanjaypatni5/playclips-api:latest
docker login
docker-compose up -d
