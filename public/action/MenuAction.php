<?php
    require_once("action/CommonAction.php");

    class MenuAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            $titlepage = "Menu";
            return compact("titlepage");
        }
    }