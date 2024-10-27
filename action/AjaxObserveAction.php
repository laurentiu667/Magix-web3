<?php
    require_once("action/CommonAction.php");
  

    class AjaxObserveAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

  

        protected function executeAction() {
            $userObserve = $_POST["username"];

            $data = [
                "key" => $_SESSION["key"],
                "username" => "$userObserve"
            ];
         
            
            $result = parent::callAPI("games/observe", $data);
            return compact("result");
            
        }
    }