<?php
    require_once("action/CommonAction.php");

    class AjaxJouerCarteAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            
            $key = $_SESSION['key'];         
                $type = $_POST['type'];       
                $uid = $_POST['cardUID'] ?? null;    
                $targetUid = $_POST['targetUID'] ?? null;  
            
             
                $data = [
                    "key" => $key,
                    "type" => $type,
                ];
            
             
                if ($type === 'PLAY' || $type === 'ATTACK') {
                    $data["uid"] = $uid;
                }
            
                if ($type === 'ATTACK' && $targetUid !== null) {
                    $data["targetuid"] = $targetUid;
                }
            
                $result = parent::callAPI("games/action", $data);
                return compact("result");
           
        }
    }