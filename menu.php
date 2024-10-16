<?php
    require_once("action/MenuAction.php");

    $action = new MenuAction();
    $data = $action->execute();


    require_once("partial/layout/header.php");
?>  
    <script defer src="script/menu.js"></script>
    <link rel="stylesheet" href="style/css/menu.css">
   <div class="container-menu">
       <div class="wrapper-menu">
            <div class="title-menu">
                <h1 class="The">The</h1>
                <h1 class="EldenRing">Elden Ring</h1>
                <h1 class="Magix">Magix</h1>
                <h1 class="X">X</h1>
               
                <h1 class="Game">Game</h1>
            </div>
            <div class="list-menu">
                <ul>
                    <li id="partie_lancer">commencer une partie</li>
                    <li>entrainement</li>
                    <li>commencer une grande partie</li>
                    <li id="openchat">chat en ligne</li>
                    <li id="deconnexion">quitter</li>
                </ul>
            </div>
            <div class="version">VERSION - IN PRODUCTION</div>
       </div>
   </div>
   
   <div class="iframe-container">
    <iframe id="iframe" style="width:100%;height:100%;" onload="applyStyles(this)" 
                    src="https://magix.apps-de-cours.com/server/chat/<?= $_SESSION["key"] ?>">  
        </iframe>
   </div>

<?php
    require_once("partial/layout/footer.php");