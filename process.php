<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection details
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mywebsite";

    // Create a database connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check the action type (login or signup)
    $action = $_POST["action"];

    if ($action === "login") {
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Validate user input (you should add more validation)
        $sql = "SELECT * FROM users WHERE username = '$username'";
        $result = $conn->query($sql);

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row["password"])) {
                // Successfully logged in
                $_SESSION["username"] = $username;
                header("Location: MharoCollege.html"); // Redirect to the dashboard or another page
                exit();
            } 
            else if ($result->num_rows == 0){
                $error = "User does not exist, kindly signup";
                header("Location: signup.html?error=$error");
            }
        }}
         

     elseif ($action === "signup") {
        $username = $_POST["username"];
        $password = password_hash($_POST["password"], PASSWORD_BCRYPT);
        $email = $_POST["email"];

        // Check if the email already exists in the database
        $check_query = "SELECT * FROM users WHERE email='$email'";
        $result = $conn->query($check_query);

        if ($result->num_rows > 0) {
            // Email already exists, redirect to login page
            header("Location: login.html?message=Email already exists. Please log in.");
            exit;
        }

        // Validate user input (you should add more validation)
        $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";
        if ($conn->query($sql) === TRUE) {
            // Successfully registered
            $_SESSION["username"] = $username;
            header("Location: login.html"); // Redirect to the dashboard or another page
            exit();
        } else {
            $signup_error = "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    $conn->close();
}
?>