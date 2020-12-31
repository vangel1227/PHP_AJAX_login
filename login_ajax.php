<?php 
// Script called via Ajax from login.php not to be execute directly so no HTML
// The script expects to receive two values in the URL: email & password
// Returns string indicating results

// Requires email & password, first confirms that both were passed to it
if (isset($_GET['email'], $_GET['password'])) {

	// Validate email
	if (filter_var($_GET['email'], FILTER_VALIDATE_EMAIL)) {
		
		// Match values
		if ( ($_GET['email'] == 'email@example.com') && ($_GET['password'] == 'testpass') ) {

			// Indicate success, matching value. Used in login.js
			echo 'CORRECT';
			
		} else { // Mismatched values. Used in login.js
			echo 'INCORRECT';
		}
		
	} else { // Invalid email
		echo 'INVALID_EMAIL';
	}

} else { // Missing 1 or 2 variables
	echo 'INCOMPLETE';
}

?>
