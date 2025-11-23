$(window).load(function () {
  var in_view = new Waypoint.Inview({
    element: $("#coffee")[0],
    enter: function () {
      $("#coffee_fade").addClass("start");
    },
    exit: function () {
      // optionally
      $("#coffee").removeClass("start");
    },
  });
});
