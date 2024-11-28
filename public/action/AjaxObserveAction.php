<?php
require_once("action/CommonAction.php");
require_once("action/DAO/UserDataBase.php");

class AjaxObserveAction extends CommonAction {

    public function __construct() {
        parent::__construct(CommonAction::$VISIBILITY_MEMBER);
    }

    protected function executeAction() {
        $usernameObserve = $_POST["usernameObserve"] ?? null; 
    
        $data = [
            "key" => $_SESSION["key"],
            "username" => $usernameObserve
        ];
    
        $result = parent::callAPI("games/observe", $data);

       
        return compact("result");
    }
}
