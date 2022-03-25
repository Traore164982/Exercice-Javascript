const Container = document.createElement('div')
Container.id='Container'
const divCol = document.createElement('div')
divCol.className="Colonnes"
divCol.id="divCol"
const divNotes = document.createElement('div')
divNotes.className="Colonnes"
divNotes.id="divNotes"
const divCols = document.createElement('div')
divCols.id="divCols"
const Col = document.createElement('div')
Col.className="col";


var inputColonne = document.createElement('input')
inputColonne.value="Colonne"
inputColonne.type="button"
var iColonne = document.createElement('i');
iColonne.className="fa fa-plus"

var inputNotes = document.createElement('input')
inputNotes.value="Notes"
inputNotes.type="button"
var iNotes = document.createElement('i');
iNotes.className="fa fa-plus"

divCol.append(iColonne,inputColonne)
divNotes.append(iNotes,inputNotes)


Container.append(divCol,divNotes,divCols)

document.body.appendChild(Container);


function colCreate(i){
    var table =["#c8c9c4", "#c8c9c4", "#e6cace", "#C8AD7F", "#5cb863", "#DEB887" ]
    const Col = document.createElement('div')
    Col.style.backgroundColor=table[i];
    Col.style.backgroundImage="url(\"\")";
Col.className="col";
        Col.id="col"+i
        divCols.appendChild(Col);
}

function colsCreate(){
    var div = document.createElement('div');
    div.setAttribute('class','Div');
    var div1 = document.createElement('div');
    div1.setAttribute('id','Div1');
    var div2 = document.createElement('div');
    div2.setAttribute('id','Div2');

    const h = document.createElement('h2');
    const p = document.createElement('p');
    p.id="";
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    p1.id="";

    p.innerText="Descript";
    img.setAttribute('src',``);
    p1.innerHTML = "Tra: <br><br>";
    h.innerText="Titre";
    div1.appendChild(img);
    div2.append(h);
    div2.appendChild(p);
    div.append(div1,div2,p1);
    document.getElementById('col1').appendChild(div);
}

var i=1;
divCol.addEventListener('click',()=>{
    
    if(i<=5){
        colCreate(i);
        i++;
    }else{
        alert('doyna')
    }
});

divNotes.addEventListener('click',()=>{
    alert('aly')
    colsCreate();
    console.log(divNotes.childNodes)
});
