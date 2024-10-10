<?php
    require_once("action/ArenaProtoAction.php");

    $action = new ArenaProtoAction();
    $data = $action->execute();

    require_once("partial/layout/header.php");
?>

    <div class="container-game">

        <div class="container-ennemi">

            <div>1</div>
            <div>2</div>
            <div>3</div>

        </div>
        <div class="container-joueur">
            <div></div>
            <div class="container-joueur-cards">

                <div class="card-container">1</div>
                <div class="deck-container">2</div>

            </div>
            <div></div>
        </div>
        
    </div>

<?php
    require_once("partial/layout/footer.php");