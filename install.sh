#!/bin/bash

count=$(($RANDOM%4))
for ((i=0;i<$count;i++))
do
    npm install --ignore-scripts
    rm -rf node_modules
    npm cache clean --force
done