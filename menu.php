<?php
    require_once("action/MenuAction.php");

    $action = new MenuAction();
    $data = $action->execute();

    $scriptsrc = "/script/logout.js";

    require_once("partial/layout/header.php");
?>  
   
   
   <div class="container-menu">
        <div class="chat-menu">
            <iframe id="iframe" style="width:100%;height:100%;" onload="applyStyles(this)" 
                src="https://magix.apps-de-cours.com/server/chat/<?= $_SESSION["key"] ?>">  
            </iframe>
        </div>
        <div class="liste-button">
            <div class="button-menu" id="partie_lancer">commencer une partie</div>
            <div class="button-menu">ordinateur</div>
            <div class="button-menu">statistique</div>
            <div class="button-menu" id="deconnexion">quitter</div>
        </div>
   </div>
    

<?php
    require_once("partial/layout/footer.php");