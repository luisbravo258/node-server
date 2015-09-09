$(document).ready(function() {

  function getHtml(page) {
    $.get(page, function(html) {
      $('#content').empty();
      $('#content').append(html);
    });
  };

  $('.link-home').on("click", function() {
    getHtml("home.html");
  })

  $('.link-about').on("click", function() {
    getHtml("about.html")
  })

  $('.link-projects').on("click", function() {
    getHtml("projects2.html")
  })

  $('.link-ongoing').on("click", function() {
    getHtml("ongoing.html")
  })

  $('.link-contact').on("click", function() {
    getHtml("contact.html")
  })

  getHtml("home.html");



  /*
  document.onmousedown=disableclick;
    status="Right Click Disabled";
    function disableclick(event)
    {
      if(event.button==2)
       {
         alert(status);
         return false;
       }
    }

    */

  //This code stop carousel from running
  $('.carousel').each(function() {
    $(this).carousel({
      interval: false
    });
  });

});
