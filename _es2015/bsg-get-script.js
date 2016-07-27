/**
 * Equivalent to $.getScript without jQuery dependency, as described
 * [here](http://stackoverflow.com/questions/16839698/jquery-getscript-alternative-in-native-javascript).
 * @namespace bsgGetScript
 */

/**
 * @function getScript
 * @param {string} source Relative URL of the script's source.
 * @param {function} callback Callback that will be called after the script is loaded.
 */
let getScript = function(source, callback) {
  var script = document.createElement('script');
  var prior = document.getElementsByTagName('script')[0];
  script.async = 1;
  prior.parentNode.insertBefore(script, prior);

  script.onload = script.onreadystatechange = function( _, isAbort ) {
    if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
      script.onload = script.onreadystatechange = null;
      script = undefined;

      if(!isAbort) { if(callback) callback(); }
    }
  };

  script.src = source;
}

export default getScript;
