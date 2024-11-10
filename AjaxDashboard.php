<?php
    require_once("action/AjaxDashboardAction.php");

    $action = new AjaxDashboardAction();
    $data = $action->execute();

    echo json_encode($data["result"]);