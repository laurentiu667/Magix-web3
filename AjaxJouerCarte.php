<?php
    require_once("action/AjaxJouerCarte.php");

    $action = new AjaxJouerCarte();
    $data = $action->execute();

    echo json_encode($data);