window.onload = function () {
    var intervalID;
    var seconds = '00';
    var tens = '00';

    var getSeconds = document.getElementById("seconds");
    var getTens = document.getElementById("tens");

    var buttonStart = document.getElementById("buttonStart");
    var buttonStop = document.getElementById("buttonStop");
    var buttonReset = document.getElementById("buttonReset");


    buttonStart.onclick = function() {

        clearInterval(intervalID);
        intervalID =  setInterval(startTimer,1);
    }

    buttonStop.onclick = function() {
        clearInterval(intervalID);
    }


    buttonReset.onclick = function() {
        clearInterval(intervalID);
        tens= "00";
        seconds ="00"
        getTens.innerHTML = tens;
        getSeconds.innerHTML = seconds;
    }

    function startTimer () {
    tens++;
    
    if (tens <= 9) {
        getTens.innerHTML = "0" + tens;
    }

    if (tens > 9 ) {
        // if tens > 9  leave it as it is
        getTens.innerHTML = tens;

    }

    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = "0" + seconds;
        tens = "0";
        getTens.innerHTML = "0" + tens;
    }

    if(seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    console.log(getSeconds.innerHTML);
    }

}
  
