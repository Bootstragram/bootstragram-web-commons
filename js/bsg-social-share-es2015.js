(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'bsg-get-script'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('bsg-get-script'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.bsgGetScript);
    global.bsgSocialShare = mod.exports;
  }
})(this, function (exports, _bsgGetScript) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.includeTwitter = exports.includeFacebook = undefined;

  var _bsgGetScript2 = _interopRequireDefault(_bsgGetScript);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // Not sure why this wasn't working but we can use $ globally
  // To fix when we switch 100% ES2015.
  //import jquery from 'jquery.min';

  // Private function that activates click on elements from the given selector.
  var activateFacebook = function activateFacebook(selector, callback) {
    $(document).on('click', selector, function (e) {
      var shareOptions = {
        method: 'share',
        href: $(this).data('link')
      };

      FB.ui(shareOptions, function (fbShareResponse) {
        if (fbShareResponse !== undefined && fbShareResponse.error_code === undefined) {
          // The user DID share
          if (typeof callback !== "undefined" && callback !== null) {
            callback(true);
          }
        } else {
          // The user DID NOT share, probably cancelled
          if (typeof callback !== "undefined" && callback !== null) {
            callback(false);
          }
        }
      });
    });
  };

  /**
   * @function includeFacebook
   * @param {String} appID your Facebook Application ID
   * @param {Function} callback callback
   * @param {String} [selector='#share-facebook'] the selector for the triggering elements.
   */
  /**
   * Functional equivalent to Bootstragram.SocialShare, but written as a ES2015 module.
   *
   * Generated via a `grunt babel` command.
   *
   * ## Typical Implementation
   *
   *     <script src="js/bsg-get-script.js"></script>
   *     <script src="js/bsg-social-share-es2015.js"></script>
   *     <script>
   *     bsgSocialShare.includeFacebook('1583382705225548', function(hasShared) {
   *       console.debug('Share result: ', hasShared);
   *     });
   *     bsgSocialShare.includeTwitter(function() {
   *       console.debug('Twitter script callbacked.');
   *     });
   *     </script>
   *
   * @namespace bsgSocialShare
   */

  var includeFacebook = function includeFacebook(appID, callback) {
    var selector = arguments.length <= 2 || arguments[2] === undefined ? '#share-facebook' : arguments[2];

    (0, _bsgGetScript2.default)("//connect.facebook.net/en_US/sdk.js", function () {
      var facebookInitOpts = {
        appId: appID,
        version: 'v2.7',
        xfbml: false
      };

      FB.init(facebookInitOpts);
      activateFacebook(selector, callback);
    });
  };

  /**
   * @function includeTwitter
   * @param {Function} callback callback
   */
  var includeTwitter = function includeTwitter(callback) {
    (0, _bsgGetScript2.default)('//platform.twitter.com/widgets.js', function () {
      if (typeof callback !== "undefined" && callback !== null) {
        callback();
      }
    });
  };

  exports.includeFacebook = includeFacebook;
  exports.includeTwitter = includeTwitter;
});
