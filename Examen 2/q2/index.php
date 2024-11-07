<?php
	require_once("action/IndexAction.php");

	$action = new IndexAction();
	$data = $action->execute();

?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Centre d'appels</title>
        <meta charset="utf-8">
        <link href="css/global.css" rel="stylesheet" />
    </head>
    <body>
		<div class="stats shaded">
			<h1>Centre d'appels CVM</h1>
			<div>
				<?= $data["callCount"] ?> appels depuis sa création!
			</div>
		</div>
        <div class="control-panel">
			<div class="shaded">
				<?php
					if ($data["isLoggedIn"]) {
						?>
						<form action="" method="post">
							<input type="hidden" name="action-type" value="call-done">
							<button>Appel complété</button>
						</form>

						<form action="" method="post">
							<input type="hidden" name="action-type" value="logout">
							<button>Se déconnecter</button>						
						</form>				
						<?php
					}
					else {
						?>
						<form action="" method="post">
							<input type="hidden" name="action-type" value="login">
							<button>Se connecter</button>						
						</form>
						<?php
					}
				?>

			</div>
		</div>
    </body>
</html>