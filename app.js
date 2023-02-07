// if(!empty($_POST['data_type']))
// {
  
// }


console.log(URL);
function display_image(file)
{
   var img = document.querySelector(".js-image");
  img.src =URL.createObjectURL(file);
}



// change navbar color
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>150) {
      $(".navbar").css("background", "#222");
      $(".navbar").css("box-shadow", "rgba(111, 112, 115, 0.001) 0px 4px 16px");
    }
    else {
      $(".navbar").css("background","transparent");
      $(".navbar").css("box-shadow", "none");
    }
  })
});

// smooth scroll
var navbarHeight = $(".navbar").outerHeight();
$(".navbar-nav-item a").click(function(e){
  var targetHref = $(this).attr("href");
  $("html,body").animate({
    screenTop: $(targetHref).offset().top - navbarHeight
  }, 1000)
  e.preventDefault();
});

// navbar mobile version

