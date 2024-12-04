<?php
session_start();

abstract class CommonAction {
    protected static $VISIBILITY_PUBLIC = 0;
    protected static $VISIBILITY_MEMBER = 1;
    protected static $VISIBILITY_MODERATOR = 2;
    protected static $VISIBILITY_ADMINISTRATOR = 3;
    
    private $pageVisibility = null;

    public function __construct($pageVisibility) {
        $this->pageVisibility = $pageVisibility;
    }
    
    public function execute() {
      
        if (!empty($_SESSION["logout"])) {
            session_unset();
            session_destroy();
            session_start();
        }
        
        if (empty($_SESSION["visibility"])) {
            $_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
        }
		
	
		if (empty($_SESSION["key"])) {
			$_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
		} else {
			$_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
		}
		
	    // Initialisation des variables de session
        $_SESSION["username"] = $_SESSION["username"] ?? "erreur";
        $_SESSION["ennemi"] = $_SESSION["ennemi"] ?? "erreur";
        $_SESSION["partie_gagne"] = $_SESSION["partie_gagne"] ?? false;
        $_SESSION["partie_perdu"] = $_SESSION["partie_perdu"] ?? false;

    
        if ($this->pageVisibility > $_SESSION["visibility"]) {
            header("location:index.php");
            exit;
        }

        $data = $this->executeAction();

        $data["isConnected"] = $_SESSION["visibility"] > CommonAction::$VISIBILITY_PUBLIC;
        
        return $data;
    }
    
    abstract protected function executeAction();
		// Fonction pour call le API ( connexion )
		/**
		 * data = ['key1' => 'value1', 'key2' => 'value2'];
		 */
		protected function callAPI($service, $data) {
			$apiURL = "https://magix.apps-de-cours.com/api/" . $service;
			$result = null;
		
			if ($service == "games/action") {
			$milliseconds = microtime(true) * 1000;
		
			if (!empty($_SESSION["lastActionCall"]) && 
				$milliseconds - $_SESSION["lastActionCall"] < 250) {
				$result = json_encode("TOO_MANY_ACTIONS");
			}
						
			$_SESSION["lastActionCall"] = $milliseconds;
			}
		
			if (empty($result)) {
			$options = [
				'http' => [
				'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
				'method'  => 'POST',
				'content' => http_build_query($data)
				]
			];
		
			$context = stream_context_create($options);
		
			$result = file_get_contents($apiURL, false, $context);
			if (strpos($result, "<br") !== false) {
				$result = json_encode($result);
			}
			}
			return json_decode($result);
		}
	}
	