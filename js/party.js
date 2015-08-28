// JavaScript source code

$(document).ready(function () {

    var flashInterval = []; // setInterval instances tracked in this.
    var partyTime = false;

    $("#partyTime").click(function () {
        if (partyTime == false) {
            endFlash();
            startFlash();
            $("button").text("Stop Party Time");
            partyTime = true;
            playSound();
        } else {
            endFlash();
            $("button").text("Start Party Time");
            partyTime = false;
            killSound();
        }
    });
    

    function startFlash() {
        
        var flashNum = setInterval(function(){
            for (var c = 0; c < 11; c++) {
                $(divCount[c]).css("background-color", getColor());
            }
            }, 100);
            flashInterval.push(flashNum); // Add this setInterval Instance to tracker
        } 

    function endFlash() {
        //clear each setInterval item.
        for (var f = 0; f < flashInterval.length; f++ )  {
            clearInterval(flashInterval[f]);
        }
        flashInterval = []; //clear setInterval tracker
    }

});


var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var divCount = ["#div1","#div2","#div3","#div4","#div5","#div6","#div7","#div8","#div9","#div10"]

function getColor() {
    var newColorText = "#";

    for (i = 0; i < 6; i++)   {
        newColorText = newColorText + hex[Math.floor(Math.random() * 16)];
    }

   
    return newColorText;
}

function playSound() {
    $('#sound').html("<audio loop autoplay><source src='danceMusic.wav' type='audio/wav'></audio>");
};

function killSound() {
    $('#sound').html("");
}


