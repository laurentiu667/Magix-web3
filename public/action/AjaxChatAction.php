<?php
    require_once("action/CommonAction.php");

    class AjaxChatAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            $data = [
                "key" => $_SESSION["key"],
            ];

            $message_envoyer = $_POST["message"] ?? null;
            if ($message_envoyer != null) {
                $data = [
                    "key" => $_SESSION["key"],
                    "message" => $message_envoyer
                ];
                parent::callAPI("chat/new", $data);
            }

         
    
            $messages = parent::callAPI("chat", $data);

            $username = $_SESSION["username"];
            $result = [
                "messages" => $messages,
                "username" => $username
            ];
            return compact("result");
     
        }
    }