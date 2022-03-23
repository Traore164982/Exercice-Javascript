const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Container = document.getElementById('Container');
const input = document.getElementById('input');

var Tar = new Object();
var page = 1;
var height = 0;
let last_known_scroll_position = 0;
let ticking = false;
  

function list() {
    fetch(APIURL+page).then(function (response) {
        return response.json()
    }).then(function (text) {
        Tar = text;
       
        for (let i = 0; i < Tar.results.length; i++) {
            const element = Tar.results[i];
           cree(element);

        }
        input.addEventListener('keyup',()=>{
            console.log(SEARCHAPI+"input.value")
            fetch(SEARCHAPI+input.value).then(function (response) {
                return response.json()
            }).then(function (text) {
                Container.innerText='';
                console.log(text)
                for (let i = 0; i < text.results.length; i++) {
                    const element = text.results[i];
                    console.log(element);
                   cree(element);
                }
                
            })
        });
        console.log(document.body.scrollTop);
        const di = Container.querySelectorAll('.Div');
        var b=false;
        for (let index = 0; index < di.length; index++) {
            const element = di[index];
            element.addEventListener('mouseover',()=>{
                if (!b) {
                    element.childNodes[2].style.visibility='visible';
                    element.childNodes[2].style.transform="scale(1)"
                    element.childNodes[2].style.transition="all transform 2s ease";
                }
            });
            element.addEventListener('mouseout',()=>{
                if (!b) {
                element.childNodes[2].style.visibility='hidden'
                element.childNodes[2].style.transform="scale(0)"
                element.childNodes[2].style.transition="all transform 2s ease-in-out";

                }
            });
            
        }
    });
}
 function cree(element){

    var div = document.createElement('div');
    div.setAttribute('class','Div');
    var div1 = document.createElement('div');
    div1.setAttribute('id','Div1');
    var div2 = document.createElement('div');
    div2.setAttribute('id','Div2');

    const h = document.createElement('h2');
    const p = document.createElement('p');
    p.id="vote";
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    p1.id="overview";

    if(element.vote_average <6){
        p.style.color="red";
     }
     if(element.vote_average>=8){
         p.style.color="green";
     }else{
         p.style.color="orangered";
     }
    p.innerText=element.vote_average;
    img.setAttribute('src',`${IMGPATH+element.poster_path}`);
    p1.innerHTML = "Overview: <br><br>"+element.overview;
    h.innerText=element.original_title;
    div1.appendChild(img);
    div2.append(h);
    div2.appendChild(p);
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(p1);
    Container.appendChild(div);

}

function lister() {
    list();
}
lister();



window.addEventListener('scroll', function(e) {
    position = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(position);
        ticking = false;
      });
  
      ticking = true;
    }
  });

function doSomething(scroll_pos) {
    if (scroll_pos>1000){
        page++;
        lister();
    }
  }
