$(document).ready(function() {


  //Show full-about and hide short-about
  $("#read-more").click(function() {
    $(".short-about").addClass("hide");
    $(".full-about").removeClass("hide");
  });

  //Hide full-about and Show short-about
  $("#read-less").click(function() {
    $(".short-about").removeClass("hide");
    $(".full-about").addClass("hide");
  });

  //Hide and show projects depending on their types.
  $(".building-type").click(function() {
    var buildingTypeID = $(this).attr("id");
    $(".type").fadeOut();

    if (buildingTypeID == "all") {
      $(".type-comercial").delay(400).fadeIn();
      $(".type-institutional").delay(400).fadeIn();
      $(".type-interior").delay(400).fadeIn();
      $(".type-culture").delay(400).fadeIn();
      $(".type-residential").delay(400).fadeIn();
      $(".type-housing").delay(400).fadeIn();
      $(".type-office").delay(400).fadeIn();
    } else {
      $(".type-" + buildingTypeID).delay(400).fadeIn();
    }
  });

  $('#emailLink').click(function() {
    var subject = $("#subject").val();
    var emailBody = $("#body").val();
    window.location = 'mailto:schizzo.design.architecture@gmail.com' +
      '?subject=' + subject + '&body=' + emailBody;
  });
});
