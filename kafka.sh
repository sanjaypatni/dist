#!/bin/bash
nohup java -jar /root/dist/events/target/event-0.0.1-SNAPSHOT.jar   2>> /tmp/output.txt &
sleep 10
nohup ./bin/zookeeper-server-start.sh -daemon ./config/zookeeper.properties 2>> /tmp/output.txt
sleep 10
nohup ./bin/kafka-server-start.sh -daemon ./config/server.properties 2>> /tmp/output.txt
sleep 10
./bin/kafka-topics.sh --create --topic playclips --bootstrap-server localhost:9092 2>> /tmp/output.txt
sleep 10
exit 0
