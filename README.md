## About

This is Bootstragram's Bower package to bootstrap all our web projects.

## Installation

    npm install
    bower install

## Development

To release a version:

1. Use the typical git flow stuff
1. Bump versions numbers in `bower.json`, `package.json` and `bsg-umd-root.js`
1. `jekyll build --config _config.yml,_config_prod.yml`
1. Publish the bower package

Don't use the followings as they create a tag that are conflicting. Git Flow is a better solution

    npm version X.Y.Z
    bower version X.Y.Z

## How-to

### Generate the documentation

    jsdoc -c jsdoc.json -t ./node_modules/ink-docstrap/template -R jsdoc-README.md -r ~/Developer/build/bootstragram-web-commons-gh-pages/
