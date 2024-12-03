#!/bin/bash
nohup java -jar /root/dist/events/target/event-0.0.1-SNAPSHOT.jar   >> nohup.out 2>> nohup.err < /dev/null  &
sleep 10
nohup ./bin/zookeeper-server-start.sh -daemon ./config/zookeeper.properties >>  nohup.out 2>> nohup.err < /dev/null  &
sleep 10
nohup ./bin/kafka-server-start.sh -daemon ./config/server.properties >> nohup.out 2>> nohup.err < /dev/null  & 
sleep 10
nohup ./bin/kafka-topics.sh --create --topic playclips --bootstrap-server localhost:9092 >>  nohup.out 2>> nohup.err < /dev/null  &
sleep 10
exit 0
