jQuery ->
    $.bootstragram = $.bootstragram || {}

    $.bootstragram.canvasBlender = (canvasID, plainImageURL, multipliedImageURL, options = {}) ->
        # Mandatory Args
        this.canvasID = canvasID
        this.plainImageURL = plainImageURL
        this.multipliedImageURL = multipliedImageURL
        
        # Options
        this.blendMode = options.blendMode || "multiply"
        this.verbose = options.verbose || false

        # Computed stuff
        this.plainImage = "caca"
        this.multipliedImage = null
        this.canvas = document.getElementById(canvasID)
        this.context = this.canvas.getContext("2d")
        
        this
        
    # Preload images and call the callback when they are loaded
    $.bootstragram.canvasBlender.prototype.loadImages = (callback) ->
        console.debug "Downloading " + this.plainImageURL if this.verbose
        blender = this

        this.plainImage = new Image()
        this.plainImage.onload = () ->
            console.debug "Downloading " + blender.multipliedImageURL if blender.verbose
            blender.multipliedImage = new Image()
            blender.multipliedImage.onload = () ->
                callback()
            blender.multipliedImage.src = blender.multipliedImageURL
        this.plainImage.src = this.plainImageURL
                
    # Draw with the given alpha value
    $.bootstragram.canvasBlender.prototype.draw = (alphaValue) ->
        if (this.verbose)
            if (alphaValue < 0 || alphaValue > 1)
                console.warn "[canvasBlender] alphaValue should be between 0 and 1"

        context = this.context
        canvas = this.canvas
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.globalAlpha = 1.0;
        context.globalCompositeOperation = "source-over" # This is the default
        context.drawImage(this.plainImage, 0, 0, canvas.width, canvas.height)
        context.globalAlpha = alphaValue
        context.globalCompositeOperation = this.blendMode
        context.drawImage(this.multipliedImage, 0, 0, canvas.width, canvas.height)
