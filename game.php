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


    <div class="animation-rideau"></div>
    <div class="animationError"></div>
    <div class="container-game">

        <div class="blur-wrapper">

            <div class="container-top-game">
                <div class="side-game left-game">
                    <div class="wrapper-game-side">
                        
                    
                        <div class="container-side">

                            <div class="top-side">
                                <div class="image-side-game">
                                    <div class="image-subject"></div>
                                </div>
                                <div class="mana-health-side-game">

                                    <div class="health">
                                        <div class="health-progress"></div>
                                    </div>

                                    <div class="mana">
                                        <div class="mana-progress"></div>
                                    </div>

                                    <div class="number-health">
                                        <div class="cercle-health"></div>
                                        <p class="number-cercle-health"></p>
                                    </div>

                                    <div class="number-mana">
                                        <div class="cercle-mana"></div>
                                        <p class="number-cercle-mana"></p>
                                    </div>

                                </div>
                            </div>
                            <div class="bottom-side">

                                <div class="container-info-user-game-side">

                                    <div class="name-player">Horloge</div>

                                    <div class="container-message-card">

                                        <div class="card-remaining">
                                            <div class="text-cr">Card Remaining</div>
                                            <div class="number-card"></div>

                                        </div>
                                        <div class="message-game-side">
                                            <div class="message">Message</div>
                                            <div class="message-div"></div>
                                        </div>
                                    </div>

                                </div>
                                <div class="container-button-game-side-game">
                                    <div class="div-button"> <div class="img-div-button-game-hero"></div> </div>
                                    <div class="div-button"> <div class="img-div-button-game-forfeit"></div> </div>
                                    <div class="div-button"> <div class="img-div-button-game-endturn"></div> </div>
                                    
                                </div>

                            </div>

                        </div>
                    </div>
                    
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
                <div class="wrapper-game-side">
                        
                    
                        <div class="container-side">

                            <div class="top-side">
                                <div class="image-side-game">
                                    <div class="image-subject-ennemi"></div>
                                </div>
                                <div class="mana-health-side-game">

                                    <div class="health health-ennemi">
                                        <div class="health-progress health-progress-ennemi"></div>
                                    </div>

                                    <div class="mana mana-ennemi">
                                        <div class="mana-progress mana-progress-ennemi"></div>
                                    </div>

                                    <div class="number-health">
                                        <div class="cercle-health"></div>
                                        <p class="number-cercle-health number-cercle-health-ennemi"></p>
                                    </div>

                                    <div class="number-mana">
                                        <div class="cercle-mana"></div>
                                        <p class="number-cercle-mana number-cercle-mana-ennemi"></p>
                                    </div>

                                </div>
                            </div>
                            <div class="bottom-side">

                                <div class="container-info-user-game-side">

                                    <div class="name-player name-player-ennemi">Horloge</div>

                                    <div class="container-message-card">

                                        <div class="card-remaining">
                                            <div class="text-cr">Card Remaining</div>
                                            <div class="number-card number-card-ennemi"> </div>

                                        </div>
                                        <div class="message-game-side">
                                            <div class="message">Message</div>
                                            <div class="message-div message-div-ennemi"></div>
                                        </div>
                                    </div>

                                </div>
                                <div class="container-button-game-side-game">
                                    <div class="div-button"> <div class="img-div-button-game-attackhero"></div> </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="container-bottom-game">

                <div class="bottom-bouttom-gn left-button-bottom-game">
                    
                </div>
                
                <div class="hand-bottom-game"></div>
                    
                <div class="right-button-bottom-game right-button-bottom-game">
                    
                </div>
            </div>

        </div>

        

    </div>




<?php
require_once("partial/layout/footer.php");
