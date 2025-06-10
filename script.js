let months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
let days=["SUN","MON","TUES","WED","THRUS","FRI","SAT"]


let hours=document.getElementById("hrs");
let minute=document.getElementById("mins");
let second=document.getElementById("secs");
let date=document.getElementById("dat");
let month=document.getElementById("month");
let day=document.getElementById("day");
let year=document.getElementById("year");
let ampm=document.getElementById("am-pm");


setInterval(()=>{
  let time = new Date;
hours.innerHTML=(time.getHours()<10?"0":"")+ time.getHours();
minute.innerHTML=(time.getMinutes()<10?"0":"") + time.getMinutes();
second.innerHTML=(time.getSeconds()<10?"0":"" )+ time.getSeconds();
date.innerHTML=time.getDate();
month.innerHTML=months[time.getMonth()];
year.innerHTML=time.getFullYear();
day.innerHTML=days[time.getDay()]
ampm.innerHTML=time.getHours()>=12?"PM":"AM"

},1000)

