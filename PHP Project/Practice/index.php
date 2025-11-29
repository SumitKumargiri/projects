<?php
include 'connect.php';
$sql = "select *from muticrud";
$result = $conn->query($sql);
?>

<table>
    <<a href="add.php">Add</a>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>File</th>
    </tr>
    <?php while($row = $result->fetch_assoc()){?>
        <tr>
            <td><?php echo $row["id"]; ?></td>
            <td><?php echo $row["name"] ?></td>
            <td>
                <?php 
                    $file_path = "uploads/" .$row["file_name"];
                    $file_type = $row["file_type"];

                    if(in_array($file_type,['jpg','jpeg','png','gif'])){
                        echo "<img src='$file_path' width='100px' height = '100px'>";
                    }elseif(in_array[$file_type=='pdf']){
                        echo "<a href='$file_path' target = '_blank'>View PDF</a>";
                    }else{
                    echo "No file";
                    }
                ?>
            </td>
        </tr>
    <?php }?>
</table>