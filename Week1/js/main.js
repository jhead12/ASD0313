
$('#home').on('pageinit', function () {
	// Pop Out Menu
	$(".menu").listview();
	$('.menu').hide();

	$('.grid').on("click", function () {
		$(".menu").toggle("slide");


			});

});

$('#profile').on('pageinit', function() {

// Menu Function
	// Pop Out Menu
	$(".menu_2").listview();
	$('.menu_2').hide();

	$('.grid').on("click", function () {
		$(".menu_2").toggle("slide");

	});


});

$('#settings').on('pageinit', function() {

// Menu Function
	// Pop Out Menu
	$(".menu_3").listview();
	$('.menu_3').hide();

	$('.grid').on("click", function () {
		$(".menu_3").toggle("slide");

	});

});

$('#photos').on('pageinit', function() {
// Menu Function
	// Pop Out Menu
	$(".menu_4").listview();
	$('.menu_4').hide();

	$('.grid').on("click", function () {
		$(".menu_4").toggle("slide");

	});
});
$('#uload').on('pageinit', function() {


	// Pop Out Menu
	$(".menu_5").listview();
	$('.menu_5').hide();

	$('.grid').on("click", function () {
		$(".menu_5").toggle("slide");

	});
});
});
$('#signup').on('pageinit', function() {

			var myForm = $("#contactForm");


			myForm.validate({

			invalidhandler: function() {
						// body...
					},
					errorLabelContainer: "#errorbox ul",
					wrapper: "li",
			rules:{
				firstname: 	'required',
				lastname: 	'required',
				username:	'required',
				password:	'required',
				startdate:	'required',
				email:		'required'
				},
			messages:{
				firstname: "Please enter your first Name",
				lastname:	'Please enter your Last Name',
				username:	'Please enter a Username',
				password: 'Please enter a password',
				price: 		'Please enter a price range',
				startdate: 	'Please enter a start date',
				email:		'Please Enter an Email Address'
				},
			submitHandler: function(myForm) {
		var data = $('#contactForm').serializeArray();
			storeData(data);

			//console.log(data);
		}
	});



	// Pop Out Menu
	$(".menu_7").listview();
	$('.menu_7').hide();

	$('.grid').on("click", function () {
		$(".menu_7").toggle("slide");

	});

});



// $.getJSON('js/json.js', function(data, textStatus) {

// 		console.log(data);

// 	$.each(json, function(key, val) {
// 		//iterate through array or object
// 	console.log(key);

// 		// var options = "";
// 		// options += 


// });

// 	});

var socialStatus = ["Intern", "Starter", "PhaseI", "Gold Phase", "Gold Phase II", "Platinum"];

var storeData = function(data){
		var id = Math.floor(Math.random()*10001);
			var item 				= {};
			item.uname			= ["User Name:", $('#uname').val()];
			item.fname			= ["First Name:", $('#fname').val()];
			item.lname			= ["Last Name:", $('#lname').val()];
			item.pword			= ["Password:", $('#pword-chk').val()];
			item.sex			= ["sex:", $(':checked').val()];
			item.email			= ["Email:", $('#email').val()];
			item.url			= ["Url:", $('url').val()];

				localStorage.setItem(id, JSON.stringify(data));
		alert("Your Data is Stored!");
};

var getData = function(page){

		if(localStorage.length === 0){
			alert("There is no data in Local Storage so using default");
			//console.log("getData");
			autoFillData();
		}

		//Write Data from Local Storage to the browser



		$('#items').css("style", "display");
		for (var i = 0, len = localStorage.length; i <len; i++)
		{

			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert the string from local storage value back to an object using JSON
			$(page + ":empty").html("<li>" + key + value + "</li>");


			var obj = JSON.parse(value);

				getImage(obj.profile);
			for( var n in obj){

				var optSubText = obj[n][0]+" "+obj[n][1];
				$(page).html('<div>'+ optSubText +  '</div>');


		}

				makeItemLinks(localStorage.key(i), linksLi); //create our edit and Delete buttons for each item in local storage
		}

	};



	var editItem =	function (){
		//Grab the data from our item from Local Storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);


		//console.log("This is the Console Log " + value);
		//Populate the form field with current local storage values
		$("#fname").val() = item.fname[1];
		$('#lname').val() = item.lname[1];
		$('#pword-chk').val() = item.pword[1];
		$('#email').val() = item.email[1];
		$('#adType').val() = item.adType[1];
		$('#uname').val() = item.uname[1];
	$('#url').val() = item.url[1];
	$("#form:checked").val() = item.sex[1];


		};
