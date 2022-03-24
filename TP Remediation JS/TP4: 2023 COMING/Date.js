function countDown() {
    let date1 = new Date();
    let date = new Date(date1.getFullYear()+1,0,1,00,00,00);
    var tmp = date - date1;
    var td = document.querySelectorAll('td');
    console.log(td);
    var duration = moment.duration(tmp,'milliseconds');
    var table = ["<h1>On sera en 2023 dans :</h1>",moment(date).diff(moment(date1), 'days'),duration._data.hours,duration._data.minutes,duration._data.seconds,"Jours","Heures","Minutes","Secondes"]
    var i=0;
    for (let index = 0; index <= td.length; index++) {
        const element = td[index];
        element.innerHTML=table[i];
        i++;
    }
}

setInterval(() => {
    countDown();
},1000);



