#!/bin/sh

if [[ $(git diff --name-only --staged) ]]; then
    if [[ $(git diff --name-only --staged | grep '.ts$') ]]; then
        npm run lint
    fi
else
    if [[ $(git diff --name-only | grep '.ts$') ]]; then
        npm run lint
    fi
fi
