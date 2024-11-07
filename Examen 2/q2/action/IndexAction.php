<?php
    require_once("action/CommonAction.php");

    class IndexAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            if (!empty($_POST["action-type"]) && $_POST["action-type"] == "login") {
                $_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
            }
            if (!empty($_POST["action-type"]) && $_POST["action-type"] == "logout") {
                $_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
            }
            if (!empty($_POST["action-type"]) && $_POST["action-type"] == "call-done") {
                CallDAO::callDone();
            }

            $callCount = CallDAO::getCallCount();

            return compact("callCount");
        }
    }