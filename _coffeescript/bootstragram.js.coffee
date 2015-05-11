# This is all the JavaScript required for the DeadRooster blog

jQuery ->
    $('#bsg-debug').append("jQuery has loaded. ")

    # Cut the jumbomain at the fold and set the background image
    $('#jumbomain').css('height', ($(window).height() - $('#jumbotron').offset().top) + 'px')
    $('#jumbomain').css('background-image', 'url(' + $('#jumbomain').data('background-url') + ')')
        