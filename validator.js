function isEmail(email) {
		
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		return regex.test(email);	
		}
		
		$("#submit").click(function() {
			
			var errorMessage = "";
			var fieldsMissing = "";
			
			if ($("#email").val() == "") {
				fieldsMissing += "<br> Email"
			}
			
			if ($("#phone").val() == "") {
				fieldsMissing += "<br> Phone"
			}
			
			if ($("#password").val() == "") {
				fieldsMissing += "<br> password"
			}
			
			if ($("#confirm-password").val() == "") {
				fieldsMissing += " Confirm Password"
			}
			 if (fieldsMissing != "") {
				errorMessage+= "Fields Missings:" + fieldsMissing;

			 }
			
			
			if (isEmail($("#email").val()) == false) {
			
				errorMessage+= "Your email address is not valid!";
			}
			
			if ($.isNumeric($("#phone").val()) == false) {
				errorMessage+= "Your phone number is not valid!";
			}
			
			if ($("#password").val() != $("#confirm-password").val()) {
				errorMessage += "Your passwords don't match!";
			}
			
			if (errorMessage != "") {
				$("#errorMessage").html(errorMessage);
			}
			
			else {
			
			$("#successMessage").show();
			$("#errorMessage").hide();
			}
		});
