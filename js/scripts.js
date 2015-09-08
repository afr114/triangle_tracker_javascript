var isTriangle = function(sideA, sideB, sideC) {
  var sides = [sideA, sideB, sideC];
  var sortedSides = sides.sort(function(a,b) {return a-b})
  if (sortedSides[0] + sortedSides[1] > sortedSides[2]) {
    return true
  } else {
    return false
  };

};

var triangleTracker = function(sideA, sideB, sideC) {
  if (isTriangle(sideA, sideB, sideC) === false) {
    return "That is not a triangle."
  } else if ((sideA === sideB) && (sideB === sideC)) {
    return "That is an equilateral triangle."
  } else if ((sideA === sideB) || (sideB === sideC) || (sideA === sideC)) {
    return "That is an isoceles triangle."
  } else {
    return "That is a scalene triangle."
  };
};

$(document).ready(function() {
  $("form#triangles").submit(function(event){

    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var result = triangleTracker(sideA, sideB, sideC);

    $(".triangle-result").text(result);

    $("#result").show();
    event.preventDefault();

  });
});
