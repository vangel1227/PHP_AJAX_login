<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Login</title>
	<link rel="stylesheet" href="css/style.css">
	<script src="js/jquery.min.js"></script>
	<script src="js/login.js"></script>
</head>
<body>
	<!-- Form, results id to be dynamically populated via jQuery 
        Paragrpahs within the form have unqiue id's to make it easier to apply errorClass
    -->
<h1>Login</h1>
<p id="results"></p>
<form action="login.php" method="post" id="login">
	<p id="emailP">Email Address: <input type="email" name="email" id="email"><span class="errorMessage" id="emailError">Please enter your email address!</span></p>
	<p id="passwordP">Password: <input type="password" name="password" id="password"><span class="errorMessage" id="passwordError">Please enter your password!</span></p>
	<p><input type="submit" name="submit" value="Login!"></p>
</form>
</body>
</html>
