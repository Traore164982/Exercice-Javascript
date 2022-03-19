var nbr = 5;
var p = 0;
const Container = document.getElementById('Container')
const Caroussel = document.getElementById('Caroussel')
const Left = document.getElementById('left')
const Right = document.getElementById('right')
Caroussel.style.width = (450 * nbr) + "px";
function list() {
    for (let index = 1; index <= nbr; index++) {
        const div = document.createElement('div');
        div.className = "image";
        div.style.backgroundImage = "url('images/img" + index + ".jpeg')";
        Caroussel.appendChild(div);
    }
}

function lister() {
    list();
    var t = document.getElementsByClassName('image');
    for (let index = 0; index < t.length; index++) {
        setInterval(() => {
           Caroussel.appendChild(t[index]); 
        }, 5000);
    }
}
lister();

Left.addEventListener('click', Gauche);
Right.addEventListener('click', Droite);

function Gauche() {
    if (p > -nbr + 1) {
        p--;
        Caroussel.style.transform = "translate(" + p * 450 + "px)";
        Caroussel.style.transition = "all .5 ease";
    }
    afficher();
}

function Droite() {
    if (p < 0) {
        p++;
        Caroussel.style.transform = "translate(" + p * 450 + "px)";
        Caroussel.style.transition = "all .5 ease";
    }
    afficher();
}

function afficher() {
    if (p == -nbr + 1) {
        Left.style.visibility = "hidden";
    } else {
        Left.style.visibility = "visible";
    }
    if (p == 0) {
        Right.style.visibility = "hidden";
    } else {
        Right.style.visibility = "visible";
    }

}

var b = false;
Caroussel.addEventListener('mouseover', () => {
    b = !b;
    if (b) {
        Container.style.transform = "scale(1.2)";
    } else {
        Container.style.transform = "scale(1)";
    }
});

Caroussel.addEventListener('mouseout', () => {
    if (b) {
        Container.style.transform = "scale(1)";
    } else {
        Container.style.transform = "scale(1.2)";
    }
});