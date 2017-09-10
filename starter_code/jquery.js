
$(function() {
  	console.log( 'ready!' );

	$(".readmore a").click (function (event) {
		event.preventDefault()
		$("#show-this-on-click").slideDown ().show () 
		$(".readless").show() 
		$(".readmore").hide() 
	})

	$(".readless a").click (function (event) {
		event.preventDefault()
		$("#show-this-on-click").slideUp ().hide () 
		$(".readless").hide() 
		$(".readmore").show() 



	})

});

$("p").click (function (event) {
	event.preventDefault ()
	$("#learnmoretext").slideDown ().show ()
	$ (".learnmore").slideUp ().hide ()
	

});














