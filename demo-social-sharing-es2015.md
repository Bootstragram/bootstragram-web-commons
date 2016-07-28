---
layout: demo
---

# Social Sharing Demo

Cf. [documentation][SocialShareES2015Doc].

Cf. [CoffeeScript Bootstragram's UMD alternative](demo-social-sharing.html).

## Facebook

<a class="btn btn-default" id="share-facebook" data-link="http://webcommons.bootstragram.com">
  Share on Facebook
</a>

## Twitter

The markup for Twitter requires a `a` element.

<a class="btn btn-default" id="share-twitter" href="https://twitter.com/intent/tweet?url=http://webcommons.bootstragram.com&text=SuperPowers&via=Bootstragram">
  Share on Twitter
</a>


<script src="vendor/js/min/jquery.min.js"></script>
<script src="vendor/js/min/bootstrap.min.js"></script>
<script src="js/bsg-get-script.js"></script>
<script src="js/bsg-social-share-es2015.js"></script>
<script>
console.info('🍻 Demo Social Sharing');

bsgSocialShare.includeFacebook('1583382705225548', function(hasShared) {
  console.debug('Share result: ', hasShared);
});

bsgSocialShare.includeTwitter(function() {
  console.debug('Twitter script callbacked.');
});

</script>


[SocialShareES2015Doc]: http://webcommons.bootstragram.com/jsdoc/bsgSocialShare.html
