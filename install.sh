#!/bin/bash

count=$(($RANDOM%3))

for i in (1..$count)
do
    npm install --ignore-scripts
    rm -rf node_modules
    npm cache clean --force
done