<?php
    require_once("action/CommonAction.php");

    class AjaxEndTurnAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
           
            $key = $_SESSION['key'];            
            $type = "END_TURN";                
         
            $data = [
                "key" => $key,
                "type" => $type,
            ];
            
            $result = parent::callAPI("games/action", $data);
            return compact("result");
           
        }
    }