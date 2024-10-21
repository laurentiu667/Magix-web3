<?php
require_once("action/AjaxGameAction.php");

$action = new AjaxGameAction();
$data = $action->execute();

require_once("partial/layout/header.php");
?>

<link rel="stylesheet" href="style/css/card.css">
<script defer src="script/Game.js"></script>
<script defer src="script/typeGame.js"></script>
<link rel="stylesheet" href="style/css/arenaProto.css">

<div class="waiting"></div>

<div class="wrapper-menu">
<div class="container-game">
    <div class="container-ennemi">
        <div>1</div>
        <div class="information-game">
            <div class="versus">
                <div class="joueur">
                    <div class="image_nom">
                        <div class="image-game"></div>
                        <div class="nom">
                            <?php
                                echo $_SESSION["username"];
                            ?>
                        </div>
                    </div>

                    <div class="vie_mana">

                        <div class="vie">
                            <div class="image-vie image-bar-global"></div>
                            <div class="vie-bar">2</div>
                        </div>

                        <div class="mana">
                            <div class="image-mana image-bar-global"></div>
                            <div class="mana-bar">2</div>
                        </div>

                    </div>

                </div>
                <div class="temps-div">
                    <div class="temps"></div>
                </div>
                <div class="ennemi">
                    <div class="image_nom">
                        <div class="image-game"></div>
                        <div class="nom">
                            
                        </div>
                    </div>

                    <div class="vie_mana">

                        <div class="vie">
                            <div class="image-vie image-bar-global"></div>
                            <div class="vie-bar">2</div>
                        </div>

                        <div class="mana">
                            <div class="image-mana image-bar-global"></div>
                            <div class="mana-bar">2</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="deck-container-ennemi"></div>
        </div>
        <div>3</div>
    </div>
    <div class="container-joueur">
        <div></div>
        <div class="container-joueur-cards">
            
            <div class="deck-container">

          
        
           
            </div>
        </div>
        <div></div>
    </div>
</div>
</div>

<?php
require_once("partial/layout/footer.php");
