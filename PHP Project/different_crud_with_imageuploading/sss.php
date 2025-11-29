<?php
require 'connect.php';

if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $hobbies=$_POST['hobbies'];
    $gender=$_POST['gender'];
    $status=isset($_POST['status'])?'Active':'Inactive';

    $file_name=$_FILES['file']['name'];
    $file_tmp=$_FILES['file']['tmp_name'];
    $file_type=pathinfo($file_name,PATHINFO_EXTENSION);

    $target_dir="uploads/";
    $target_file=$target_dir.basename($file_name);

    $allowed_types = ['jpg','jpeg','png','pdf'];
    if(in_array(strtolower))
}
?>