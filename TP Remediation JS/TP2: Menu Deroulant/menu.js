const nav = document.getElementById('nav');
const btn = document.getElementById('btn');
const menu = document.getElementById('menu-cb');
const label = document.getElementById('menu');

const charger=()=>{
    const input = menu.checked;
    if (input) {
        nav.setAttribute('class','show-nav');
        label.style.marginLeft="265px";
    }else{
        nav.classList.remove('show-nav');
        label.style.marginLeft="15px";
    }

};
menu.addEventListener('click',charger);
var lii = document.createElement('li');
lii.innerText='tra';
var li = nav.querySelectorAll('.li');
li.forEach(element => {
    var uli = document.createElement('ul');
    uli.appendChild(lii);
  element.addEventListener('click',()=>{
    var tr = element.querySelector('h4');
    if (tr.innerText=="Dashboard") {
            element.insertAdjacentElement('afterbegin',uli);
    }
  });
});