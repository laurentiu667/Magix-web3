<?php
    require_once("action/AjaxJouerCarteAction.php");

    $action = new AjaxJouerCarteAction();
    $data = $action->execute();

    echo json_encode($data);