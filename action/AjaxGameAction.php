<?php
    require_once("action/CommonAction.php");
    require_once("action/AjaxTypeGameAction.php");

    class AjaxGameAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            $data = [
                "key" => $_SESSION["key"],
            ];
         
            
            $gamestate = CommonAction::callAPI("games/state", $data);
            return ["gamestate" => $gamestate];
            
        }
    }