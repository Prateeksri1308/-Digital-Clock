 let hrs = document.getElementById("hrs");
 let min = document.getElementById("min");
 let sec = document.getElementById("sec");

 



 function UpdateTime() {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hrs.innerText = hours < 10 ? "0" + hours : hours;
    min.innerText = minutes < 10 ? "0" + minutes : minutes;
    sec.innerText = seconds < 10 ? "0" + seconds : seconds;

console.log("currentTime: ", hours);
 }
 UpdateTime();
 setInterval(UpdateTime, 1000);
