$(".banner_main").slick({
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false,
    dots:true
})
$(window).scroll(function(){
	var scrolling = $(window).scrollTop();

  if(scrolling > 20){
	$(".menu_bg").addClass("bg")
  }else{
	$(".menu_bg").removeClass("bg")
  }
})

$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.",],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

new WOW().init();

$('.counter').counterUp({
	delay: 10,
	time: 1000
});

lightbox.option({
	'resizeDuration': 200,
	'wrapAround': true
  })