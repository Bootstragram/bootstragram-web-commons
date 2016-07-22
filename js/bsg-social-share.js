
/**
@class Bootstragram.SocialShare
@classdesc
* This class helps integrating social networks sharing features without having
* to manually include the Facebook and Twitter SDK scripts inside your HTML.
*
* ## Facebook
*
* Facebook integration works via a 2-step process. First, you include the SDK.
* Then, you indicate what elements of the DOM should trigger a Facebook share.
*
* Example:
*
*     var socialShare = new Bootstragram.SocialShare();
*     socialShare.includeFacebook('myFacebookAppID', function() {
*         socialShare.activateFacebook();
*     });
*
* ## Twitter
*
* Twitter integration is a single step process. You just have to include the SDK.
* The element triggering the share HAS to be a `<a>` element. A typical
* implemenation would be:
*
*     <a class="btn btn-default" id="share-twitter" href="https://twitter.com/intent/tweet?url=myURL&text=myText&via=myTwitter">
*         Share on Twitter
*     </a>
*     <script>
*         var socialShare = new Bootstragram.SocialShare();
*         socialShare.includeTwitter();
*     </script>
*
* Cf. the [Tweet Web Intent][tweet-web-intent] documentation for details on building
* the Twitter URL on the `href`.
*
* [tweet-web-intent]: https://dev.twitter.com/web/tweet-button/web-intent
 */

(function() {
  Bootstragram.SocialShare = (function() {
    function SocialShare() {}


    /**
    This callback does not accept arguments.
    @callback Bootstragram.SocialShare~includeSDKCallback
     */


    /**
    This is called after a share happened (Facebook support only).
    @callback Bootstragram.SocialShare~shareCallback
    @param {Boolean} didShare `true` if the user actually shared the content, `false` otherwise (cancellation for instance).
     */


    /**
    Loads the Facebook SDK and inits it with your application ID.
    Upon completion, an optional callback can be called.
    @function Bootstragram.SocialShare#includeFacebook
    @param {String} appID your Facebook Application ID
    @param {Bootstragram.SocialShare~includeSDKCallback} [callback] callback to be called once the SDK is loaded
     */

    SocialShare.prototype.includeFacebook = function(appID, callback) {
      return $.getScript('//connect.facebook.net/en_US/sdk.js', function() {
        var facebookInitOpts;
        facebookInitOpts = {
          appId: appID,
          version: 'v2.7',
          xfbml: false
        };
        FB.init(facebookInitOpts);
        if (callback != null) {
          return callback();
        }
      });
    };


    /**
    Activates DOM elements as triggers to share via the Facebook SDK.
    @function Bootstragram.SocialShare#activateFacebook
    @param {String} [selector='#share-facebook'] the selector for the triggering elements.
    @param {Bootstragram.SocialShare~shareCallback} [callback] callback
     */

    SocialShare.prototype.activateFacebook = function(selector, callback) {
      if (selector == null) {
        selector = '#share-facebook';
      }
      return $(document).on('click', selector, function(e) {
        var shareOptions;
        shareOptions = {
          method: 'share',
          href: $(this).data('link')
        };
        return FB.ui(shareOptions, function(fbShareResponse) {
          if (fbShareResponse && !fbShareResponse.error_code) {
            if (callback != null) {
              return callback(true);
            }
          } else {
            if (callback != null) {
              return callback(false);
            }
          }
        });
      });
    };


    /**
    Loads the Twitter SDK.
    Upon completion, an optional callback can be called.
    @function Bootstragram.SocialShare#includeTwitter
    @param {Bootstragram.SocialShare~includeSDKCallback} [callback] callback to be called once the SDK is loaded
     */

    SocialShare.prototype.includeTwitter = function(callback) {
      return $.getScript('//platform.twitter.com/widgets.js', function() {
        if (callback != null) {
          return callback();
        }
      });
    };

    return SocialShare;

  })();

}).call(this);
