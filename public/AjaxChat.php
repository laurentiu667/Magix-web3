<?php
    require_once("action/AjaxChatAction.php");

    $action = new AjaxChatAction();
    $data = $action->execute();

    echo json_encode($data["result"]);