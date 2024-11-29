<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/UserDataBase.php");

    class AjaxDashboardAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {

            $usager_choisi = $_POST["usager"] ?? null; 

            $result = [
                'parties' => UserDataBase::getParties(),
                'ennemis' => UserDataBase::getNomDesUsagers(),
                'username' => UserDataBase::getPartiesUsagerSpecifique($usager_choisi),
                'totalpartie' => UserDataBase::getPartieUserTotal($_SESSION["username"]),
                'totalpartieGagner' => UserDataBase::getPartieUserCount($_SESSION["username"])
            ];
            
            return compact("result");
        }
    }