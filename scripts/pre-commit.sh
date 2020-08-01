if [[ $(git diff --name-only --staged) ]]; then
    git diff --name-only --staged | grep '.ts$' && npm test
else
    git diff --name-only | grep '.ts$' && npm test
fi
