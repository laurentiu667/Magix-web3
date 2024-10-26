<?php
require_once("action/CommonAction.php");

class AjaxTypeGameAction extends CommonAction {

    public function __construct() {
        parent::__construct(CommonAction::$VISIBILITY_MEMBER);
    }

    protected function executeAction() {
        $data = [
            "key" => $_SESSION["key"],
            "type" => "TRAINING"
        ];

        $result = parent::callAPI("games/auto-match", $data);
       
        return compact("result");
        
    
    }
}
