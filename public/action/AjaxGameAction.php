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
         
            
            $result = parent::callAPI("games/state", $data);

    

            if (isset($result->opponent->username)) {
                $_SESSION["ennemi"] = $result->opponent->username;
            } elseif ($result === "LAST_GAME_WON") {
                if (empty($_SESSION["partie_gagne"])) {
                    $_SESSION["partie_gagne"] = true;
                }
            } elseif ($result === "LAST_GAME_LOST") {
                if (empty($_SESSION["partie_perdu"])) { 
                    $_SESSION["partie_perdu"] = true;
                }
            }

            
           
            return compact("result");
            
        }
    }