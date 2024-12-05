FROM openjdk:11
MAINTAINER Sanjay Patni <sanjaypatni@yahoo.com>
ADD target/event-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 5014
EXPOSE 9092
EXPOSE 2181
ENTRYPOINT ["java", "-jar", "/app.jar"]
