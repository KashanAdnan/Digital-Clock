

var hour_el = document.getElementById("hour");
var minute_el = document.getElementById("minute");
var second_el = document.getElementById("second");
var ampm_el = document.getElementById("ampm");

function UpdateClock(){
    var date = new Date();
    var hour  = date.getHours();
    var minute  = date.getMinutes();
    var second  = date.getSeconds();
    var ampm = "AM";

    if(hour > 12){
        hour = hour-12;
        ampm = "PM";
    }

    hour = hour < 10 ? "0"+hour : hour;
    minute = minute < 10 ? "0"+minute : minute;
    second = second < 10 ? "0"+second : second;

    hour_el.innerHTML = hour;
    minute_el.innerHTML = minute;
    second_el.innerHTML = second;
    ampm_el.innerHTML = ampm;
    
    setTimeout(function(){
        UpdateClock();
    } ,1000);
}


UpdateClock();