<?php
    require_once("action/MenuAction.php");

    $action = new MenuAction();
    $data = $action->execute();

    $scriptsrc = "/script/logout.js";

    require_once("partial/layout/header.php");
?>
    <div class="but" id="deconnexion">deconnexion</div>
    <iframe style="width:700px;height:800px;" onload="applyStyles(this)" 
        src="https://magix.apps-de-cours.com/server/chat/<?= $_SESSION["key"] ?>">  
    </iframe>

<?php
    require_once("partial/layout/footer.php");