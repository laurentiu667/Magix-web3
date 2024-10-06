<?php
    require_once("action/AjaxLoginAction.php");

    $action = new AjaxLoginAction();
    $data = $action->execute();
    echo json_encode($data);