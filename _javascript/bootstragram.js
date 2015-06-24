(function() {
  jQuery(function() {
    var initButtons, initNavbar, resizeJumbotron;
    resizeJumbotron = function() {
      var jumboCollapsingMinWidth, jumboHeadHeight, jumboHeight, jumboImageHeight, jumboMinHeight, visibleHeightOfJumbotron;
      if ('#jumbotron'.length === 0) {
        return;
      }
      jumboCollapsingMinWidth = 768;
      jumboMinHeight = 680;
      $('#jumbomain').css('background-image', 'url(' + $('#jumbomain').data('background-url') + ')');
      visibleHeightOfJumbotron = $(window).height() - $('#jumbotron').offset().top;
      jumboHeight = Math.max(visibleHeightOfJumbotron, jumboMinHeight);
      jumboHeadHeight = $('#jumbohead').height();
      jumboImageHeight = $('#jumbo-image').height();
      if (jumboHeadHeight < jumboHeight) {
        $('#jumbomain').css('height', jumboHeight + 'px');
        if ($(window).width() > jumboCollapsingMinWidth) {
          $('#jumbohead').css('margin-top', ((jumboHeight - jumboHeadHeight) / 2) + 'px');
          if (jumboImageHeight < jumboHeight) {
            return $('#jumbo-image').css('margin-top', ((jumboHeight - jumboImageHeight) / 2) + 'px');
          } else {
            return $('#jumbo-image').css('margin-top', '0px');
          }
        } else {
          $('#jumbohead').css('margin-top', '1em');
          return $('#jumbo-image').css('margin-top', '0px');
        }
      } else {
        return console.error("ERROR: jumbotron's title div is bigger than the jumbotron itself");
      }
    };
    initNavbar = function() {
      if ($('#bootstragram-menu-collapse').length === 0) {
        return;
      }
      return $('#bootstragram-menu-collapse').on('show.bs.collapse', function() {
        return $('#nav-button-icon').removeClass('fa-bars').addClass('fa-close');
      }).on('hide.bs.collapse', function() {
        return $('#nav-button-icon').addClass('fa-bars').removeClass('fa-close');
      });
    };
    initButtons = function() {
      return $('button[data-href]').click(function() {
        return window.location.href = $(this).data('href');
      });
    };
    resizeJumbotron();
    initNavbar();
    initButtons();
    return $(window).resize(function() {
      return resizeJumbotron();
    });
  });

}).call(this);
