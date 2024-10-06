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
                
                <h1>Elden Ring</h1>
                <h2>Made by</h2>
                <h4>laurentiu</h4>
            </div>

            <div class="form-container">
                
                
                <div class="user-pass-container uspc-1">
                        <p>Username</p>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="user-pass-container uspc-2">
                        <p>Password</p>
                        <input type="password" name="password" id="password">
                    </div>
                    <div class="forgot-and-logged">
                        <div class="checkbox">
                            <input type="checkbox" name="" id="">
                            <p>Keep me logged in</p>
                        </div>
                        <div class="forgot-password">Forgot password ?</div>
                    </div>
                    <button type="submit" id="submit" class="submit-button">LOGIN</button>
                <div class="create-new-account">Create new Account</div>
                
                <div class="show-card">
                    <div>
                        <img class="img1" src="/Images/Cartes/malenia.png" alt="">
                        <img class="img2" src="/Images/Cartes/ranni.png" alt="">
                        <img class="img3" src="/Images/Cartes/maliketh.png" alt="">
                        <img class="img4" src="/Images/Cartes/mohg.png" alt="">
                    </div>
                </div>
            </div>
            
         
        </div>
        <div class="right-login" id="slideIMG">
            
        </div>
    </div>

   
 

<?php
    require_once("partial/layout/footer.php");