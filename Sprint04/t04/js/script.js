let game = ['Eternal', 'Doom', 'Apex', 'rainbow', 'souls'];
let current = 'Eternal';

let element = document.getElementsByClassName("element");
let title = document.getElementById("title");
let info = document.getElementById("info");
let actor1 = document.getElementById("actor1");
let actor2 = document.getElementById("actor2");
let actor3 = document.getElementById("actor3");
let actor4 = document.getElementById("actor4");
let description = document.getElementById("description");
let image = document.getElementById("imageSource");

function Eternal() {
    if(current == "Eternal")
        return;
    else {
        current = "Eternal";
        update();
    }
}
function Doom() {
    if(current == "Doom")
        return;
    else {
        current = "Doom";
        update();
    }
}
function Apex() {
    if(current == "Apex")
        return;
    else {
        current = "Apex";
        update();
    }
}
function rainbow() {
    if(current == "rainbow")
        return;
    else {
        current = "rainbow";
        update();
    }
}
function souls() {
    if(current == "souls")
        return;
    else {
        current = "souls";
        update();
    }
}

function update() {
    if(current === game[0]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#8B0000";
            element[i].style.borderLeft = 'none';
            element[i].style.borderBottomLeftRadius = '10px';
        }
        document.getElementById('Eternal').style.borderLeft = 'solid 3.9px #8B0000';
        document.getElementById('Eternal').style.borderBottomLeftRadius = '2px';
        title.innerText = "Doom Eternal"
        info.innerHTML = "PG18 &nbsp;&nbsp;&#124&nbsp;&nbsp; id Software &nbsp;&nbsp;&#124&nbsp;&nbsp; First-person shooter &nbsp;&nbsp;&#124&nbsp;&nbsp; 20 March 2020";
        actor1.innerText = "Hugo Martin";
        actor2.innerText = "Timothy Bell";
        actor3.innerText = "Evan Eubanks";
        actor4.innerText = "Billy Ethan Khan";
        description.innerText = "Doom Eternal is a first-person shooter game developed by id Software and published by Bethesda Softworks. The sequel to Doom (2016), and the fifth main game in the Doom series, it was released on March 20, 2020, for Windows, PlayStation 4, Stadia and Xbox One, with a version for Nintendo Switch being released on December 8, 2020 and versions for PlayStation 5 and Xbox Series X and Series S being planned. Set some time after the events of the 2016 game, the story follows the Doomguy once again, on a mission to end Hell's consumption of Earth and foil the alien Maykr's plans to exterminate humanity.";
        crossfade("https://upload.wikimedia.org/wikipedia/ru/8/8c/Обложка_Doom_Eternal.jpg");
    }
    else if(current === game[1]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#A38209";
            element[i].style.borderLeft = 'none';
            element[i].style.borderBottomLeftRadius = '10px';
        }
        document.getElementById('Doom').style.borderLeft = 'solid 3.9px #A38209';
        document.getElementById('Doom').style.borderBottomLeftRadius = '2px';
        title.innerText = "Doom"
        info.innerHTML = "PG18 &nbsp;&nbsp;&#124&nbsp;&nbsp; id Software &nbsp;&nbsp;&#124&nbsp;&nbsp; First-person shooter &nbsp;&nbsp;&#124&nbsp;&nbsp; May 13, 2016";
        actor1.innerText = "Marty Stratton";
        actor2.innerText = "Hugo Martin";
        actor3.innerText = "Timothy Bell";
        actor4.innerText = "Billy Ethan Khan";
        description.innerText = "Doom is a 2016 first-person shooter video game developed by id Software and published by Bethesda Softworks. Part of the Doom franchise, it is the first major installment in the series since Doom 3 (2004). Players take the role of an unnamed space marine as he battles demonic forces from Hell that have been unleashed by the Union Aerospace Corporation within their energy-mining facility on Mars. The gameplay returns to a faster pace with more open-ended levels, closer to the first two games than the slower survival horror approach of Doom 3. It also features environment traversal, character upgrades, and the ability to perform executions known as glory kills.";
        crossfade("https://i.playground.ru/e/2GigHbb4tLSn3SltqZQMOQ.jpeg")
    }
    else if(current === game[2]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#C13128";
            element[i].style.borderLeft = 'none';
            element[i].style.borderBottomLeftRadius = '10px';
        }
        document.getElementById('Apex').style.borderLeft = 'solid 3.9px #2B0908';
        document.getElementById('Apex').style.borderBottomLeftRadius = '2px';
        title.innerText = "Apex Legends"
        info.innerHTML = "PG13 &nbsp;&nbsp;&#124&nbsp;&nbsp; Respawn Entertainment &nbsp;&nbsp;&#124&nbsp;&nbsp; battle royale &nbsp;&nbsp;&#124&nbsp;&nbsp; February 4, 2019";
        actor1.innerText = "Chad Grenier";
        actor2.innerText = "Ben Brinkman";
        actor3.innerText = "Jason McCord";
        actor4.innerText = "Stephen Barton";
        description.innerText = "Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One in February 2019, and for Nintendo Switch in March 2021. Ports for Android and iOS are also scheduled to be released by 2022. The game supports cross-platform play.";
        crossfade("https://upload.wikimedia.org/wikipedia/ru/1/17/Обложка_Apex_Legends.jpg");
    }
    else if(current === game[3]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#878580";
            element[i].style.borderLeft = 'none';
            element[i].style.borderBottomLeftRadius = '10px';
        }
        document.getElementById('rainbow').style.borderLeft = 'solid 3.9px #878580';
        document.getElementById('rainbow').style.borderBottomLeftRadius = '2px';
        title.innerText = "Tom Clancy's Rainbow Six Siege"
        info.innerHTML = "PG13 &nbsp;&nbsp;&#124&nbsp;&nbsp; Ubisoft &nbsp;&nbsp;&#124&nbsp;&nbsp; tactical shooter &nbsp;&nbsp;&#124&nbsp;&nbsp; December 1, 2015";
        actor1.innerText = "Xavier Marquis";
        actor2.innerText = "Sebastien Labbe";
        actor3.innerText = "Daniel Drapeau";
        actor4.innerText = "Jalal Eddine El Mansouri";
        description.innerText = "Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on December 1, 2015; the game was also released for PlayStation 5 and Xbox Series X/S exactly five years later on December 1, 2020. The game puts heavy emphasis on environmental destruction and cooperation between players. Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage, defusing a bomb, and taking control of an objective within a room. The title has no campaign but features a series of short, offline missions called, situations that can be played solo. These missions have a loose narrative, focusing on recruits going through training to prepare them for future encounters with the White Masks, a terrorist group that threatens the safety of the world.";
        crossfade("https://static.gabestore.ru/product/oLkdsrFNUjX2Zlm54LO4xCqofLnaHxGf.jpg");
    }
    else if(current === game[4]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#A38209";
            element[i].style.borderLeft = 'none';
            element[i].style.borderBottomLeftRadius = '10px';
        }
        document.getElementById('souls').style.borderLeft = 'solid 3.9px #A38209'
        document.getElementById('souls').style.borderBottomLeftRadius = '2px';
        title.innerText = "Dark Souls 3"
        info.innerHTML = "M &nbsp;&nbsp;&#124&nbsp;&nbsp; FromSoftware &nbsp;&nbsp;&#124&nbsp;&nbsp; Action role-playing &nbsp;&nbsp;&#124&nbsp;&nbsp; April 12, 2016";
        actor1.innerText = "Hidetaka Miyazaki";
        actor2.innerText = "Isamu Okano";
        actor3.innerText = "Yui Tanimura";
        actor4.innerText = "Hiroshi yoshida";
        description.innerText = "Dark Souls III is an action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment for PlayStation 4, Xbox One, and Microsoft Windows. The fourth installment of the Souls series and the final installment of the Dark Souls trilogy, the game was released in Japan in March 2016 and worldwide a month later.";
        crossfade("https://upload.wikimedia.org/wikipedia/ru/b/bb/Dark_souls_3_cover_art.jpg");
    }
}
  
function crossfade(name) {
    setTimeout(() => image.classList.add("crossfade"), 200);
    setTimeout(() => image.src = name, 250);
    setTimeout(() => image.classList.remove("crossfade"), 300);
}
