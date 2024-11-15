<?php
    require_once("action/AjaxTypeGameAction.php");

    $action = new AjaxTypeGameAction();
    $data = $action->execute();
    
    
    echo json_encode($data["result"]);

    
