// Script included by login.php, handles & validates form submission, then makes Ajax request of login_ajax.php.
// Then updates DOM based on returned response
// Execute when document ready

$(function() {
	
	// Hide all error messages with errorMessage class
	$('.errorMessage').hide();
	
	// Form event handler
	$('#login').submit(function() {
		
		// Initialize variables, local representations of form data
		var email, password;
		
        // Validate email (greater than 6 charcaters, weak validation)
        // Can use regular expressions in JS, but PHP also performs validation
		if ($('#email').val().length >= 6) {
	
			// Get email
			email = $('#email').val();
	
			// Clear error, if one existed
			$('#emailP').removeClass('error');

			// Hide the error message, if it was visible
			$('#emailError').hide();
			
		} else { // Invalid email address
	
			// Add an error class
			$('#emailP').addClass('error');

			// Show the error message
			$('#emailError').show();

		}
		
		// Validate password, just confirms at least one charcter entered, minimal JS validation
		if ($('#password').val().length > 0) {
			password = $('#password').val();
			$('#passwordP').removeClass('error');
			$('#passwordError').hide();
		} else {
			$('#passwordP').addClass('error');
			$('#passwordError').show();
		}
				
		// both values received, perform Ajax request
		if (email && password) {
	
            // Create an object for the form data
            // First generic object created then properties email and password created and assigned value
			var data = new Object();
			data.email = email;
			data.password = password;
			
			// Create object for Ajax options
			var options = new Object();

			// Establish settings
			options.data = data; // Property named data assigned value of the data object, stores data being passed to PHP as part of Ajax request
			options.dataType = 'text'; // Defines data type expected from server-side request, impact how JS works with response, need sto match what actual server response will be
            options.type = 'get'; // Type of request being made (GET & POST most common)
            // Because of data Object name (email & password) and options Object type value get, login_ajax.php will receieve $_GET['email'] and $_GET['password']
            // Change the names of properties in data or value in options.type, PHP would receive Ajax data in different supergloabal variable
            options.success = function(response) { // Defining what should happen upon successful Ajax request
                // Success mean being able to perform request and receive result
				
				// Worked:
				if (response == 'CORRECT') {
	
					// Hide form
					$('#login').hide();
	
					// Show message
					$('#results').removeClass('error');
					$('#results').text('You are now logged in!');
					
				} else if (response == 'INCORRECT') {
					$('#results').text('The submitted credentials do not match those on file!');
					$('#results').addClass('error');
				} else if (response == 'INCOMPLETE') {
					$('#results').text('Please provide an email address and a password!');
					$('#results').addClass('error');
				} else if (response == 'INVALID_EMAIL') {					
					$('#results').text('Please provide your email address!');
					$('#results').addClass('error');
				}
				
			}; // End of success
			options.url = 'login_ajax.php'; // Add URL property to make the request (which script to sent the request to)

			// Perform the request
			$.ajax(options);
		
		} // End of email && password IF
		
		// Return false, prevents actual form submission
		return false;
		
	}); // End form submission

}); // End document ready
