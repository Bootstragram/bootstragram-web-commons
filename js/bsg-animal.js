(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  jQuery(function() {
    Bootstragram.Animal = (function() {
      function Animal(name) {
        this.name = name;
        return;
      }

      Animal.prototype.move = function(meters) {
        return alert(this.name + (" moved " + meters + "m."));
      };

      return Animal;

    })();
    Bootstragram.Snake = (function(superClass) {
      extend(Snake, superClass);

      function Snake() {
        return Snake.__super__.constructor.apply(this, arguments);
      }

      Snake.prototype.move = function() {
        alert("Slithering...");
        return Snake.__super__.move.call(this, 5);
      };

      return Snake;

    })(Bootstragram.Animal);
    return Bootstragram.Horse = (function(superClass) {
      extend(Horse, superClass);

      function Horse() {
        return Horse.__super__.constructor.apply(this, arguments);
      }

      Horse.prototype.move = function() {
        alert("Galloping...");
        return Horse.__super__.move.call(this, 45);
      };

      return Horse;

    })(Bootstragram.Animal);
  });

}).call(this);
