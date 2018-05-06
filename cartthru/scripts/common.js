$(function() {
	
	
            $("#plusbtn").click(function() {
				var plusbtn = $("#plusbtn").val();
				    var total = +$("#totalqty").text();
				    var totalval = parseInt(plusbtn) + parseInt(total);
				    
				    $("#totalqty").text(totalval);
					
					$("#total").text(totalval*2);
            });
           
		    $("#minusbtn").click(function() {
				
				var minusbtn = $("#minusbtn").val();
				    var totalminus = +$("#totalqty").text();
				 
				 	if(totalminus >0)
				    	var totalvalminus = parseInt(minusbtn) + parseInt(totalminus);
						var totalqty = parseInt(totalvalminus) / 2 ;
			
				    	$("#totalqty").text(totalvalminus);
						$("#total").text(totalqty);
					
            });
			
			
        });

/*
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
*/
