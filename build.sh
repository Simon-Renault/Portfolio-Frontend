#!/bin/bash


RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;35m'
NC='\033[0m' # No Color





echo -e "${BLUE} New build processing ..."
git status
yarn run build
git add .
git commit -m "new build"
git push
echo -e "${GREEN} new build live on git"



