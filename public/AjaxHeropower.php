<?php
    require_once("action/AjaxHeropowerAction.php");

    $action = new AjaxHeropowerAction();
    $data = $action->execute();

    echo json_encode($data["result"]);