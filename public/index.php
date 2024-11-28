<?php
    require_once("action/loginAction.php");

    $action = new loginAction();
    $data = $action->execute();
    $data["titlepage"] = "Login";
    require_once("partial/layout/header.php");

?>

<link rel="stylesheet" href="style\css\login.css">
<script defer src="/script/login.js" ></script>


    
   
    <div class="container-login">
   
        <div class="left-login">

        <div class="disablecache">oubliez pas de disable le cache du navigateur</div>
            <div class="user-not-exist">
                sorry but the user do not exist
            </div>
            
            <div class="wrapper-left-login">
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
            
         
        </div>
        <div class="right-login" id="slideIMG">
            <div class="effet-lum--glob effet-lumiere--1"></div>
            <div class="effet-lum--glob effet-lumiere--2"></div>

            <div class="wrapper-right-login">
                <div class="login-t1">Ton voyage a commencé, Ténébreux</div>
                <div class="login-image-right"></div>
                <div class="login-t2">Maintenant, choisis ton chemin et porte le poids de tes fardeaux</div>
                <div class="login-t3">L'Anneau Elden t'attend, un prix pour ceux qui sauront persévérer</div>
            </div>
            
                
        </div>
    </div>

   
 

<?php
    require_once("partial/layout/footer.php");