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

<div class="waiting">WAITING FOR PLAYER</div>

<div class="wrapper-menu">
<div class="container-game">
    <div class="container-ennemi">
        <div>1</div>
        <div class="information-game">
            <div class="versus">
                <div class="joueur"></div>
                <div class="image-versus"></div>
                <div class="ennemi"></div>
            </div>
            <div class="deck-container-ennemi"></div>
        </div>
        <div>3</div>
    </div>
    <div class="container-joueur">
        <div>Temps restants : <span class="temps"></span></div>
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
