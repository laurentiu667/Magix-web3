<?php
    require_once("action/AjaxSurrenderAction.php");

    $action = new AjaxSurrenderAction();
    $data = $action->execute();

    echo json_encode($data["result"]);