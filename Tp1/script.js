/* let gest =document.createElement('div');
let textarea = document.createElement('textarea');
let ElementNote = document.createElement('div');
document.querySelector('#editing').appendChild(gest);
let note = document.createElement(note)



console.log(document.querySelector('#editing')); */

var addBtn = document.getElementById('btn');
addBtn.addEventListener('click', addNote);
console.log(addBtn);
function createNote() {
    let edit_btn = document.createElement('input');
    let delete_btn = document.createElement('input');
    edit_btn.setAttribute('type', 'image');
    edit_btn.setAttribute('id','edit');
    edit_btn.setAttribute('onclick','editNode()');
    edit_btn.setAttribute('src', '/images/6656dcf2-5aef-4321-83e1-62bfc11d8052.jpeg');
    delete_btn.setAttribute('type', 'image');
    delete_btn.setAttribute('id','delete');
    delete_btn.onclick=()=>{
        note = delete_btn.parentElement.parentElement.parentElement;
        note.parentElement.removeChild(note);
    };
    delete_btn.setAttribute('src', '/images/e10074dd-c42b-4588-b260-1f1122c7e553.jpeg');
    let gest = document.createElement('div');
    gest.id = 'Gest';
    gest.append(edit_btn, delete_btn);
    let editing = document.createElement('div');
    editing.id = 'editing';
    editing.appendChild(gest);
    let textarea = document.createElement('textarea');
    textarea.setAttribute('cols', '30')
    textarea.setAttribute('rows', '10')
    textarea.disabled = true;
    edit_btn.addEventListener('click',()=>{
        textarea.toggleAttribute('disabled');
    })
    let note = document.createElement('div');
    note.className = note;
    note.append(editing, textarea);
    return note;
}

function addNote(){
var texta=document.getElementById('texta');
 texta.append(createNote());
}

function removeNode(){
    this.delet = document.getElementById('delete');
    const parent = delet.parentElement;
    const parente = parent.parentElement; 
    const parentet = parente.parentElement;
    const parentete = parentet.parentElement;
    parentete.removeChild(parentet);
    console.log('Suppression avec succés');

}
