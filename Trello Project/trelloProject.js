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



function callForm() {
    const form = document.createElement('form')
    form.id="form"
const divh2 = document.createElement('div')
divh2.id="form-h3"
const h2 = document.createElement('h2')
h2.innerText="Ajout Tâches"
divh2.appendChild(h2)


const div1 = document.createElement('div')
div1.className="form-div"
const label1 = document.createElement('label')
label1.setAttribute('for','Task')
label1.innerText="Tâches :"
const input1 = document.createElement('textarea')
input1.type="textarea"
input1.setAttribute('cols','40')
input1.id="Task"
div1.append(label1,input1)

const div2 = document.createElement('div')
div2.className="form-div"
const label2 = document.createElement('label')
label2.setAttribute('for','Date')
label2.innerText="Date :"
const input2 = document.createElement('input')
input2.type="date"
input2.id="Date"
div2.append(label2,input2)


const div3 = document.createElement('div')
div3.className="form-div"
const label3 = document.createElement('label')
label3.setAttribute('for','Time')
label3.innerText="Heure de Début :"
const input3 = document.createElement('input')
input3.type="time"
input3.id="Time"
div3.append(label3,input3)


const div4 = document.createElement('div')
div4.className="form-div"
const label4 = document.createElement('label')
label4.setAttribute('for','Time1')
label4.innerText="Heure de Fin :"
const input4 = document.createElement('input')
input4.type="time"
input4.id="Time1"
div4.append(label4,input4)


const btn = document.createElement('input')
btn.type='button'
btn.value='Envoyer'
btn.id='submit'
var imp = document.createElement('i')
imp.setAttribute('class','fa fa-close')
imp.id="close"
form.append(divh2,div1,div2,div3,div4,btn,imp)

document.body.append(form);
}


function colCreate(i){
    var table =["#c8c9c4", "#c8c9c4", "#e6cace", "#C8AD7F", "#5cb863", "#DEB887" ]
    const Col = document.createElement('div')
    Col.style.backgroundColor=table[i];
    Col.style.backgroundImage="url(\"trelloimg.png\")";
Col.className="col";
        Col.id="col"+i
        divCols.appendChild(Col);
}

function colsCreate(y){
    var div = document.createElement('div');
    div.setAttribute('class','Div');
    div.id="divColl"+y

    const h = document.createElement('h2');
    h.id='H'+y
    const p = document.createElement('p');
    p.id="Debut"+y;
    const p2 = document.createElement('p');
    p2.id="Dat"+y
    const p1 = document.createElement('p');
    p1.id="Fin"+y;

    div.append(h,p2,p1,p);
    var col1=document.getElementById('col1')
    col1.append(div);
    console.log(col1);
    callForm();

}

var i=1;
divCol.addEventListener('click',()=>{
    if(i<=5){
        colCreate(i);
        i++;
    }
});
var a=1;
divNotes.addEventListener('click',()=>{
    colsCreate(a);
    
    console.log(document.getElementById('form'))
    var modalCol = document.querySelectorAll('.Div')
    form.style.display="block";

    document.getElementById('submit').addEventListener('click',()=>{

        document.getElementById('H'+a).innerText= document.getElementById('Task').value
        document.getElementById('Dat'+a).innerText = document.getElementById('Date').value
        document.getElementById('Debut'+a).innerText = document.getElementById('Time').value
        document.getElementById('Fin'+a).innerText = document.getElementById('Time1').value
        a++;
        
    });
    document.getElementById('close').addEventListener('click',()=>{
        document.getElementById('close').parentElement.remove();
    });

});




