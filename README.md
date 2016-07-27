## About

This is Bootstragram's Bower package to bootstrap all our web projects.

## Installation

    npm install
    bower install

## Development

To release a version:

1. Use the typical git flow stuff
1. Bump versions numbers in `bower.json`, `package.json`, `bsg-umd-root.js` and `index.html`.
1. `jekyll build --config _config.yml,_config_bower.yml`
1. `grunt bower`
1. Publish the bower package

Don't use the followings as they create a tag that are conflicting. Git Flow is a better solution

    npm version X.Y.Z
    bower version X.Y.Z

## How-to

### Generate the documentation

    rake bootstragram:jsdoc
