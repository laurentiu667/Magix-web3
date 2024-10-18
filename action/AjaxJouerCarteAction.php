<?php
    require_once("action/CommonAction.php");

    class AjaxJouerCarteAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
                // Récupérer les paramètres envoyés par JavaScript
                $key = $_SESSION['key'];            // Récupère la clé de session
                $type = $_POST['type'];          // Récupère le type d'action (ex: 'PLAY', 'ATTACK', 'END_TURN')
                $uid = $_POST['uid'] ?? null;    // Récupère l'UID de la carte si présent
                $targetUid = $_POST['targetuid'] ?? null;  // Récupère l'UID de la cible si présent
            
                // Appeler l'API Magix avec ces informations (par exemple, une fonction callAPI)
                $data = [
                    "key" => $key,
                    "type" => $type,
                ];
            
                // Ajouter des paramètres supplémentaires selon le type d'action
                if ($type === 'PLAY' || $type === 'ATTACK') {
                    $data["uid"] = $uid;
                }
            
                if ($type === 'ATTACK' && $targetUid !== null) {
                    $data["targetuid"] = $targetUid;
                }
            
                // Appeler l'API pour faire l'action (jouer une carte, attaquer, etc.)
                $result = callAPI("games/action", $data);
            }
           
        }
    }