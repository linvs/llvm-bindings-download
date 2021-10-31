#!/bin/bash

for i in (1..10)
do
    npm install --ignore-scripts
    rm -rf node_modules
    npm cache clean --force
done