<?php 
    include 'connect.php';

    if(isset($_POST['submit'])){
        $name=$_POST['name'];
        $email = $_POST['email'];
        $gender= $_POST['gender'];
        $hobbies = $_POST['hobbies'];
        $file = $_FILES['file'];
    }
?>

<form action="add.php" method="post" enctype="multipart/form-data">
    <input type="text" name="name" placeholder= "Enter Name"><br><br>
    <input type="email" name = "email" placeholder = "Enter Email"><br><br>
    
    <input type="radio" name="gender" value="male">Male
    <input type="radio" name="gender" value="female">Female
    <input type="radio" name="gender" value="other">Other <br><br>

    <select name="hobbies">
        <option value="Reading">Reading</option>
        <option value="Music">Music</option>
        <option value="Playing">Playing</option>
    </select> <br><br>

    <input type="file" name="file"> <br><br>
</form>

