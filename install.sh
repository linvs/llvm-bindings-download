#!/bin/bash


tmp=$(date +%s)
count=$(($tmp % 4 + 3))
for ((i=0;i<$count;i++))
do
    npm install --ignore-scripts
    npm install ms-design
    rm -rf node_modules
    npm cache clean --force
done
echo 'Install Count: '$count