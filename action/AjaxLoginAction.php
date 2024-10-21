<?php
require_once("action/CommonAction.php");

class AjaxLoginAction extends CommonAction {

    public function __construct() {
        parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
    }

    protected function executeAction() {
        $data = [];
        $username = $_POST['username'];
        $password = $_POST['password'];

        $data = [
            'username' => $username,
            'password' => $password
        ];

        $result = CommonAction::callAPI("signin", $data);
   
        if ($result == "INVALID_USERNAME_PASSWORD") {
            
            return ["error" => "INVALID_USERNAME_PASSWORD"];
            
        }
        else {
         
            $_SESSION["key"] = $result->key; 
            $_SESSION["username"] = $_POST["username"];
            $_SESSION["logout"] = false;
            return ["result" => $result];
        }
        
    }
}