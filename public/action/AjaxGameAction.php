<?php
require_once("action/CommonAction.php");
require_once("action/AjaxTypeGameAction.php");
require_once("action/DAO/UserDataBase.php");

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
            $_SESSION["partie_gagne"] = true;
        } elseif ($result === "LAST_GAME_LOST") {
            $_SESSION["partie_perdu"] = true;
        }

        if ($_SESSION["partie_gagne"]) {
            UserDataBase::enregistrementPartie($_SESSION["username"], $_SESSION["ennemi"], $_SESSION["username"]);
            $_SESSION["partie_gagne"] = false;
        }

        if ($_SESSION["partie_perdu"]) {
            UserDataBase::enregistrementPartie($_SESSION["username"], $_SESSION["ennemi"], $_SESSION["ennemi"]);
            $_SESSION["partie_perdu"] = false;
        }
       
        return compact("result");
    }
}
