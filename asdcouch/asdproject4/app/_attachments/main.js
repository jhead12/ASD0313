$("#home").on("pageinit", function() {
    // body...
        
 $.couch.db("asdproject").view("app/status",{
                success: function (data) {
                    // body...
                   
                    $.each(data.rows, function (index, value) {
                        // body...
                        var item = (value.value || value.doc);
                        console.log(value);
                        
                        $("#userType").after("<option>" + item.Name + "</option>");
                    })
                }

            });



    $("#form").validate({

        rules:{
                fname: 'required',
                email: 'required',
                date: 'required'

        },
        messages:{
                fname: 'Please Enter your First name!',
                email: 'Please enter a valid Email',
                date: 'Please enter a valid birthday'



        },

        errorLabelContainer:".errorbox",
        wrapper: "li",
        focusInvalid: true,
        

        invalidHandler: function(validator) {
            // body...
             $('.errors > a').click();

        },
        

        submitHandler: function (event, validator) {
            // body...
            console.log("validator");
           
            var data1 = $('#form').serializeArray();
            storeData(data1);


            
            $.mobile.changePage("#data", {
                transistion:"pop",
                reverse: false,
                changeHash: false

            });


            


        }

    });



});//home Page

$("#data").on("pageinit", function () {
    $.couch.db("asdproject").view("app/status", {
        success: function (data) {
            // body...

              $.each(data.rows, function (index, value) {
                        // body...
                        var item = (value.value || value.doc);
                        var total = $(item).size();

                        console.log(value);

                        var $page = $("#statusList ul");
                        $page.append(

                            $('<li>').append(
                            $('<a>')
                            .attr("href", "status.html?status=" + item.Name)
                            .text(item.Name).append("<span class=ui-li-count>" + total + "</span>")
                            )

                        );




                });

$("#statusList ul").listview("refresh");

        }
    })

        


});



$("#details").on("pageinit", function() {
    // body...





});


//store Data Function
var storeData = function(data){
    var id = Math.floor(Math.random()*1001);
    var item            ={};
        item.fname      =["Full Name", $('#fname').val()];
        item.email      =["Email", $("#email").val()];
        item.date       =["Date", $("#date").val()];

        localStorage.setItem(id, JSON.stringify(data));
        alert("Data has been saved");


};





