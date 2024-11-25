<?php
    require_once("action/CommonAction.php");
    require_once("action/AjaxTypeGameAction.php");
   
 
    class AjaxGameAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }
    
        protected function executeAction() {
            $usernameObserve = $_POST["usernameObserve"] ?? null; 
            $data = [
                "key" => $_SESSION["key"],
            ];
            
            if (!empty($usernameObserve)) {
                $data["username"] = $usernameObserve;
                $result = parent::callAPI("games/observe", $data); 
            } else {
                $result = parent::callAPI("games/state", $data); 
            }
        
       
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