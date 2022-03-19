//On crée une date
let date1 = new Date();
let date = new Date(2023,0,1,00,00,00);
var tmp = date - date1;
/* console.log(tmp/1000%60); */

function dateDiff(date1, date2){
    var diff = {}                           
    var tmp = date2 - date1;

    tmp = Math.floor(tmp/1000);            
    diff.sec = tmp % 60;                    
 
    tmp = Math.floor((tmp-diff.sec)/60); 
    diff.min = tmp % 60;               
 
    tmp = Math.floor((tmp-diff.min)/60);
    diff.hour = tmp % 24;                
     
    tmp = Math.floor((tmp-diff.hour)/24);
    diff.day = tmp;
     
    return diff;
}
diff = dateDiff(date1, date);
let Jours = diff.day;
let Heures =diff.hour;
let Minutes = diff.min;
let Secondes = diff.sec;

var list = document.getElementById('list').getElementsByTagName('td');
 

document.body.onload=function(){
    list[1].innerText=Jours;
    list[2].innerText=Heures;
    list[3].innerText=Minutes;
    list[4].innerText=Secondes; 
    setInterval(() => {
        window.location.reload();
        list[1].innerText=Jours;
        list[2].innerText=Heures;
        list[3].innerText=Minutes;
        list[4].innerText=Secondes; 
    }, 1000);
}
setInterval(list[4].innerText=Secondes,1000);

console.log(Jours);
console.log(Heures);
console.log(Minutes);
console.log(Secondes);
