<?php
    require_once("action/AjaxDashboardAction.php");

    $action = new AjaxDashboardAction();
    $data = $action->execute();


    require_once("partial/layout/header.php");
?>  

<script type="module" defer src="script/dashboard.js"></script>
<link rel="stylesheet" href="style\css\dashboard.css">

    <div class="container-dash"></div>

<?php
    require_once("partial/layout/footer.php");