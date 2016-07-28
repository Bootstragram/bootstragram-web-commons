---
layout: demo
---

# Social Sharing Demo

Cf. [documentation][SocialShareDoc].

Cf. [ES2015 alternative](demo-social-sharing-es2015.html).

## Facebook

<a class="btn btn-default" id="share-facebook" data-link="http://webcommons.bootstragram.com">
  Share on Facebook
</a>

## Twitter

<a class="btn btn-default" id="share-twitter" href="https://twitter.com/intent/tweet?url=http://webcommons.bootstragram.com&text=SuperPowers&via=Bootstragram">
  Share on Twitter
</a>


<script src="vendor/js/min/jquery.min.js"></script>
<script src="vendor/js/min/bootstrap.min.js"></script>
<script src="js/bsg-umd-root.js"></script>
<script src="js/bsg-social-share.js"></script>
<script>
console.info('🍻 Demo Social Sharing');

var socialShare = new Bootstragram.SocialShare();

socialShare.includeFacebook('1583382705225548', function() {
  console.debug('Facebook script callbacked.');
  socialShare.activateFacebook('#share-facebook', function(hasShared) {
      console.debug('Share result: ', hasShared);
    });
});

socialShare.includeTwitter(function() {
  console.debug('Twitter script callbacked.');
});

</script>


[SocialShareDoc]: http://webcommons.bootstragram.com/jsdoc/Bootstragram.SocialShare.html
