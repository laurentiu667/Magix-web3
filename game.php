<?php
require_once("action/AjaxGameAction.php");

$action = new AjaxGameAction();
$data = $action->execute();

require_once("partial/layout/header.php");
?>

<link rel="stylesheet" href="style/css/card.css">
<link rel="stylesheet" href="style/css/cardeffect.css">
<link rel="stylesheet" href="style/css/arenaProto.css">

<script type="module" defer src="script/game.js"></script>

<script type="module" defer src="script/typeGame.js"></script>
<script type="module" defer src="script/cards.js"></script>



    <div class="container-game">

    <div class="blur-wrapper">

        <div class="container-top-game">
            <div class="side-game left-game">
                <div class="container-side">1</div>
                
            </div>
            <div class="middle-game">
                <div class="ennemi-card-board-count"></div>
                <div class="board-game">
                    <div class="blur-wrapper-board">

                        <div class="board-ennemi"></div>
                        <div class="board-joueur"></div>
                    </div>
                </div>
            </div>
            <div class="side-game right-game">
                <div class="container-side">1</div>
            </div>
        </div>

        <div class="container-bottom-game">

            <div class="bottom-bouttom-gn left-button-bottom-game">
                <button class="hero-button">Hero Power</button>
                <button class="attack_hero">Attack Hero</button>
            </div>
            
            <div class="hand-bottom-game"></div>
                
            <div class="right-button-bottom-game right-button-bottom-game">
                <button class="end-turn">End Turn</button>
                <button class="surrender">Surrender</button>
            </div>
        </div>

    </div>

        

    </div>




<?php
require_once("partial/layout/footer.php");
