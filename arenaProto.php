<?php
require_once("action/ArenaProtoAction.php");

$action = new ArenaProtoAction();
$data = $action->execute();

require_once("partial/layout/header.php");
?>

<link rel="stylesheet" href="style/css/card.css">

<div class="waiting">WAITING FOR PLAYER</div>
<div class="container-game">
    <div class="container-ennemi">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <div class="container-joueur">
        <div></div>
        <div class="container-joueur-cards">
            <div class="card-container"></div>
            <div class="deck-container">
                <div id="card-1" class="card">1</div>
                <div id="card-2" class="card">1</div>
                <div id="card-3" class="card">1</div>
                <div id="card-4" class="card">1</div>
                <div id="card-5" class="card">1</div>
            </div>
        </div>
        <div></div>
    </div>
</div>

<?php
require_once("partial/layout/footer.php");
