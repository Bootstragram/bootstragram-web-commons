---
#
---

jQuery ->

  class Bootstragram.Animal
    constructor: (@name) ->
      return

    move: (meters) ->
      alert @name + " moved #{meters}m."

  class Bootstragram.Snake extends Bootstragram.Animal
    move: ->
      alert "Slithering..."
      super 5

  class Bootstragram.Horse extends Bootstragram.Animal
    move: ->
      alert "Galloping..."
      super 45
