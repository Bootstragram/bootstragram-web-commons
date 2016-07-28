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

import getScript from 'bsg-get-script';

// Not sure why this wasn't working but we can use $ globally
// To fix when we switch 100% ES2015.
//import jquery from 'jquery.min';

// Private function that activates click on elements from the given selector.
let activateFacebook = function(selector, callback) {
  $(document).on('click', selector, function(e) {
    let shareOptions = {
      method: 'share',
      href: $(this).data('link')
    };

    FB.ui(shareOptions, function(fbShareResponse) {
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
}

/**
 * @function includeFacebook
 * @param {String} appID your Facebook Application ID
 * @param {Function} callback callback
 * @param {String} [selector='#share-facebook'] the selector for the triggering elements.
 */
let includeFacebook = function(appID, callback, selector = '#share-facebook') {
  getScript("//connect.facebook.net/en_US/sdk.js", function() {
    let facebookInitOpts = {
      appId: appID,
      version: 'v2.7',
      xfbml: false
    };

    FB.init(facebookInitOpts);
    activateFacebook(selector, callback);
  });
}


/**
 * @function includeTwitter
 * @param {Function} callback callback
 */
let includeTwitter = function(callback) {
  getScript('//platform.twitter.com/widgets.js', function() {
    if (typeof callback !== "undefined" && callback !== null) {
      callback();
    }
  });
}

export { includeFacebook, includeTwitter };
