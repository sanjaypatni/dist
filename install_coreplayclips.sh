#!/bin/bash
apt update
(sleep 10; echo Y) | apt install openjdk-11-jre-headless
(sleep 10; echo Y) | apt install docker
(sleep 10; echo Y) | apt install docker-compose
(sleepp 10; echo Y) | apt install apache2
a2enmod proxy && sudo a2enmod proxy_http && sudo service apache2 restart
(sleep 10; echo Y) | apt install python3-certbot-apache
#certbot --apache -d coreplayclips.com
apt install git-lfs
cd /root/dist
git lfs fetch --all
git lfs pull
docker stop `docker ps -q`
docker container prune -f
docker image remove sanjaypatni5/api:latest
docker image remove sanjaypatni5/content:latest
docker image remove sanjaypatni5/eureka:latest
docker image remove sanjaypatni5/apigateway:latest
docker image remove sanjaypatni5/upload:latest
docker image remove sanjaypatni5/web3j:latest
docker image remove sanjaypatni5/message:latest
(sleep 5; echo sanjaypatni5; sleep 5; echo Apple6490) | docker login
docker-compose pull
cp ./kafka.sh  /root/dist/kafka_2.13-3.1.0
cd /var/lib/docker/volumes
mv dist_mysql-volume dist_mysql-volume.bak
cd /var/lib/docker/volumes
tar xvf /root/dist/dist_mysql-volume.tar
cd /root/dist
docker-compose up -d
