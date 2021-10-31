#!/bin/bash

$count=$(($RANDOM%5+1))

for i in (1..$count)
do
    npm install --ignore-scripts
    rm -rf node_modules
    npm cache clean --force
done