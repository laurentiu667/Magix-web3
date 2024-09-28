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
    <title>Document</title>
</head>
<body>

    <div class="container-login">
        <div class="left-login">
            <div class="texte-container-login">
                <h1>Elden Ring</h1>
                <h2>Made by</h2>
                <h4>laurentiu</h4>
            </div>

            <div class="form-container">
                <form action="" method="post">
                    <div class="user-pass-container uspc-1">
                        <p>Username</p>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="user-pass-container uspc-2">
                        <p>Password</p>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="forgot-and-logged">
                        <div class="checkbox">
                            <input type="checkbox" name="" id="">
                            <p>Keep me logged in</p>
                        </div>
                        <div class="forgot-password">Forgot password ?</div>
                    </div>
                    <button type="submit" class="submit-button">LOGIN</button>
                    <div class="create-new-account">Create new Account</div>
                </form>
                <div class="div-social">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="right-login">
            
        </div>
    </div>

   
 

<?php
    require_once("partial/footer.php");