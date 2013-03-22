
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

$('#data').on('pageinit', function() {


	// Pop Out Menu
	$(".menu_8").listview();
	$('.menu_8').hide();

	$('.grid').on("click", function () {
		$(".menu_8").toggle("slide");

	});
});






$('#signup').on('pageinit', function() {

			var myForm = $("#contactForm");
			$('#errorbox > a').hide();


			myForm.validate({
				
			rules:{
					firstname: 'required',
					lastname: 'required',
					username:'required',
					password:'required',
					startdate:'required',
					email: 'required',
					dob:'required'
				},
			messages:{
					firstname: "Please enter your first Name",
					lastname:	'Please enter your Last Name',
					username:	'Please enter a Username',
					password: 'Please enter a password',
					price: 'Please enter a price range',
					startdate: 'Please enter a start date',
					email:'Please Enter an Email Address',
					dob:'Please Enter your Birth Date'
				},


				errorLabelContainer: ".error1",
				wrapper: "li",
				focusInvalid: true,


				invalidHandler: function(validator) {
				// body...
					$('#errorbox > a').click();




			},

			submitHandler: function() {
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

$("#data").on('pageinit', function() {
		var $page = $(".dt1");

		//click button function to display list from Local Storage
		$(".sd1").click(
			function () {

				$page.empty();
			autoFillData();

				$page.find("dt1").html("<ul></ul>");
				$list = $page.find(".dt1 ul");



			for (var i = localStorage.length - 1; i >= 0; i++) {

				var key = localStorage.key(i);
				var value = localStorage.getItem(key);

				var obj = JSON.parse(value);

				// build html links
				var shtml = "<li><img src=" + obj.propic[i]+">";

			};
	
		}
			)



	// Act on the event
});




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
			item.dob			= ["dob:", $('#dob').val()];

				localStorage.setItem(id, JSON.stringify(data));
		alert("Your Data is Stored!");
};

var getData = function(){

		if(localStorage.length === 0){
			alert("There is no data in Local Storage so using default");
			//console.log("getData");
			autoFillData();
		}

		//Write Data from Local Storage to the browser




		for (var i = 0, len = localStorage.length; i <len; i++)
		{

			var key = localStorage.key(i);
			var value = localStorage.getItem(key);

			//clear any contents
			$('dt1').empty();
			//Convert the string from local storage value back to an object using JSON
			$("dt1").html('<div>' + value[i] + key[i] + '</div>');

				// makeItemLinks(localStorage.key(i), linksLi); //create our edit and Delete buttons for each item in local storage
		}

	};



	var editItem =	function (){
		//Grab the data from our item from Local Storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);


		//console.log("This is the Console Log " + value);
		//Populate the form field with current local storage values
			$("#fname").val() 			= item.fname[1];
			$('#lname').val() 			= item.lname[1];
			$('#pword-chk').val() 		= item.pword[1];
			$('#email').val() 			= item.email[1];
			$('#socialStatus').val() 	= item.socialStatus[1];
			$('#uname').val() 			= item.uname[1];
			$('#url').val() 			= item.url[1];
			$("#form:checked").val() 	= item.sex[1];


		};


		var autoFillData = function (){
		//The Json object Data is coming from the json.js to from the html
		//Then it is put the data in Local Data
		for(var n in json){
			var id = Math.floor(Math.random()*10001);
			localStorage.setItem(id, JSON.stringify(json[n]));
			//console.log("this is the local Storage Test");
		}
	};
