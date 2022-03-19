// var value = document.getElementById('p');
alert('TRa')
var input =document.getElementsByTagName('input');
var label =document.getElementsByTagName('label');

var label_0 = document.createElement('label');
var label_1 = document.createElement('label');
var label_2 = document.createElement('label');
var label_3 = document.createElement('label');
var label_4 = document.createElement('label');

label_0.innerText ="Longueur du Password";
label_1.innerText ="Contient des lettres Majuscules";
label_2.innerText ="Contient des lettres Minuscules";
label_3.innerText ="Contient des Nombres";
label_4.innerText ="Contient des Caractères Spéciaux";



var input_0 = document.createElement('input');
var input_1 = document.createElement('input');
var input_2 = document.createElement('input');
var input_3 = document.createElement('input');
var input_4 = document.createElement('input');
var input_5 = document.createElement('input');


input_0.setAttribute('type','number');
input_1.setAttribute('type','checkbox');
input_2.setAttribute('type','checkbox');
input_3.setAttribute('type','checkbox');
input_4.setAttribute('type','checkbox');
input_5.setAttribute('type','button');
input_5.setAttribute('class','passGen');
input_5.setAttribute('class','passGenLast');
value="Generer Le Mot de Passe"
input_5.setAttribute('value','Generer Le Mot de Passe');

var btn = document.createElement('button');
btn.setAttribute('id','copy');

var p =document.createElement('p');


var divMain = document.createElement('div');
var divPassGen = document.createElement('div');
var divp = document.createElement('div');
var divb = document.createElement('div');
var divLenght = document.createElement('div');
var divMaj = document.createElement('div');
var divMin = document.createElement('div');
var divNum = document.createElement('div');
var divChar = document.createElement('div');
var divPass = document.createElement('div');

divMain.setAttribute('id','main');
divPassGen.setAttribute('class','passGen');
divp.setAttribute('id','divp');
divb.setAttribute('id','divb');
divLenght.setAttribute('id','divLenght');
divMaj.setAttribute('id','divMaj');
divMin.setAttribute('id','divMin');
divNum.setAttribute('id','divNum');
divChar.setAttribute('id','divChar');
divPass.setAttribute('id','divPass');

// let divb = document.getElementById('divb');
// let copy = document.getElementById('copy');
// let divp = document.getElementById('divp');
divp.appendChild(p);
divb.appendChild(btn);
// let passGen = document.querySelector('.passGen');
divPassGen.appendChild(divp);
divPassGen.appendChild(divb);


// let divLenght = document.getElementById("divLenght");
divLenght.appendChild(label_0);
divLenght.appendChild(input_0);
divLenght.appendChild(document.querySelector('.chk'));
console.log(divLenght);

// let divMaj = document.getElementById("divMaj");
divMaj.appendChild(label_1);
divMaj.appendChild(input_1);
console.log(divMaj);

// let divMin = document.getElementById("divMin");
divMin.appendChild(label_2);
divMin.appendChild(input_2);
console.log(divMin);

// let divNum = document.getElementById("divNum");
divNum.appendChild(label_3);
divNum.appendChild(input_3);
console.log(divNum);

// let divChar = document.getElementById("divChar");
divChar.appendChild(label_4);
divChar.appendChild(input_4);
console.log(divChar);


divPass.appendChild(input_5);

divMain.appendChild(divPassGen);
divMain.append(divPassGen,divLenght,divMaj,divMin,divNum,divChar,divPass);

console.log(divMain);


console.log(document.getElementById("lenght").value);




function check(){
    var length = document.getElementById('lenght');
    var num = "0123456789";
    var min = "abcdefghijklmnopqrstuvwxyz";
    var maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var spe = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
    var inputs = document.getElementsByTagName('input'),
    inputsLength = inputs.length;
    var tab ="";
    
    var value = document.getElementById("lenght").value;
    console.log(value);
    for (var i = 1 ; i < inputsLength -1 ; i++) {
    if (inputs[i].type == 'checkbox' && inputs[i].checked) {
        if (input[i].id=='maj'){
           tab += maj[(Math.floor(Math.random()*maj.length))];
        }
        if (input[i].id=='min'){
            tab += min[(Math.floor(Math.random()*min.length))];
        }
        if (input[i].id=='num'){
            tab += num[Math.floor(Math.random()*num.length)];

        }
        if (input[i].id=='char'){
            tab += spe[Math.floor(Math.random()*spe.length)];
        }

    }
}
return tab;
}
// console.log(check());
document.getElementById('p').innerText = check();

function chk(){
    document.getElementById('p').value = "";
    console.log(document.getElementById('p').value);
    var recup = "";
    var retur ="";
    // console.log(check().substring(1,document.getElementById('p').value));
    // document.getElementById('p').innerText =
for (let index = 1; index <= document.getElementById('lenght').value; index++) {
        recup += check();
    }
    var val = document.getElementById('lenght').value;
    recup = recup.substring(0, val);
    console.log(recup);
    for (let index = 0; index < val; index++) {
       retur += recup[(Math.floor(Math.random()*val))];
    }
    console.log(retur);
    document.getElementById('p').innerText = retur;
    console.log(retur.length);
    // if(length(recup))
}

function move(){
    if(document.getElementById('p').innerText){
        
    }
}