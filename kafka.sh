#!/bin/bash
java -jar /root/dist/events/target/event-0.0.1-SNAPSHOT.jar &
./bin/zookeeper-server-start.sh -daemon ./config/zookeeper.properties
sleep 15
./bin/kafka-server-start.sh -daemon ./config/server.properties
sleep 15
./bin/kafka-topics.sh --create --topic playclips --bootstrap-server localhost:9092
