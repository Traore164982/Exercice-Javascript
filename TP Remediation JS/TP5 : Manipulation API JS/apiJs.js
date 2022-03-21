const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const Streaming = document.getElementById('Streaming');
const Describe = document.getElementById('Describe');
const Des = document.getElementById('Des');

const Container = document.getElementById('Container');
const Movies = document.getElementById('Movies');
const gar = 0;
const Left = document.getElementById('left');
const Right = document.getElementById('right');
var p =0;
var nbr = 20;

var Tar = new Object();
function list() {
    fetch(APIURL).then(function (response) {
        return response.json()
    }).then(function (text) {
        Tar = text;
        const td = document.getElementsByTagName('td');
        var y = 0;
        var imgg =[];
        for (let i = 0; i < Tar.results.length; i++) {
            const element = Tar.results[i];
            const img = document.createElement('image');
            td[y].style.backgroundImage =`url(${IMGPATH+element.backdrop_path})`;
            const h = document.createElement('h3');
            const p = document.createElement('p');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const p4 = document.createElement('p');
            const p5 = document.createElement('p');
            p1.setAttribute('class','p1');
            p2.setAttribute('class','p2');
            p3.setAttribute('class','p3');
            p4.setAttribute('class','p4');
            p5.setAttribute('class','p5');
            
            h.innerText=element.original_title;
            p1.innerText="Language : "+element.original_language;
            p.innerText=element.overview;
            p2.innerText="Sortie : "+element.release_date;
            p3.innerText="Vues : +"+element.popularity;
            p4.innerText="Id : "+element.id;
            p5.innerText="Note : "+element.vote_average;
            


            td[y].appendChild(h);
            td[y].appendChild(p1);
            td[y].appendChild(p);
            td[y].appendChild(p2);
            td[y].appendChild(p3);
            td[y].appendChild(p4);
            td[y].appendChild(p5);
            y++;
        }
    });
/*     var t = document.getElementsByClassName('image');
    for (let index = 0; index < t.length; index++) {
        setInterval(() => {
            alert('tra')
           Container.appendChild(t[index]); 
        }, 2000);
    }
    console.log(t); */
}


function lister() {
    list();
}
lister();
const td = document.getElementsByTagName('td');
console.log(td);

for (let index = 0; index < td.length; index++) {
    const element = td[index];
    var b= false;
    element.addEventListener('mousemove',()=>{
        b=!b;
        if (b) {
            setTimeout(()=>{
                element.childNodes[2].style.marginTop="0px";
                element.childNodes[2].style.width="55%";
                element.childNodes[2].style.height="40vh";
                element.childNodes[2].style.fontSize="22px";
                element.childNodes[2].style.transform="translateY(-55vh)";
                element.childNodes[2].style.transform="translateX(25vh)";
                element.childNodes[2].style.transition="all .8s ease";
                element.childNodes[2].style.zindex="10000";
                element.style.filter="brightness(80%)";
            },500);
        }else{
            setTimeout(()=>{
                element.childNodes[2].style.fontSize="16px";
                element.childNodes[2].style.transition="all .4s ease";
                element.childNodes[2].style.marginTop="20vh";
                element.childNodes[2].style.width="45%";
                element.childNodes[2].style.height="5vh";
                element.childNodes[2].style.transform="translateY(0px)";
                element.childNodes[2].style.transform="translateX(0px)";
                element.style.filter="none";
            },4000);
            
        }
    });
    
}