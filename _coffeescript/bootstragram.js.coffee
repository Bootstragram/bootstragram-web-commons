# This is all the JavaScript required for the Bootstragram Web Commons project.

jQuery ->
    #$('#bsg-debug').append("jQuery has loaded. ")

    # Variables
    jumboCollapsingMinWidth = 768

    # Load the background image
    $('#jumbomain').css('background-image', 'url(' + $('#jumbomain').data('background-url') + ')')

    # Cut the jumbomain at the fold and center the jumbohead
    jumboHeight = Math.max($(window).height() - $('#jumbotron').offset().top, 680)
    jumboHeadHeight = $('#jumbohead').height()
    jumboImageHeight = $('#jumbo-image').height()
    if jumboHeadHeight < jumboHeight
        $('#jumbomain').css('height', jumboHeight + 'px')
        if $(window).width() > jumboCollapsingMinWidth
            $('#jumbohead').css('margin-top', ((jumboHeight - jumboHeadHeight) / 2) + 'px')
            if jumboImageHeight < jumboHeight
                $('#jumbo-image').css('margin-top', ((jumboHeight - jumboImageHeight) / 2) + 'px')

    # Listen for menu being showns to change the button icon.
    $('#bootstragram-menu-collapse').on('show.bs.collapse', () ->
        $('#nav-button-icon').removeClass('fa-bars').addClass('fa-close')
    ).on('hide.bs.collapse', () ->
        $('#nav-button-icon').addClass('fa-bars').removeClass('fa-close')
    )
    
    # Activate buttons with data-href attribute
    $('button[data-href]').click(() ->
        window.location.href = $(this).data('href')
    )
    