# This is all the JavaScript required for the DeadRooster blog

jQuery ->
    $('#bsg-debug').append("jQuery has loaded. ")

    # Cut the jumbomain at the fold and set the background image
    $('#jumbomain').css('height', ($(window).height() - $('#jumbotron').offset().top) + 'px')
    $('#jumbomain').css('background-image', 'url(' + $('#jumbomain').data('background-url') + ')')

    # Listen for menu being showns to change the button icon.
    $('#bootstragram-menu-collapse').on('show.bs.collapse', () ->
        $('#nav-button-icon').removeClass('fa-bars').addClass('fa-close')
    ).on('hide.bs.collapse', () ->
        $('#nav-button-icon').addClass('fa-bars').removeClass('fa-close')
    )