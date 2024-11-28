<?php
    require_once("action/MenuAction.php");
    
    $action = new MenuAction();
    $data = $action->execute();
    
    $data["titlepage"] = "Menu";
    
    require_once("partial/layout/header.php");
    
    ?>  
    <script defer src="script/menu.js"></script>
    <script type="module" defer src="script/typeGame.js"></script>
    <script type="module" defer src="script/logout.js"></script>
    <script type="module" defer src="script/chat.js"></script>
    <link  rel="stylesheet" href="style/css/menu.css">
    <link  rel="stylesheet" href="style/css/chat.css">
    
    
    
    <div class="iframe-container">
         <div class="fermer-chat"></div>
         <div class="wrapper-iframe">
           
    
             <div class="top-message-container">
                 <div class="left-container-user-connected"></div>
                 <div class="list-user--in-game">
    
                     <!-- <div class="container-user-in-game">
    
                         <div class="gb-fpc first-player-container">
    
                             <div class="name-in-game"></div>
                             <div class="health-in-game"></div>
    
                         </div>
    
                         <div class="gb-fpc second-player-container">
    
                             <div class="name-in-game name-in-game-second"></div>
                             <div class="health-in-game name-in-game-second"></div>
    
                         </div>
    
                     </div> -->
                     
    
                 </div>
             </div>
    
             <div class="bottom-message-users-container">
                 <div class="message--class-global">
    
                     <!-- <div class="test user-mess-container1">
                         <div class="heure-user">
                             <span>[</span>
                             <span class="heure-input">12:23</span>
                             <span>]</span>
                         </div>
                         <div class="mess--user-real-time">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate deserunt, eius explicabo nesciunt eum maxime ex velit illum accusantium.</div>
                     </div> -->
    
                     
                 </div>
                 <form class="chat-form">
                     <div class="container-send--message">
                         <input type="text" class="message--class-input" placeholder="message">
                         <button type="submit" class="message--class-button-send">Envoyer</button>
                         <button type="submit" class="message--class-button-send-small-device"></button>
                     </div>
                 </form>
             </div>
         </div>
    </div>
    
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
                    <li id="entrainement">entraînement</li>
                    <li id="openchat" class="open-chat-button">chat en ligne</li>
                    <li id="theme">thème</li>
                    <li id="dashboard">tableau de bord</li>
                    <li id="inputUserObservediv"> 
                        <input type="text" placeholder="joueur à observer..." name="inputUserObserve" id="inputUserObserve">
                    </li>
                    <li id="deconnexion">quitter</li>
                </ul>
            </div>
            <div class="nom-joueur"></div>
        </div>
   </div>
   

   <?php
    require_once("partial/layout/footer.php");