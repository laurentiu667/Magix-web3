<?php
	require_once("action/IndexAction.php");

	$action = new IndexAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>
	<div id="match-picture"></div>
	<div id="match-name">--</div>

	<div class="field-section">
		<div>Entrez un champ d'intérêt et appuyez sur la touche &lt;&lt;entrée&gt;&gt;</div>
		<input type="text" id="field" />
	</div>
<?php
	require_once("partial/footer.php");
