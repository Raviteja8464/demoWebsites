console.log("New")
let hr = document.getElementById("hour-hand")
let min = document.getElementById("min-hand")
let sec = document.getElementById("sec-hand");
let date = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let time = document.getElementById("timedate");

function displaytime(){
       
       let getTime = new Date();
       time.textContent = getTime
       let getHour = getTime.getHours();
       let getmin = getTime.getMinutes();
       let getsec = getTime.getSeconds();
       
       let hrotation = (30 * getHour) + (getmin/2)
       let mrotation = 6 * getmin;
       let srotation = 6 * getsec;
       //console.log(hrotation);
       //console.log(mrotation);
       //console.log(srotation);
       hr.style.transform = `rotate(${hrotation}deg)`
       min.style.transform = `rotate(${mrotation}deg)`
       sec.style.transform = `rotate(${srotation}deg)`
       //---------------------------------------------------------
       
       date.textContent = getTime.getDate();
       if ((getTime.getMonth() + 1) <= 10) {
        month.textContent = `0${getTime.getMonth() + 1}`;;
        month.style.color = "red "
       }
       else {
        month.textContent = `${getTime.getMonth() + 1}`;
       }
       
       year.textContent = getTime.getFullYear();
}
setInterval(displaytime,1000);