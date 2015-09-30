// Found from https://github.com/umdjs/umd/blob/master/returnExports.js
// Commit : 6e693154138b111e17b264e4e27f76e6116f1aba

(function (root, factory) {
  console.debug('Initializing stuff');
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    console.debug('Browser shit');
    root.Bootstragram = factory();
  }
}(this, function () {
  "use strict";
  var Bootstragram = {};

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return Bootstragram;
}));