// Make it rain!
$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();
	console.log('The distance scrolled is: ' + distanceScrolled);

	if (distanceScrolled > 1) {
		$(".stickynav").addClass("scrolled");
	} else {
		$(".stickynav").removeClass("scrolled");
	}

});