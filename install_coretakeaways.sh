#!/bin/bash
docker stop `docker ps -q`
docker container prune -f
docker image remove sanjaypatni5/playclips:latest
docker run -d sanjaypatni5/playclips:latest
