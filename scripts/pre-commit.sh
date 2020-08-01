# { git diff --name-only ; git diff --name-only --staged ; } | grep '.ts$' \
# && npm test || echo 'Tests skipped'

if [[ $(git diff --name-only --staged) ]]; then
    git diff --name-only --staged | grep '.ts$' &&
        npm test ||
        echo 'Tests skipped. No changed ts files in staged'
else
    git diff --name-only | grep '.ts$' &&
        npm test ||
        echo 'Tests skipped. No changed ts files'
fi
