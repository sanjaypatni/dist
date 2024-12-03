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
cd /root/dist
cp -R /root/dist.kafka/kafka_2.13-3.1.0 .
cp -R /root/dist.kafka/events .
nohup ./kafka_2.13-3.1.0/bin/zookeeper-server-start.sh -daemon ./kafka_2.13-3.1.0/config/zookeeper.properties
sleep 15
nohup ./kafka_2.13-3.1.0/bin/kafka-server-start.sh -daemon ./kafka_2.13-3.1.0/config/server.properties
sleep 15
./kafka_2.13-3.1.0/bin/kafka-topics.sh --create --topic playclips --bootstrap-server localhost:9092
sleep 15
nohup java -jar /root/dist/events/target/event-0.0.1-SNAPSHOT.jar
