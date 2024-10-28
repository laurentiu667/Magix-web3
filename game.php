<?php
require_once("action/AjaxGameAction.php");

$action = new AjaxGameAction();
$data = $action->execute();

require_once("partial/layout/header.php");
?>

<link rel="stylesheet" href="style/css/card.css">
<script type="module" defer src="script/game.js"></script>

<script type="module" defer src="script/typeGame.js"></script>
<script type="module" defer src="script/cards.js"></script>
<link rel="stylesheet" href="style/css/arenaProto.css">



<div class="wrapper-menu">
<div class="container-game">
    <div class="container-ennemi">
       
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
                            <div class="vie-bar" id="joueur-vie"></div>
                        </div>

                        <div class="mana">
                            <div class="image-mana image-bar-global"></div>
                            <div class="mana-bar" id="joueur-mana"></div>
                        </div>

                    </div>

                </div>
                <div class="temps-div">
                    <div class="temps"></div>
                </div>
                <div class="ennemi">
                    <div class="image_nom">
                        <div class="image-game"></div>
                        <div class="nom nom-ennemi">
                            
                        </div>
                    </div>

                    <div class="vie_mana vie_mana_ennemi">

                        <div class="vie">
                            <div class="image-vie image-bar-global"></div>
                            <div class="vie-bar" id="ennemi-vie"></div>
                        </div>

                        <div class="mana">
                            <div class="image-mana image-bar-global"></div>
                            <div class="mana-bar" id="ennemi-mana"></div>
                        </div>

                    </div>
                </div>
            </div>
          
        </div>
   
    </div>
    <div class="board">
        <div class="waiting"></div>
    
        <div class=" wrapper-board wrapper-menu">
            <div class="messageErreur"></div>
            <div class="board_ennemi"></div>
            <div class="board_joueur"></div>
            
        </div>
    </div>
    <div class="container-joueur">
      
       

        <div class="game-button-container">
            <div class="button-game">
                <div class="button-game-left">
                    <div class="button-game-left-div border-button-game end-turn "></div>
                </div>
                <div class="button-game-center">
                    <div class="button-game-center-top border-button-game hero-button"></div>
                    <div class="button-game-center-bottom border-button-game chat-button"></div>
                </div>
                <div class="button-game-right">
                    <div class="button-game-left-div border-button-game card-number"></div>
                </div>
            </div>
            <div class="extra-button">
                <div class="attack_hero">attaquer hero </div>
                <div class="surrender">abandonner</div>
            </div>
        </div>
        
        <div class="deck-container"></div>
           
        </div>
       
        
    </div>
    
</div>
</div>

<?php
require_once("partial/layout/footer.php");
