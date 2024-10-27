<?php
require_once("action/CommonAction.php");

class AjaxTypeGameAction extends CommonAction {

    public function __construct() {
        parent::__construct(CommonAction::$VISIBILITY_MEMBER);
    }

    protected function executeAction() {

       
        $typegame = $_POST["typegame"];
        

        $data = [
            "key" => $_SESSION["key"],
            "type" => $typegame
        ];

        $result = parent::callAPI("games/auto-match", $data);
       
        return compact("result");
        
    
    }
}
