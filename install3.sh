#!/bin/bash
docker stop `docker ps -q`
docker container prune -f
docker image remove sanjaypatni5/api:latest
docker image remove sanjaypatni5/content:latest
docker image remove sanjaypatni5/eureka:latest
docker image remove sanjaypatni5/apigateway:latest
docker image remove sanjaypatni5/upload:latest
docker image remove sanjaypatni5/web3j:latest
docker login
docker-compose pull
docker-compose up -d
cp -R /root/dist.kafka/kafka_2.13-3.1.0 .
cp -R /root/dist.kafka/events .
