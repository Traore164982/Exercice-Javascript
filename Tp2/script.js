let liste = [
    "Mon Premier",
    "Mon Second",
    "Mon Troisieme",
    "Mon Quatrieme"
];
let left = document.getElementById("left");
liste.forEach(element => {
    let p = document.createElement('p');
    p.innerText=(element);
    left.appendChild(p);   
});

left_groupe = document.querySelectorAll("p");
left_groupe.forEach(element => {
    element.addEventListener('click', ()=>{
        if (element.id != "active"){
            console.log("active");
            element.setAttribute('id','active');
            // element.classList.toggle('active')
        }else{
            element.setAttribute('id','');
            console.log("!active");
        }
    })
});

// left.appendChild(p);
console.log(left);
let input1 = document.createElement('input');
input1.setAttribute('type','button');
input1.setAttribute('value','>>');
let right = document.getElementById("right");
console.log(right);

let input2 = document.createElement('input');
input2.setAttribute('type','button');
input2.setAttribute('value','<<');
input1.addEventListener('click',()=>{
    var fromleft = document.getElementById("active");
    console.dir(fromleft);
    document.getElementById("right").appendChild(fromleft);
});
input2.addEventListener('click',()=>{
    var fromright = document.getElementById("active");
    document.getElementById("left").appendChild(fromright);
});
let middle = document.getElementById("middle");
middle.append(input1,input2);


function Moving(fromright,active){
    var fromright = document.getElementById(active);
    document.getElementById("left").appendChild(fromright);   
}