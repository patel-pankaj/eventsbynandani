// Activates slideshow on Home page 
$(window).on('load',function(){
    //Reset all sections
    $("section").hide();
    $(".home-section").show();
    
    //home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length
    function slideshow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideshow,2500)
    }
    slideshow()
})

$(document).ready(function(){
    $(".header .nav ul li a").click(function(){
        // Update active navigation item style on click
        $(".header .nav ul li a").removeClass("active");
        $(".header .nav ul li a").removeClass("glow");
        $(".header .nav ul li a").addClass("glow");
        $(this).addClass("active");

        // Update hamburger responsive navigation item style on click
        $(".header").removeAttr('style');
        $('#topnav').removeClass("responsiveNav");

        // Show/Hide only active section content
        $("section").hide();
        var sectionClass = $(this).attr("data");
        $("."+sectionClass).show();
    })    

    //Make navigation items responsive
    $(".header .hamburger").click(function(){
        $(".header").removeAttr('style');
        var topnav = $('#topnav');
        if(topnav.hasClass("responsiveNav")) {
            topnav.removeClass("responsiveNav");
        } else {
            $(".header").css("background-color", "black");
            topnav.addClass("responsiveNav");
        }
    })


    // When the user clicks on read more, open the modal 
    var readmodeTag; 
    $(".readmore").click(function(){
        readmodeTag = $(this);
        $(readmodeTag).text("");
        var modalText = $(readmodeTag).parent().text();
        $(".lovenotes-section, .header").fadeOut();
        $("#modal-text").text(modalText);
        $(".modal").show();
        
    })
    
    // When the user clicks on close, close the modal 
    $(".fa-times-circle").click(function(){
        $(readmodeTag).text("...read more");
        $(".modal").hide();
        $(".lovenotes-section, .header").fadeIn();
        $(readmodeTag).focus();
    })

    // When the user clicks anywhere outside of the modal, close the model
    $(window).click(function(e){
      if (e.target.id == "modal-div") {
        $(".modal").hide();
        $(readmodeTag).text("...read more");
        $(".lovenotes-section, .header").fadeIn();
        $(readmodeTag).focus();
      }
    })
})