#!/bin/sh

REPO_DIR="~/tayrin"
REPO_URL="git@github.com:gaskar/tayrin.git"

if [ -d "$REPO_DIR" ]; then
  rm -rf "$REPO_DIR"
fi

git clone "$REPO_URL" "$REPO_DIR"

cd "$REPO_DIR"

docker-compose up -d --build