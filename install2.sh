#!/bin/bash
docker stop `docker ps -q`
docker container prune -f
docker image remove sanjaypatni5/api:latest
docker image remove sanjaypatni5/content:latest
docker run -d sanjaypatni5/api:latest
docker run -d sanjaypatni5/content:latest
