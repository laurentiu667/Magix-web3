<?php
    require_once("action/loginAction.php");

    $action = new loginAction();
    $data = $action->execute();

    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style\css\global.css">
    <link rel="stylesheet" href="style\css\login.css">
    <script defer src="/script/login.js" ></script>
    <title>Login</title>
</head>
<body>
    <div class="user-not-exist">
        sorry but the user do not exist
    </div>
   
    <div class="container-login">
   
        <div class="left-login">
            
            <div class="texte-container-login">
                
            
                
            </div>

            <div class="form-container">
                
                
                <div class="connection">

                    <div class="username-container">
                        <p>USERNAME</p>
                        <input type="text" name="username" id="username">
                    </div>

                    <div class="password-container">
                        <p>PASSWORD</p>
                        <input type="password" name="password" id="password">
                    </div>

                    <button type="submit" id="submit" class="submit-button">LOGIN</button>

                </div>
                
            </div>
            
         
        </div>
        <div class="right-login" id="slideIMG">
            
        </div>
    </div>

   
 

<?php
    require_once("partial/layout/footer.php");