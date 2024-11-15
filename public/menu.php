<?php
    require_once("action/MenuAction.php");

    $action = new MenuAction();
    $data = $action->execute();


    require_once("partial/layout/header.php");
?>  
    <script defer src="script/menu.js"></script>
    <script type="module" defer src="script/typeGame.js"></script>
    <link  rel="stylesheet" href="style/css/menu.css">

    <div class="container-theme">
        <div class="theme1" id="bg3"></div>
        <div class="theme2" id="bg4"></div>
        <div class="theme3" id="bg5"></div>
        <div class="theme4" id="bg6"></div>
        <div class="theme6" id="bg8"></div>
    </div>

   <div class="container-menu">
       <div class="wrapper-menu">
            <div class="title-menu">
                
            </div>
            <div class="list-menu">
                <ul>
                    <li id="partie_lancer_pvp">commencer une partie</li>
                    <li id="entrainement">entrainement</li>
                    <li id="openchat">chat en ligne</li>
                    <li id="theme">theme</li>
                    <li id="dashboard">dashboard</li>
                    <li id="deconnexion">quitter</li>
                </ul>
            </div>
            <div class="version">VERSION - IN PRODUCTION</div>
       </div>
   </div>
  
   <div class="iframe-container">
    <iframe id="iframe" style="width:100%;height:600px;" onload="applyStyles(this)" 
                    src="https://magix.apps-de-cours.com/server/chat/<?= $_SESSION["key"] ?>">  
        </iframe>
   </div>

<?php
    require_once("partial/layout/footer.php");