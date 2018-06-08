<!DOCTYPE html>
<html lang="eng-us">
    <head>
        <title>Home</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        
        <form method="POST">
            <input type="text" name="person">
            <button>SUBMIT</button>
        </form>
        
        <?php
            
            // demonstration of variables in PHP
            $name = $_POST["person"];
            if($name){
                echo $name." is a handsome guy";
            }
        
            //this is a single line comment 
        
            /*
                This is a multi
                line comment 
                This gets something from the database
            */
        
            //this is a demonstration of user defined function
            function myfunction(){
                echo "This is a function";
            }
            //calling or invoking the function
            myFunction();                        
        
        ?>
        
    </body>
</html>