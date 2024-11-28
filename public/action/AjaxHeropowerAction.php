<?php
    require_once("action/CommonAction.php");
 

    class AjaxHeropowerAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            
            $data = [
                "key" => $_SESSION["key"],
                "type" => "HERO_POWER"
            ];
    
            $result = parent::callAPI("games/action", $data);
           
            return compact("result");
            
        
        }
    }