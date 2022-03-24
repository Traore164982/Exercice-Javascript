const APIURL = "https://www.themealdb.com/api/json/v1/1/random.php";
const SEARCHAPIBYIB = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SEARCHAPIBYNAME = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const modalh1 = document.getElementById('modalh1');
const modalh3 = document.getElementById('modalh3');
const modalImg = document.getElementById('modalImg');
const modalP = document.getElementById('modalP');


function creationContainer() {
const Container = document.createElement('div');
Container.id="Container";
const Head = document.createElement('div');
Head.id="Head";
const form = document.createElement('form');
form.id="form";
const input = document.createElement('input');
input.id="input";
input.setAttribute=('type',"search");
input.setAttribute=('name',"input");
const i = document.createElement('i');
i.setAttribute('class','fa fa-search');
form.append(input,i);
Head.appendChild(form);

const Bod = document.createElement('div');
Bod.id="Bod";
const h1 = document.createElement('h1');
h1.innerText="Mes Recettes Favorites";
const img = document.createElement('img');
img.id='img';
const h4 = document.createElement('h2');
h4.id='h4';
Bod.append(h1,img,h4);

const Footer = document.createElement('div');
Footer.id="Footer"
const div1 = document.createElement('div');
div1.id="div1";
const generer = document.createElement('input')
generer.id='generer';
generer.value="Générer une recette";
div1.appendChild(generer);
const list = document.createElement('div');
list.setAttribute('class','list');
const img1 = document.createElement('img')
img1.id="img1";
img1.setAttribute('src',"");
list.appendChild(img1)
const div2 = document.createElement('div');
div2.id="div"
const h2 = document.createElement('h2')
h2.id="h2";
const ii = document.createElement('i');
ii.setAttribute('class','fa fa-heart')
div2.append(h2);
div2.append(ii);
list.appendChild(div2);
div1.appendChild(list)
Footer.appendChild(div1);

Container.append(Head,Bod,Footer);

const body = document.getElementById('body');
body.appendChild(Container);
}

function list() {
    creationContainer();
    fetch(APIURL).then(function (response) {
        return response.json()
    }).then(function (text) {
        console.log(text);
        for (let i = 0; i < text.meals.length; i++) {
            var element = text.meals[i];
           h4.innerText = element.strMeal;
           img.src = element.strMealThumb;
        }
        fetch(APIURL).then(function (response) {
            return response.json()
        }).then(function (text) {
            console.log(text);
            for (let i = 0; i < text.meals.length; i++) {
                var element = text.meals[i];
               img1.src = element.strMealThumb;           
               h2.innerHTML = element.strMeal;
            }});
        
        generer.addEventListener('click',()=>{
            fetch(APIURL).then(function (response) {
                return response.json()
            }).then(function (text) {
                console.log(text);
                for (let i = 0; i < text.meals.length; i++) {
                    const element = text.meals[i];
                   img1.src = element.strMealThumb;
                   h2.innerHTML = element.strMeal;
                }
            });
        });
        console.log(generer)
    }
)};

function lister() {
    creationContainer();
    fetch(APIURL).then(function (response) {
        return response.json()
    }).then(function (text) {
        console.log(text);
        for (let i = 0; i < text.meals.length; i++) {
            const element = text.meals[i];
           img1.src = element.strMealThumb;
           h2.innerHTML = element.strMeal;
        }
        input.addEventListener('keyup',()=>{
            div1.innerHTML="";
            fetch(SEARCHAPIBYNAME+input.value).then(function (response) {
                return response.json()
            }).then(function (text) {
                var i=0;
                text.meals.forEach(element => {
                    for (let index = 0; index < 20; index++) {
                    console.log(text.meals.length)
                        console.log(element['strIngredient'+index]);
                    }
                    div1.innerText=creer(element);
                });
            }
        )
        console.log(div1)
        });
        /* input.addEventListener('keyup',()=>{
            div1.innerHTML="";
            fetch(SEARCHAPIBYNAME+input.value).then(function (response) {
                return response.json()
            }).then(function (text) {
                console.log(text);
                console.log(text.meals.length)
                var i=0;
                text.meals.forEach(element => {
                     modalh1.innerHTML=element.strMeal
                    modalP.innerHTML=element.strInstructions
                    
                    for (let index = 0; index < 20; index++) {
                console.log(text.meals.length)
                        console.log(element['strIngredient'+index]);
                    }
                });
            }
        )
        div1.innerText=creer();
        console.log(div1)
        }); */
    }
)}
list();

const generer = document.getElementById('generer');



/* function creer(a){
    const inp = document.createElement('input')
     inp.type="button";
    inp.value="Generer une recette"; 
    const d = document.createElement('div');
    d.setAttribute('class','list')
    const im = document.createElement('img')
    img.id="img1";
    img.setAttribute('src',a.strMealThumb)
    const d1 = document.createElement('div');
    d1.id="div";
    const h2 = document.createElement('h2');
    h2.id="h2";
    h2.innerHTML = a.strMeal;
    const ii = document.createElement('i'); 
    ii.setAttribute('class','fa fa-heart');
    d1.append(h2,ii);
    d.append(img,d1)
    return d;
}
 */