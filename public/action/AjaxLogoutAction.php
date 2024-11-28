<?php
require_once("action/CommonAction.php");

class AjaxLogoutAction extends CommonAction {

    public function __construct() {
        parent::__construct(CommonAction::$VISIBILITY_MEMBER);
    }

    protected function executeAction() {
        $data = [];
        $data["key"] = $_SESSION["key"];

        $result = CommonAction::callAPI("signout", $data);

        if ($result == "INVALID_KEY") {
            return ["error" => "INVALID_KEY"];
        } else {
          
            $_SESSION["logout"] = true;
            return [
                "message" => "SIGNED_OUT"
            ];
        }
    }
}