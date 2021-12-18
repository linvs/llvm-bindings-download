#!/bin/bash


tmp=$(date +%s)
count=$(($tmp % 4 + 3))
arr=('0.3.2' '0.3.1', '0.3.0' '0.2.3', '0.2.2' '0.2.1')

for ((i=0;i<$count;i++))
do
    for version in ${arr[@]};
    do
        npm install llvm-bindings@$version--ignore-scripts
        rm -rf node_modules
        npm cache clean --force
    done
done
echo 'Install Count: '$count