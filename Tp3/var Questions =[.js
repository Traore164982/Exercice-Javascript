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
        b:"1996",
        c:"1999",
        d:"1993",
        correct:"c"},
    {
    question:"Qui fût le prédécesseur de François Hollande ?",
        a:"Nicolas Sarkory",
        b:"Chaques Chirak",
        c:"Général de Gaulle",
        d:"François Mitérand",
        correct:"Nicolas Sarkory"},
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
    {
    question:"Le Meilleur Joueur de l'Histoire du Football ?",
        a:"Lionel Messi",
        b:"Gareth Bale",
        c:"Christiano Ronaldo",
        d:"Iniesta",
        correct:"a"}
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
var score = 0;
var Question = null;
var sending = document.getElementById('sending');
sending.appendChild(send);
affiche();
var T=[];
var y=1;
function affiche(y){
// var y=(Math.floor(Math.random()*Questions.length));
console.log(y);
h1.innerText =Questions[y].question;
a.innerText = Questions[y].a;
b.innerText = Questions[y].b;
c.innerText = Questions[y].c;
d.innerText = Questions[y].d;
/*      for (let index = 0; index < T.length; index++){         
if (T[index]==0){
    console.log(Question);
    h1.innerText =Questions[y].question;
    a.innerText = Questions[y].a;
    b.innerText = Questions[y].b;
    c.innerText = Questions[y].c;
    d.innerText = Questions[y].d;
}else{
    if(T[index]===Question){
    y=(Math.floor(Math.random()*Questions.length));
}else{
    console.log(Question);
    h1.innerText =Questions[y].question;
    a.innerText = Questions[y].a;
    b.innerText = Questions[y].b;
    c.innerText = Questions[y].c;
    d.innerText = Questions[y].d;
}
}
} */

}
function Suivant(){
var input = document.querySelector('input[type="radio"]:checked');
console.log(input);
if(input==null){
document.getElementById('sp').innerText = "Veuillez Cocher une Case";
}else{
document.getElementById('sp').innerText = "";
/*  input = false; */
if (i<5) {
affiche(y);
console.log(i);
i++;
y+=1;
}else{
document.getElementsById('main1').style.display ="none";
document.getElementsById('main2').style.display = "";
}
y+=1;
input.checked=false;
}

}

