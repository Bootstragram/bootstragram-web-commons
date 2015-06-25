#
#   ( (
#    ) )
#  ........
#  |      |]
#  \      /    BOOTSTRAGRAM
#   `----'
#
# This is all the JavaScript required for the Bootstragram Web Commons project.
# Written in CoffeeScript...
#

jQuery ->
    # Init plugin shit
    $.bootstragram = $.bootstragram || {}
    $.bootstragram.webcommons = $.bootstragram.webcomons || {} 

    $.bootstragram.webcommons.resizeJumbotron = () ->
        if $('#jumbotron').length == 0
            return
            
        # Variables
        jumboCollapsingMinWidth = 768
        jumboMinHeight = 680

        # Load the background image
        $('#jumbomain').css('background-image', 'url(' + $('#jumbomain').data('background-url') + ')')

        # Cut the jumbomain at the fold and center the jumbohead
        visibleHeightOfJumbotron = $(window).height() - $('#jumbotron').offset().top
        jumboHeight = if ($(window).width() > jumboCollapsingMinWidth) then Math.max(visibleHeightOfJumbotron, jumboMinHeight) else jumboMinHeight
        jumboHeadHeight = $('#jumbohead').height()
        jumboImageHeight = $('#jumbo-image').height()
        
        if jumboHeadHeight < jumboHeight
            $('#jumbomain').css('height', jumboHeight + 'px')
            if $(window).width() > jumboCollapsingMinWidth
                # Vertical middle of the jumbohead
                $('#jumbohead').css('margin-top', ((jumboHeight - jumboHeadHeight) / 2) + 'px')
                if jumboImageHeight < jumboHeight
                    $('#jumbo-image').css('margin-top', ((jumboHeight - jumboImageHeight) / 2) + 'px')
                else
                    $('#jumbo-image').css('margin-top', '0px')
            else
                # Stick to the top
                $('#jumbohead').css('margin-top', '1em')
                $('#jumbo-image').css('margin-top', '0px')
        else
            console.error "ERROR: jumbotron's title div is bigger than the jumbotron itself"

    $.bootstragram.webcommons.initNavbar = () ->
        if $('#bootstragram-menu-collapse').length == 0
            return

        # Listen for menu being showns to change the button icon.
        $('#bootstragram-menu-collapse').on('show.bs.collapse', () ->
            $('#nav-button-icon').removeClass('fa-bars').addClass('fa-close')
        ).on('hide.bs.collapse', () ->
            $('#nav-button-icon').addClass('fa-bars').removeClass('fa-close')
        )
    
    $.bootstragram.webcommons.initButtons = () ->
        # Activate buttons with data-href attribute
        $('button[data-href]').click(() ->
            window.location.href = $(this).data('href')
        )
        
    $.bootstragram.webcommons.resizeJumbotron()
    $.bootstragram.webcommons.initNavbar() 
    $.bootstragram.webcommons.initButtons()
    
    $(window).resize () ->
        $.bootstragram.webcommons.resizeJumbotron()
