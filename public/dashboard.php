<?php
    require_once("action/AjaxDashboardAction.php");

    $action = new AjaxDashboardAction();
    $data = $action->execute();

    $data["titlepage"] = "Dashboard";
    require_once("partial/layout/header.php");
    
?>  

<script type="module" defer src="script/dashboard.js"></script>
<link rel="stylesheet" href="style\css\dashboard.css">

    
    <div class="blob_shadow_blur"></div>
    <div class="return-home">
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2213 26H1V8.22656L13.5 1L26 8.22656V26H16.7787V17.6016C16.7787 16.625 16.123 14.6719 13.5 14.6719C10.877 14.6719 10.2213 16.625 10.2213 17.6016V26Z" fill="white" stroke="black"/>
        </svg>

    </div>
    <div class="container-dash">
    
        <div class="container-dashboard-choice">
            <div class="dashboard-name"></div>
            <div class="user-stats-container">
                <div>Taux de victoire</div>
                <div class="victoire"></div>
            </div>
            
            <div class="container-choice-bottom">
                <div class="choice-container">
                    <div class="click-choice">Trier par : <span class="value-trier"></span></div>
                </div>
                <div class="container-choice-different-data">

                        <div class="choice-usager-container">

                            <div class="usager-div-name">Ennemi</div>
                            <div class="choice-usager">
                            </div>
                        </div>

                        <div class="choice-type-container">
                            <div class="type-div-name">Type</div>
                            <div class="choice-type">
                            </div>
                        </div>
                    </div>
                <button id="confirmer-choix-board" onclick="document.getElementById('sectionstats').scrollIntoView({behavior: 'smooth'});">
                    Confirmer
                </button>
            </div>
        </div>
        <div id="sectionstats" class="dash-stats">
            <div class="wrapper-stats">
                <div class="header-table">
                    <div class="vous">
                        <div>JOUEUR</div>
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