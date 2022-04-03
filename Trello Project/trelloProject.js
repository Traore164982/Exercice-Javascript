const myApi = "http://localhost:8000/?controller=user&action="

const Container = document.createElement('div')
Container.id = 'Container'
const divCol = document.createElement('div')
divCol.className = "Colonnes"
divCol.id = "divCol"
const divNotes = document.createElement('div')
divNotes.className = "Colonnes"
divNotes.id = "divNotes"
const divCols = document.createElement('div')
divCols.id = "divCols"
const Col = document.createElement('div')
Col.className = "col";

var Message= document.createElement('div')
Message.id='Message'
document.body.appendChild(Message)

var i = 1;
var y = 1;

var inputColonne = document.createElement('input')
inputColonne.value = "Colonne"
inputColonne.type = "button"
var iColonne = document.createElement('i');
iColonne.className = "fa fa-plus"

var inputNotes = document.createElement('input')
inputNotes.value = "Notes"
inputNotes.toggleAttribute('disabled')
inputNotes.type = "button"
var iNotes = document.createElement('i');
iNotes.className = "fa fa-plus"

divCol.append(iColonne, inputColonne)
divNotes.append(iNotes, inputNotes)

const labelnav = document.createElement('label')
labelnav.setAttribute('for', 'imp')
labelnav.id = "labelnav"
const input = document.createElement('input')
input.id = 'imp'
const navBarInp = document.createElement('i')
navBarInp.className = 'fa fa-angle-left fa-beat'
navBarInp.style="--fa-beat-scale: 1.4"
navBarInp.id = "impnav"
labelnav.appendChild(navBarInp)

const navBar = document.createElement('div');
navBar.id = 'navBar'
const navBarDiv = document.createElement('div')
navBarDiv.id = "navBarDiv"
const navbarTitle = document.createElement('h4');
navbarTitle.innerText = "Corbeille"
const navBari = document.createElement('i')
navBari.className = "fa fa-close"
const span = document.createElement('span')
navBarDiv.append(navbarTitle, navBari)
navBar.appendChild(navBarDiv);

Container.appendChild(labelnav)
labelnav.addEventListener('click', () => {
    navBar.style.transform = "translateX(0%)"
    navBar.style.animation = "headShake";
    navBar.style.animationDuration = "1.5s";
})

navBari.addEventListener('click', () => {
    navBari.parentElement.parentElement.style.transform = "translateX(100%)"
})

const restaure = document.createElement('span')
const resti = document.createElement('i')
resti.className = "fa fa-reply"
resti.id = "resti"
restaure.id = 'restaureAll'
restaure.appendChild(resti)



const addColonne = document.createElement('span')
const addColonneI = document.createElement('i')
addColonneI.className = "fa fa-columns"
addColonneI.id = "addColonneI"
addColonne.id = 'addColonne'
addColonne.appendChild(addColonneI)



Container.append(divCol, divNotes, divCols, navBar, restaure, addColonne)

document.body.appendChild(Container);

restaure.addEventListener('click', () => {
    Container.querySelectorAll('.Div').forEach(element => {
        if(element.parentElement.id!="navBar"){
            col1.appendChild(element)
        }
    });
})

const form = document.createElement('form')
form.id = "form"
form.method="POST"
const inph1= document.createElement('input')
inph1.type="hidden"
inph1.setAttribute('name','controller')
inph1.value="user"
const inph2= document.createElement('input')
inph2.type="hidden"
inph2.setAttribute('name','action')
inph2.value="ajouter"
const divh2 = document.createElement('div')
divh2.id = "form-h3"
const h2 = document.createElement('h2')
h2.innerText = "Ajout Tâches"
divh2.appendChild(h2)


const div1 = document.createElement('div')
div1.className = "form-div"
const label1 = document.createElement('label')
label1.setAttribute('for', 'Task')
label1.innerText = "Tâches :"
const input1 = document.createElement('textarea')
input1.type = "textarea"
input1.setAttribute('cols', '40')
input1.setAttribute('name','tache')
input1.id = "Task"
div1.append(label1, input1)

const div2 = document.createElement('div')
div2.className = "form-div"
const label2 = document.createElement('label')
label2.setAttribute('for', 'Date')
label2.innerText = "Date :"
const input2 = document.createElement('input')
input2.type = "date"
/* input2.max= new Date().getDay() + '-' +(new Date().getMonth()+1) + '-' + new Date().getFullYear();
 */input2.id = "Date"
 input2.setAttribute('name','date')
 div2.append(label2, input2)


const div3 = document.createElement('div')
div3.className = "form-div"
const label3 = document.createElement('label')
label3.setAttribute('for', 'Time')
label3.innerText = "Heure de Début :"
const input3 = document.createElement('input')
input3.type = "time"
input3.setAttribute('name','debut')
input3.id = "Time"
div3.append(label3, input3)


const div4 = document.createElement('div')
div4.className = "form-div"
const label4 = document.createElement('label')
label4.setAttribute('for', 'Time1')
label4.innerText = "Heure de Fin :"
const input4 = document.createElement('input')
input4.setAttribute('name','fin')
input4.type = "time"
input4.id = "Time1"
div4.append(label4, input4)
const input5 = document.createElement('input')
input5.type="text"
input5.style.visibility='hidden'

const btn = document.createElement('input')
btn.type = 'button'
btn.value = 'Envoyer'
btn.id = 'submit'
const btn1 = document.createElement('input')
btn1.type = 'button'
btn1.value = 'Edit'
btn1.id = 'submit1'
var imp = document.createElement('i')
imp.setAttribute('class', 'fa fa-close')
imp.id = "close"
form.append(inph1,inph2,divh2, div1, div2, div3, div4,input5, btn,btn1, imp)

document.body.append(form);

btn.addEventListener('click',function(){
    var taskVal = input1.value
    var dateVal = input2.value
    var timeVal = input3.value
    var time1Val = input4.value
    if (!isValide(taskVal,dateVal,timeVal,time1Val)) {
        if (Compare(dateVal,timeVal,time1Val)) {
            colsCreate(y,taskVal,dateVal,timeVal,time1Val)
            y++
           sms("Tâche Crée")
            }else{
           sms("La Tâche n'a pas pu été Crée")
            }  
    } 
    form.style.display="none"
    form.reset();
    inputNotes.removeAttribute('disabled')
});

btn1.addEventListener('click',()=>{
    var edt = document.getElementById(input5.value)
    console.log(edt)
    edt.dataset.h = input1.value
    edt.dataset.p2 = input2.value
    edt.dataset.p =  input3.value
    edt.dataset.p1 = input4.value
    edt.dataset.id = input5.value
    console.log(edt.childNodes[3].childNodes[1])

    if (!isValide(edt.dataset.h,edt.dataset.p2,edt.dataset.p,edt.dataset.p1)) {
        if (Compare(edt.dataset.p2,edt.dataset.p,edt.dataset.p1)) {
            edt.childNodes[2].innerHTML = edt.dataset.h
            edt.childNodes[3].childNodes[1].innerHTML = edt.dataset.p2 + "<br> de <br>" + edt.dataset.p + " à " + edt.dataset.p1
            sms('La Tâche a bien été éditée')    
        }else{
               sms("Aucune Modification")
            }  
    }

    console.log(input5.value)
    console.log(document.getElementById(input5.value))
    form.style.display="none"
    form.reset();
    inputNotes.removeAttribute('disabled')
})
imp.addEventListener('click',()=>{
    form.style.display="none"
    form.reset();
    inputNotes.removeAttribute('disabled')
})

function colCreate(i){
    var table = ["","#442288", "#6CA2EA", "#B5D33D", "#FED23F", "#EB7D5B"]
    const Col = document.createElement('div')
    Col.style.backgroundColor = table[i];
    var ColImg= document.createElement('img')
    ColImg.id="ColImg"
    ColImg.src= "trelloimg.png"
    Col.className = "col";
    Col.id = "col" + i
    const Coltitle = document.createElement('div');
    Coltitle.className = "Coltitle"
    const Title = document.createElement('h4')
    Title.innerText = "Colonne " + i
    var recup = Title.innerText
    Title.addEventListener('mouseleave', () => {
        if (Title.innerText=='') {
            Title.innerText = recup;
        }else{
            Title.contentEditable = false;            
        }
    })
    const Removing = document.createElement('i');
    const Editing = document.createElement('i');
    Removing.className = "fa fa-close"
    Removing.id = "remove"
    Removing.addEventListener('click', () => {
        if(Removing.parentElement.parentElement.id!="col1"){
        removable(Removing.parentElement.parentElement.id)
        }else if (document.querySelectorAll('.col').length==1){
        removable(Removing.parentElement.parentElement.id)
        }
        recharge()
    })
    Editing.className = "fa fa-edit"
    Editing.id = "edit"
    Editing.addEventListener('click', () => {
        Title.contentEditable = true;
        Col.setAttribute("data-rename","true")
    })

    Coltitle.append(Title, Editing, Removing);
    Col.append(Coltitle,ColImg)
    divCols.appendChild(Col);
}

function colsCreate(y,taskVal,dateVal,timeVal,time1Val) {
    var div = document.createElement('div');
    var divview = document.createElement('div');
    var divover = document.createElement('div');
    var iCol= document.createElement('i')
    iCol.className="iCol"
    iCol.className="fa fa-trash"
    var iiCol= document.createElement('i')
    iiCol.className="iiCol"
    iiCol.className="fa fa-edit"
    var iiiCol= document.createElement('i')
    iiiCol.className="iiiCol"
    iiiCol.className="fa fa-undo"
    divview.className = "view";
    divover.id = "over";
    divview.id = "view" + y;
    var divover1 = document.createElement('div');
    var divover2 = document.createElement('div');

    div.setAttribute('class', 'Div');
    var left = document.createElement('i')
    var right = document.createElement('i')

    left.className = 'fa fa-angle-double-left'
    right.className = 'fa fa-angle-double-right'

    left.addEventListener('click', (e) => {
        if(e.target.parentElement.parentElement.previousSibling!=null){
            e.target.parentElement.parentElement.previousSibling.appendChild(e.target.parentElement)
        }
    })

    right.addEventListener('click', (e) => {
        if (e.target.parentElement.parentElement.nextSibling!=null) {
        e.target.parentElement.parentElement.nextSibling.appendChild(e.target.parentElement)
        }
    })
    iCol.addEventListener('click',(e)=>{
        var idParent = e.target.parentElement.parentElement.parentElement.parentElement.id
        console.log(idParent)
        e.target.parentElement.parentElement.parentElement.setAttribute("data-idParent",idParent)
        navBar.appendChild(e.target.parentElement.parentElement.parentElement)
        iiiCol.style.visibility='visible' 
    })
    iiCol.addEventListener('click',(e)=>{
       btn.style.display='none'
       btn1.style.display='block'
       form.style.display='block'
       var data = e.target.parentElement.parentElement.parentElement
       input1.value = data.dataset.h
       input2.value = data.dataset.p2
       input3.value = data.dataset.p
       input4.value = data.dataset.p1
       input5.value = data.dataset.id
    })
    iiiCol.addEventListener('click',(e)=>{
        var parent = document.getElementById(e.target.parentElement.parentElement.parentElement.dataset.idparent)
        var initial = document.getElementById('col1')
        console.log(parent);
        console.log(e.target.parentElement.parentElement.parentElement);
        if (parent!=null) {                    
                    parent.appendChild(e.target.parentElement.parentElement.parentElement)
        }else{
                    initial.appendChild(e.target.parentElement.parentElement.parentElement)
        }
        iiiCol.style.visibility='hidden'
    })

    left.id = 'left'
    right.id = 'right'
    div.id = "divColl" + y
    div.append(left,right)

    var h = document.createElement('h2');
    h.id = 'H' + y
    h.className = "titre"
    var p = document.createElement('p');
    p.id = "Debut" + y;
    p.className = "debut"
    var p2 = document.createElement('p');
    p2.id = "Dat" + y
    p2.className = "date"
    var p1 = document.createElement('p');
    p1.id = "Fin" + y;
    p1.className = 'end'
    var col1 = document.getElementById('col1')

    div.setAttribute("data-h",taskVal)
    div.setAttribute("data-p2",dateVal)
    div.setAttribute("data-p",timeVal)
    div.setAttribute("data-p1",time1Val)
    div.setAttribute("data-id",div.id)

    document.getElementById('close').addEventListener('click', () => {
        document.getElementById('close').parentElement.style.display = "none";
        inputNotes.removeAttribute('disabled')
    });
    divover2.innerHTML = div.dataset.p2 + "<br> de <br>" + div.dataset.p + " à " + div.dataset.p1
    divview.innerText= div.dataset.h
    divover1.append(iCol,iiCol,iiiCol)
    divover.append(divover1,divover2)
    div.append(divview, divover);
    col1.append(div);

    
   /*  btn.addEventListener('click', () => {
        console.log('ici');
        // Recupération des elements issus du Formulaire d'AJout

        var taskVal = input1.value
        var dateVal = input2.value
        var timeVal = input3.value
        var time1Val = input4.value


        //Affectation des valeurs
        divover2.innerHTML = dateVal + "<br> de <br>" + timeVal + " à " + time1Val
        divview.innerText= taskVal
        inputNotes.removeAttribute('disabled')
        form.reset();
        form.style.display="none";
        console.log('------------------------col');
        console.log(col1)
    console.log(div)
    console.log('------------------------------');

    }); */
 }
 
var i = 1
divCol.addEventListener('click', () => {
    if (document.querySelectorAll('.col').length<5){
        inputNotes.removeAttribute('disabled')
        colCreate(i);
        i++
        if (i>5 && document.querySelectorAll('.col').length<=5) {
            recharge();
            i--
        }
    }
});

divNotes.addEventListener('click', () => {
    inputNotes.toggleAttribute('disabled');
   /*  colsCreate(a);
    a++ */
    btn1.style.display='none'
    btn.style.display='block'
    form.style.display="block"

    /*     console.log(document.getElementById('remove'));
        console.log(document.getElementById('edit')); */


});

/* function getParentSuivant(element){
   var id = parseInt(element.childNodes[1].parentElement.parentElement.id[3])+1;
    var regex =element.childNodes[1].parentElement.parentElement.id[3]
    var idSuivant =element.childNodes[1].parentElement.parentElement.id.replace(regex,id)
    var after = document.getElementById(idSuivant)
    return after
}

function getParentPrec(element){
    var id = parseInt(element.childNodes[1].parentElement.parentElement.id[3])-1;
        console.log(id)
        var regex =element.childNodes[1].parentElement.parentElement.id[3]
        var idPrecedent =element.childNodes[1].parentElement.parentElement.id.replace(regex,id)
        var before = document.getElementById(idPrecedent)
        return before
} */

/* textarea.disabled = true;
edit_btn.addEventListener('click',()=>{
    textarea.toggleAttribute('disabled');
}) */


function isValide(a, b, c, d) {
    if (a == '' && b == '' && c == '' && d == '') {
        return true
    } else {
        return false
    }
}
function removable(el){
    document.getElementById(el).remove();
}

function recharge() {
    var colo = document.querySelectorAll('.col');
    i=1;
    var tableR = ["","#442288", "#6CA2EA", "#B5D33D", "#FED23F", "#EB7D5B","dimgrey","pink"]
    colo.forEach(element => {
        if (element.dataset.rename!='true') {
            element.childNodes[0].childNodes[0].innerText=`Colonne ${i}`
        }
        element.style.backgroundColor = tableR[i];
        i++
});
}

function diffdate(date,date1){
    var a = date.split(':');
    var b = date1.split(':');
// minutes are worth 60 seconds. Hours are worth 60 minutes.
var seconda = (+a[0]) * 60 + (+a[1]); 
var secondb = (+b[0]) * 60 + (+b[1]);
if(seconda<=secondb){
    return true
}else{
    return false
    }
}

function Compare(a,x,z){
 var b = new Date();
 a=a.split('-')
 a = new Date(+a[0],(+a[1]-1),+a[2], b.getHours(),b.getMinutes(),b.getSeconds(), b.getMilliseconds())
 var tmp = a-b 

 if(tmp>=0){
     var t = diffdate(x,z)
     return t
}else{
    return false;
}
}

function DateConf(a,x,z){
    var b = new Date();
    a=a.split('-')
    a = new Date(+a[0],(+a[1]-1),+a[2], b.getHours(),b.getMinutes(),b.getSeconds(), b.getMilliseconds())
    var tmp = a-b 
   
    if(tmp>=0){
        var t = diffdate(x,z)
        return t
   }else{
       return false;
   }
   }

function grdParent(c,cpt){
    for (let index = 0; index < cpt; index++) {
        c+=".parentElement"
    }
    return c
}


function sms(a){
    const h4 = document.createElement("h4");
                    h4.innerText=`Message : ${a}`;
                    Message.style.display='block'
                    Message.appendChild(h4)
                    setTimeout(()=>{
                      h4.parentElement.style.display='none';
                      h4.remove();
                    },2000);
  }


/* window.onload=()=>{
    setInterval(()=>{
        var d = new Date()
        Container.querySelectorAll('.Div').forEach(element => {
            console.log(element.dataset)
            console.log(d);
        });
    }
        ,5000)
} */


function list() {
    fetch(myApi+"liste").then(function (response) {
        console.log(response)
        return response.json()
    }).then(function (text) {
        console.log(text)
    })
};


list()