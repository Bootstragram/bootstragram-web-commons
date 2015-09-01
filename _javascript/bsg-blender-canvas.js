(function() {
  jQuery(function() {
    $.bootstragram = $.bootstragram || {};
    $.bootstragram.canvasBlender = function(canvasID, plainImageURL, multipliedImageURL, options) {
      if (options == null) {
        options = {};
      }
      this.canvasID = canvasID;
      this.plainImageURL = plainImageURL;
      this.multipliedImageURL = multipliedImageURL;
      this.blendMode = options.blendMode || "multiply";
      this.verbose = options.verbose || false;
      this.plainImage = "caca";
      this.multipliedImage = null;
      this.canvas = document.getElementById(canvasID);
      this.context = this.canvas.getContext("2d");
      return this;
    };
    $.bootstragram.canvasBlender.prototype.loadImages = function(callback) {
      var blender;
      if (this.verbose) {
        console.debug("Downloading " + this.plainImageURL);
      }
      blender = this;
      this.plainImage = new Image();
      this.plainImage.onload = function() {
        if (blender.verbose) {
          console.debug("Downloading " + blender.multipliedImageURL);
        }
        blender.multipliedImage = new Image();
        blender.multipliedImage.onload = function() {
          return callback();
        };
        return blender.multipliedImage.src = blender.multipliedImageURL;
      };
      return this.plainImage.src = this.plainImageURL;
    };
    return $.bootstragram.canvasBlender.prototype.draw = function(alphaValue) {
      var canvas, context;
      if (this.verbose) {
        if (alphaValue < 0 || alphaValue > 1) {
          console.warn("[canvasBlender] alphaValue should be between 0 and 1");
        }
      }
      context = this.context;
      canvas = this.canvas;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.globalAlpha = 1.0;
      context.globalCompositeOperation = "source-over";
      context.drawImage(this.plainImage, 0, 0, canvas.width, canvas.height);
      context.globalAlpha = alphaValue;
      context.globalCompositeOperation = this.blendMode;
      return context.drawImage(this.multipliedImage, 0, 0, canvas.width, canvas.height);
    };
  });

}).call(this);
