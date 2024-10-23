<?php
    require_once("action/CommonAction.php");

    class AjaxEndTurnAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
                // Récupérer les paramètres envoyés par JavaScript
                $key = $_SESSION['key'];            // Récupère la clé de session
                $type = $_POST['type'];          // Récupère le type d'action (ex: 'PLAY', 'ATTACK', 'END_TURN')
               
                // Appeler l'API Magix avec ces informations (par exemple, une fonction callAPI)
                $data = [
                    "key" => $key,
                    "type" => $type,
                ];
            
                
            
                // Appeler l'API pour faire l'action (jouer une carte, attaquer, etc.)
                $result = CommonAction::callAPI("games/action", $data);
                return [
                    "result" => $result
                ];
            }
           
        }
    }