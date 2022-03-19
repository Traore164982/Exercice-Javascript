/* alert('Tra'); */

const btn = document.getElementById('btn');
const notifs = document.getElementById('notifs');
const Success = document.getElementById('Success');
const Danger = document.getElementById('Danger');
const Warning = document.getElementById('Warning');
const Info = document.getElementById('Info');
const not = document.getElementById('not');
const Mess = document.createElement('h4');
Mess.setAttribute('value','Message');

function Message(){
    var msg = btn.querySelectorAll('input');
    msg.forEach(element => {
        element.addEventListener('click',()=>{
            if (element.id=="Success"){
                  const input = document.createElement("input");
                  input.setAttribute("type","button");
                  input.setAttribute("value",`Message : ${element.id}`);
                  input.style.backgroundColor=`var(--${element.id}-color)`;
                  not.appendChild(input)
                  setTimeout(()=>{
                    input.remove();
                  },2000);
                  
            }
            if (element.id=="Warning") {
                const input = document.createElement("input");
                  input.setAttribute("type","button");
                  input.setAttribute("value",`Message : ${element.id}`);
                  input.style.backgroundColor=`var(--${element.id}-color)`;
                  not.appendChild(input)
                  setTimeout(()=>{
                    input.remove();
                  },2000);
            }
            if (element.id=="Danger") {
                const input = document.createElement("input");
                  input.setAttribute("type","button");
                  input.setAttribute("value",`Message : ${element.id}`);
                  input.style.backgroundColor=`var(--${element.id}-color)`;
                  not.appendChild(input)
                  setTimeout(()=>{
                    input.remove();
                  },2000);
            }
            if (element.id=="Info") {
                const input = document.createElement("input");
                  input.setAttribute("type","button");
                  input.setAttribute("value",`Message : ${element.id}`);
                  input.style.backgroundColor=`var(--${element.id}-color)`;
                  not.appendChild(input)
                  setTimeout(()=>{
                    input.remove();
                  },2000);
            }
        });

    });
}

Message();