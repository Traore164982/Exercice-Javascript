var Questions =[
                {question:"Quelle Nation fût dernièrement Champion d'Afrique ?",
                    a:"Sénégal",
                    b:"Bénin",
                    c:"Togo",
                    d:"Zambie",
                    correct:"a"},
                {
                question:"En quelle année suis-je né ?",
                    a:"1990",
                    b:"1999",
                    c:"1996",
                    d:"1993",
                    correct:"c"},
                {
                question:"Qui fût le prédécesseur de François Hollande ?",
                    a:"Nicolas Sarkory",
                    b:"Chaques Chirak",
                    c:"Général de Gaulle",
                    d:"François Mitérand",
                    correct:"a"},
                {
                question:"La Date de l'Hégire ?",
                    a:"632",
                    b:"627",
                    c:"623",
                    d:"622",
                    correct:"d"},
                {
                question:"La Date de Naissance du Prophete Mouhamed (PSL)?",
                    a:"570",
                    b:"567",
                    c:"579",
                    d:"575",
                    correct:"a"},
                /* {
                question:"Le Meilleur Joueur de l'Histoire du Football ?",
                    a:"Lionel Messi",
                    b:"Gareth Bale",
                    c:"Christiano Ronaldo",
                    d:"Iniesta",
                    correct:"a"} */
                ];

var br = document.createElement('br');
var question = document.getElementById("quest");
var send = document.createElement('button');
h1 = document.getElementById('h1');
h1.setAttribute('id','#h1');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var test = "";
console.log(test);
send.innerText= "Suivant";
console.log(send);
var i = 0;
var y = 0;
var score = 0;
var sending = document.getElementById('sending');
sending.appendChild(send);

function affiche(y){
    h1.innerText =Questions[y].question;
    a.innerText = Questions[y].a;
    b.innerText = Questions[y].b;
    c.innerText = Questions[y].c;
    d.innerText = Questions[y].d;
    
}
affiche(y);
function Suivant(){
    var input = document.querySelector('input[type="radio"]:checked');
    if(input==null){
        document.getElementById('sp').innerText = "Veuillez Cocher une Case";
    }else{
        document.getElementById('sp').innerText = "";
       if (i<5) {
           console.log(input.value);
           console.log(Questions[y].correct);
           if (input.value === Questions[y].correct) {
               score +=1;
           }
        console.log(i);
        console.log(score);
        affiche(y);
        y+=1;
       }else{
        document.getElementById('h2').innerText ="Votre score est :"+score+"/"+y;
           document.getElementById('main1').style.visibility ="visible";
           document.getElementById('main2').style.visibility = "hidden";
           document.getElementById('sending').style.visibility = "hidden";           
       }
        input.checked=false;
        i+=1;
    }

}
