#!/bin/bash
docker stop `docker ps -q`
docker container prune -f
docker image remove sanjaypatni5/api:latest
docker image remove sanjaypatni5/playclips-api:latest
docker image remove sanjaypatni5/content:latest
docker image remove sanjaypatni5/eureka:latest
docker image remove sanjaypatni5/apigateway:latest
docker image remove sanjaypatni5/upload:latest
(sleep 5; echo sanjaypatni5; sleep 5; echo Apple6490) | docker login
docker-compose up -d
cp ./kafka.sh  /root/dist/kafka_2.13-3.1.0
