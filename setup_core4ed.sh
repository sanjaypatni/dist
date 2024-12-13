#!/bin/bash
apt update
(sleep 10; echo Y) | apt install openjdk-11-jre-headless
(sleep 10; echo Y) | apt install docker
(sleep 10; echo Y) | apt install docker-compose
(sleep 10; echo Y) | apt install apache2
cp /root/dist/apache2_core4ed.conf /etc/apache2/apache2.conf
a2enmod proxy && sudo a2enmod proxy_http && sudo service apache2 restart
(sleep 10; echo Y) | apt install python3-certbot-apache
(sleep 5; echo sanjaypatni@yahoo.com; sleep 5; echo A; sleep 5; echo Y; sleep 5; echo 2 ) | certbot --apache -d coreplayclips.com
apt install git-lfs
cd /root/dist
git lfs fetch --all
git lfs pull
cd /var/lib/docker/volumes;mv dist_mysql-volume dist_mysql-volume.bak
cd /var/lib/docker/volumes;tar xvf /root/dist/dist_mysql-volume.tar
