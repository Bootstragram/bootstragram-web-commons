---
layout: default
---

# Social Sharing Demo

`bsg-social-share.js` requires `bsg-umd-root.min.js` and `jquery`.

## Facebook

<button class="btn btn-default" id="share-facebook" data-link="http://bootstragram-web-commons.dev/demo-social-sharing.html">
  Share on Facebook
</button>

## Twitter

The markup for Twitter requires a `a` element.

<a class="btn btn-default" id="share-twitter" href="https://twitter.com/intent/tweet?url=https://bootstragram.com&text=Coucou&via=Bootstragram">
  Share on Twitter
</a>


<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/bsg-umd-root.js"></script>
<script src="js/bsg-social-share.js"></script>
<script>
console.info('🍻 Demo Social Sharing');

var socialShare = new Bootstragram.SocialShare();

socialShare.includeFacebook('1583382705225548', function() {
  console.debug('Facebook script callbacked.');
  socialShare.activateFacebook();
});

socialShare.includeTwitter(function() {
  console.debug('Twitter script callbacked.');
});

</script>
