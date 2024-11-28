<?php

require_once("action/GameAction.php");

$action = new GameAction();
$data = $action->execute();
$username = $_SESSION["username"];
require_once("partial/layout/header.php");
?>

<link rel="stylesheet" href="style/css/card.css">
<link rel="stylesheet" href="style/css/cardeffect.css">
<link rel="stylesheet" href="style/css/arenaProto.css">
<link rel="stylesheet" href="style/css/loading.css">
<link rel="stylesheet" href="style/css/chat.css">

<script type="module" defer src="script/game.js"></script>
<script type="module" defer src="script/chat.js"></script>
<script type="module" defer src="script/typeGame.js"></script>
<script type="module" defer src="script/cards.js"></script>


<div class="animation-rideau">
    <div class="wrapper">
        <div class="first-loading">
            <div class="primary-load"></div>
            </div>
            <div class="second-loading">
                <div class="primary-load"></div>
            </div>
        </div>
    </div>
    <div class="animation-versus">
        <div class="animation-joueur"></div>
        <div class="animation-versus-text"></div>
        <div class="animation-ennemi"></div>
        
    </div>
    <div class="danger-alert"></div>
    
    
    <div class="iframe-container">
        <div class="fermer-chat"></div>
        <div class="wrapper-iframe">
                
    
                    <div class="top-message-container">
                        <div class="left-container-user-connected"></div>
                        <div class="list-user--in-game">

                        </div>
                    </div>
    
                    <div class="bottom-message-users-container">
                        <div class="message--class-global">
    
                
                        </div>
                        <form class="chat-form">
                            <div class="container-send--message">
                                <input type="text" class="message--class-input" placeholder="message">
                                <button type="submit" class="message--class-button-send">Envoyer</button>
                                <button type="submit" class="message--class-button-send-small-device"></button>
                            </div>
                        </form>
                    </div>
            </div>
    </div>
    

    <div class="container-game">
        <div class="message-skew-erreur">
            <div class="message-erreur--1">
                <div class="style-div-erreur-before"></div>
            </div>
        </div>
        
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

                                    <div class="container-hm">
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
                            </div>
                            <div class="bottom-side">

                                <div class="container-info-user-game-side">

                                    <div class="name-player">
                                        
                                    </div>

                                    <div class="container-message-card">

                                        <div class="card-remaining">
                                            <div class="text-cr">Card</div>
                                            <div class="number-card"></div>

                                        </div>
                                        <div class="message-game-side">
                                            <div class="message">Message</div>
                                            <div class="message-div"></div>
                                        </div>
                                        <div class="temps-restant"></div>
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

                            <div class="board-ennemi">
                                <div class="container-hand-ennemi"></div>
                            </div>
                            <div class="board-joueur">
                                <div class="container-hand-joueur"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="side-game right-game">

                    <div class="wrapper-game-side">
                        
                    
                        <div class="container-side">

                            <div class="top-side">
                                <div class="image-side-game">
                                    <div class="image-subject image-subject-ennemi"></div>
                                </div>
                                <div class="mana-health-side-game">

                                    <div class="health health-ennemi">
                                        <div class="health-progress health-progress-ennemi"></div>
                                    </div>

                                    <div class="mana mana-ennemi">
                                        <div class="mana-progress mana-progress-ennemi"></div>
                                    </div>

                                    <div class="container-hm">
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
                            </div>
                            <div class="bottom-side">

                                <div class="container-info-user-game-side">

                                    <div class="name-player name-player-ennemi">Horloge</div>

                                    <div class="container-message-card">

                                        <div class="card-remaining">
                                            <div class="text-cr">Cards</div>
                                            <div class="number-card number-card-ennemi"> </div>

                                        </div>
                                        <div class="message-game-side">
                                            <div class="message">Message</div>
                                            <div class="message-div message-div-ennemi"></div>
                                        </div>
                                        <div class="temps-restant temps-restant-ennemi"></div>
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

                <div class="hand-bottom-game"></div>
                    

                <div id="openchat" class="openchatgame open-chat-button"></div>

            </div>

        </div>
    </div>
<?php
require_once("partial/layout/footer.php");
