<?php
    require_once("action/MenuAction.php");

    $action = new MenuAction();
    $data = $action->execute();

    $scriptsrc = "/script/logout.js";

    require_once("partial/layout/header.php");
?>
    <div class="but" id="deconnexion">deconnexion</div>

<?php
    require_once("partial/layout/footer.php");