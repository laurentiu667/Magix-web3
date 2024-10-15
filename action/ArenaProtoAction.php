<?php
require_once("action/CommonAction.php");

class ArenaProtoAction extends CommonAction {

    public function __construct() {
        parent::__construct(CommonAction::$VISIBILITY_MEMBER);
    }

    protected function executeAction() {
        $data = [
            "key" => $_SESSION["key"],
            "type" => "PVP"
        ];

        $typegame = CommonAction::callAPI("games/auto-match", $data);

        if (in_array($typegame, ["JOINED_PVP", "CREATED_PVP", "JOINED_TRAINING"])) {
            $gamestate = CommonAction::callAPI("games/state", $data);
            
            if (in_array($gamestate, ["WAITING", "LAST_GAME_WON", "LAST_GAME_LOST"])) {
                return ["gamestate" => $gamestate];
            }
            
            // Résultat de la partie, données supplémentaires, etc.

            // JOUEUR ET ENNEMI
            return ["gamestate" => $gamestate];
        }

        return ["typegame" => $typegame];
    }
}
