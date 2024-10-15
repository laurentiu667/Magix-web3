<?php
require_once("action/ArenaProtoAction.php");

$action = new ArenaProtoAction();
$data = $action->execute();

echo json_encode($data);



?>