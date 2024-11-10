<?php
    require_once("action/AjaxDashboardAction.php");

    $action = new AjaxDashboardAction();
    $data = $action->execute();


    require_once("partial/layout/header.php");
?>  

<script type="module" defer src="script/dashboard.js"></script>
<link rel="stylesheet" href="style\css\dashboard.css">


    <div class="container-dash">
    <div class="blob_shadow_blur"></div>
        <div class="container-dashboard-choice">
            <div class="dashboard-name">DASHBOARD</div>
            <div class="container-choice-bottom">
                <div class="choice-container">Trier par : date</div>
                <button id="confirmer-choix-board">Confirmer</button>
            </div>
        </div>
        <div class="dash-stats">
            <div class="wrapper-stats">

                <div class="header-table">
                   
                    <div class="vous">
                        <div>VOUS</div>
                    </div>
                    <div class="ennemi">
                        <div>ENNEMI</div>
                    </div>
                    <div class="date">
                        <div>DATE</div>
                    </div>
                    <div class="gagnant">
                        <div>GAGNANT</div>
                    </div>
                </div>

                <div class="main-table">
                   
                    

                   

                </div>

            </div>
        </div>
    </div>

<?php
    require_once("partial/layout/footer.php");