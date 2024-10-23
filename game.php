<?php
require_once("action/AjaxGameAction.php");

$action = new AjaxGameAction();
$data = $action->execute();

require_once("partial/layout/header.php");
?>

<link rel="stylesheet" href="style/css/card.css">
<script type="module" defer src="script/Game.js"></script>
<script type="module" defer src="script/typeGame.js"></script>
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
                            <div class="vie-bar" id="joueur-vie">2</div>
                        </div>

                        <div class="mana">
                            <div class="image-mana image-bar-global"></div>
                            <div class="mana-bar" id="joueur-mana">2</div>
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
                            <div class="mana-bar" id="ennemi-mana">2</div>
                        </div>

                    </div>
                </div>
            </div>
          
        </div>
   
    </div>
    <div class="board">
       
        <div class="container-board">
            <div class="waiting"></div>
            

            <div class=" wrapper-board wrapper-menu">
                
                <div class="board_ennemi"></div>
                <div class="board_joueur"></div>
            </div>
            
        </div>
    </div>
    <div class="container-joueur">
      
        <div class="container-joueur-cards">
            
            <div class="deck-container">

          
        
           
            </div>
        </div>
        
    </div>
    <div class="end-turn">end turn</div>
</div>
</div>

<?php
require_once("partial/layout/footer.php");
