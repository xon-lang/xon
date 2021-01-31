#!/bin/sh

if [[ $(git diff --name-only --staged) ]]; then
    if [[ $(git diff --name-only --staged | grep '.ts$') ]]; then
        npm test
    fi
else
    if [[ $(git diff --name-only | grep '.ts$') ]]; then
        npm test
    fi
fi
