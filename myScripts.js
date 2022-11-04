//CLOCK SCRIPT
function startTime() {
    const today = new Date(1.33);
    let h = today.getHours(12);
    let m = today.getMinutes(59);
    let s = today.getSeconds(60);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
   }
   
   function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
   }
   