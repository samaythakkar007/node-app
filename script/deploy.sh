#!/bin/sh
ssh ec2-user@ec2-54-200-109-100.us-west-2.compute.amazonaws.com <<EOF
 cd ~/node-app
 git pull
 npm install — production
 pm2 restart all
 exit
EOF