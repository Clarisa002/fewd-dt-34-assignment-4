$( document ).ready(function() {

	//read more
$(".readmore").click(showText);
function showText(){
	event.preventDefault()
   $( "#show-this-on-click" ).slideToggle();
}

	//read less
$(".readless hide").click(hideText);
function hideText(){
	event.preventDefault()
   $( "#show-this-on-click" ).slideToggle();
}

	//slide down text and hide Learn more link
$(".learnmore").click(textShow);
function textShow(){
	event.preventDefault()
	$( "#learnmoretext" ).slideDown();
	$('.learnmore').hide();
}

});

