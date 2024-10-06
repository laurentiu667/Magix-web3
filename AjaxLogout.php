<?php
    require_once("action/AjaxLogoutAction.php");

    $action = new AjaxLogoutAction();
    $data = $action->execute();

    echo json_encode($data);