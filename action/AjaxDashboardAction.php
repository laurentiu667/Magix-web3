<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/UserDataBase.php");

    class AjaxDashboardAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {

      


            $result = [
                'parties' => UserDataBase::getParties(),
                'ennemis' => UserDataBase::getNomDesUsagers(),
                'username' => UserDataBase::getPartiesUsagerSpecifique("horloge")
            ];
            
            return compact("result");
        }
    }