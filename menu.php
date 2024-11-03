<?php
    require_once("action/MenuAction.php");

    $action = new MenuAction();
    $data = $action->execute();


    require_once("partial/layout/header.php");
?>  
    <script defer src="script/menu.js"></script>
    <script type="module" defer src="script/typeGame.js"></script>
    <link  rel="stylesheet" href="style/css/menu.css">
    <audio id="menuaudio" autoplay src="Audio/hover-effect.mp3"></audio>

  
    <div class="rideau"></div>
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
                <h1 class="The">The</h1>
                <h1 class="EldenRing">Elden Ring</h1>
                <h1 class="Magix">Magix</h1>
                <h1 class="X">X</h1>
               
                <h1 class="Game">Game</h1>
            </div>
            <div class="list-menu">
                <ul>
                    <li id="partie_lancer_pvp">commencer une partie</li>
                    <li id="entrainement">entrainement</li>
                    <li>commencer une grande partie</li>
                    <li id="openchat">chat en ligne</li>
                    <li id="theme">theme</li>
                    <li id="deconnexion">quitter</li>
                </ul>
            </div>
            <div class="version">VERSION - IN PRODUCTION</div>
       </div>
   </div>
   <div class="audio-off-on">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="sound-max" class="icon glyph" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.36,19.36a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.41,8,8,0,0,0,0-11.32,1,1,0,0,1,1.41-1.41,10,10,0,0,1,0,14.14A1,1,0,0,1,18.36,19.36Z" style="fill:#231f20"></path><path d="M15.54,16.54a1,1,0,0,1-.71-.3,1,1,0,0,1,0-1.41,4,4,0,0,0,0-5.66,1,1,0,0,1,1.41-1.41,6,6,0,0,1,0,8.48A1,1,0,0,1,15.54,16.54Z" style="fill:#231f20"></path><path d="M11.38,4.08a1,1,0,0,0-1.09.21L6.59,8H4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H6.59l3.7,3.71A1,1,0,0,0,11,20a.84.84,0,0,0,.38-.08A1,1,0,0,0,12,19V5A1,1,0,0,0,11.38,4.08Z" style="fill:#231f20"></path></g></svg>
   </div>
   <div class="iframe-container">
    <iframe id="iframe" style="width:100%;height:600px;" onload="applyStyles(this)" 
                    src="https://magix.apps-de-cours.com/server/chat/<?= $_SESSION["key"] ?>">  
        </iframe>
   </div>

<?php
    require_once("partial/layout/footer.php");