$('#home').on('pageinit', function () {
	// body...
	$(".menu").listview();
	$('.menu').hide();

	$('.grid').on("click", function () {
		$(".menu").toggle("slide");
		// body...
})
	

});

$('#login').on('pageinit', function() {
	
	$(".login").on('click', function(event) {
		event.preventDefault();
		// Act on the event
		$(".hide").hide();


	});
});


$('#style2').on('pageinit' , function () {
	// body...
})
$('#options').on('pageinit', function() {

	$('.menu_2').listview();
	$('.menu_2').hide();
	$('.grid').on('click', function() {
		$(".menu_2").toggle("slide");
});
	// Act on the event
});

var socialStatus = ["Intern", "Starter", "PhaseI", "Gold Phase", "Gold Phase II", "Platinum"];


