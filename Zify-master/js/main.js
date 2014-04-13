$(document).ready(function(){

/*---------  Backstrecth On-Block Backgrounds-------*/

$(".main-section").backstretch("images/main-bg.png");
$(".testimonials").backstretch("images/main-bg.png");


/*---------  Jquery Slider W/Anchor Builder -------*/

$(function() {

    $('.slider').cycle({
       fx:     'fade',
       speed:   600,
       timeout: 9000,
	   pager: '#navi',
	   cleartypeNoBg: true,
	   slideResize: 0 
 
    });
     
});


$(function() {

    $('.slider2').cycle({
       fx:     'fade',
       speed:   600,
       timeout: 1000000,
	   pager: '#navi2',
	   cleartypeNoBg: true,
	   slideResize: 0 ,
	   	   
 pagerAnchorBuilder: function (index) {
            return '<a href="#"> </a>';
        }
 
    });
     
});



/*---------  Inview Plugin + Animate.css  -------*/

   var browser = false,
        p = navigator.platform;

    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
        browser = true;
    }

    // Control Dynamic Content Sliding 

    if (browser === false) {

    $('.Fade').one('inview', function (event, visible) {
    if (visible) {
        $(this).addClass('animated fadeIn');
    }
  
});

$('.FadeIn').one('inview', function (event, visible) {
    if (visible) {
        $(this).addClass('animated fadeInUp');
    }
  
});

$('.FadeLeft').bind('inview', function (event, visible) {
    if (visible) {
        $(this).addClass('animated fadeInLeftBig');
        

    }
     
});

$('.FadeLeft').unbind('inview', function (event, visible) {
    if (visible) {
        $(this).removeClass('animated fadeInLeftBig');
        

    }
     
});
$('.FadeRight').bind('inview', function (event, visible) {
    if (visible) {
        $(this).addClass('animated fadeInRightBig');
        

    } 
    
});

$('.FadeRight').unbind('inview', function (event, visible) {
    if (visible) {
        $(this).removeClass('animated fadeInRightBig');
        

    } 
    
});

    }

  $(function() {
    $( "#faqs" ).accordion();
  });



/*--------- Input auto-clear -------*/

    $(function(){
    $('input:text, textarea').each(function(){
    var txtval = $(this).val();
    $(this).focus(function(){
    $(this).val('')
    });
    $(this).blur(function(){
    if($(this).val() == ""){
    $(this).val(txtval);
    }
    });
    });
    });


/*--------- Cta Button Set Interval -------*/

setInterval(function(){$('.cta a').toggleClass('animated shake')}, 2000);



});

/*---------  Gallery Hover -------*/

$(document).ready(function(){
$("img.b").hover(
function() {
$(this).stop().animate({"opacity": "1","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"}, "800");
},
function() {
$(this).stop().animate({"opacity": "0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}, "fast");
});

});

/*---------  Slider Faqs Goto Script -------*/

$(document).ready(function(){

$('#faqs-slider').cycle({timeout:0,speed:500,startingSlide:0, fx:'fade', cleartypeNoBg:true});
$('#goto1').click(function(){$('#faqs-slider').cycle(0);return false; });
$('#goto2').click(function(){$('#faqs-slider').cycle(1);return false;});
$('#goto3').click(function(){$('#faqs-slider').cycle(2);return false;});

$('#goto1').click(function(){$('#goto1').addClass("active" , "100"); $('#goto2').removeClass("active" , "0"); $('#goto3').removeClass("active" , "0");  });
$('#goto2').click(function(){$('#goto2').addClass("active" , "100"); $('#goto1').removeClass("active" , "0"); $('#goto3').removeClass("active" , "0");  });
$('#goto3').click(function(){$('#goto3').addClass("active" , "100"); $('#goto2').removeClass("active" , "0"); $('#goto1').removeClass("active" , "0");  });
 
});


/*---------  Mobile Responsive Menu -------*/

$(document).ready(function(){
$("#mobile").click(function(){

	$('#mobi-menu').toggleClass('on').toggleClass('off');
	$(this).toggleClass('opened').toggleClass('closed');

});

});


/*---------  Team Hover -------*/

$(document).ready(function(){
$("div.b2").hover(
function() {
$(this).stop().animate({"opacity": "1","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"}, "800");
},
function() {
$(this).stop().animate({"opacity": "0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}, "fast");
});

});


/*---------	Contact Form  -------*/
 
 $(document).ready(function(){
 
$('#send').click(function(){
 
$.post("mailer.php", $("#contactform").serialize(),  function(response) {
$('#success').html(response);
//$('#success').hide('slow');
});
return false;
 
});




$(function() {$( "#tabs" ).tabs({ fx: {
            opacity:'toggle'   
        } , active: 0 });});
		
$(function() {$( "#tabs2" ).tabs({ fx: {
            opacity:'toggle'   
        } , active: 0 });});
 
});



$(document).ready(function(){
$(".button-newsletter, .cta a, .thank a").hover(
function() {
$(this).toggleClass("button-hover", 300);

},
function() {
$(this).toggleClass("button-hover", 300);
});

});






