$(document).ready(function(){

	var url = "_view/status";
	$.ajax({
		"url": url,
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index, status){
				var title = status.id;
				var stat  = status.value.Name;
				var badge = status.value.badge;
				var shares =status.value.shares;
				var message = status.value.message;

				console.log(badge);

				//Build Html Links
				var lhtml = '<li><a href="#" class="ui-link-inherit">'+stat ;
				lhtml += '<img src="'+ $.makeArray(badge) + '" alt="'+ badge+ '" />';
				lhtml += "<h1> There has to be "+ shares + " shares in order to gain access</h1>";
				lhtml += '</a></li>\n';

				var report = $(lhtml);


				

				$("#statusList").append(report);
			});
			$('#statusList').listview('refresh');
			$('a').click(function() {
					// Act on the event
					console.log($(this));
				});


			
		}
	
	
	});
	
});