<?php
    require_once("action/AjaxProcessAction.php");

    $action = new AjaxProcessAction();
    $data = $action->execute();

    echo json_encode($data["result"]);