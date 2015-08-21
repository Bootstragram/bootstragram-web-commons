# Bootstragram Web Commons

## About

This is Bootstragram's Bower package to bootstrap all our web projects.

## Installation

    npm install
    bower install

## Development

To release a version:

1. Use the typical git flow stuff
2. Bump versions numbers in `bower.json` and `package.json`
3. Publish the bower package

Don't use the followings as they create a tag that are conflicting. Git Flow is a better solution

    npm version X.Y.Z
    bower version X.Y.Z
