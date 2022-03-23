let tableau =
[
    {
        titre: "Dashboard",
        className: 'tableauDeBord',
        liste: ['Dashboard v1', 'Dashboard v2', 'Dashboard v3'],
        iconePrincipal: 'fa fa-tachometer-alt',
        angleLeft: 'fa fa-angle-left'
    },
    {
        titre: "Widgets",
        className: 'widgets',
        liste: [],
        iconePrincipal: 'fa fa-th aria-hidden="true"',
        angleLeft: 'fa fa-angle-left'
    },
    { 
        titre: "Layout Options",
        className: 'layoutOptions',
        liste: ['ChartJS', 'Flot', 'Inline', 'uPlot'],
        iconePrincipal: 'fas fa-copy',
        angleLeft: 'fa fa-angle-left'
        
    },
    {
        titre: "Charts",
        className: 'charts',
        liste: ["ChartsJs","Flot","Inline","Uplot"],
        iconePrincipal: 'fas fa-chart-pie',
        angleLeft: 'fa fa-angle-left'
        
    },
    {
      titre: "UI Elements",
      className: 'ui_Elements',
      liste: [],
      iconePrincipal: 'fas fa-tree',
      angleLeft: 'fa fa-angle-left'
      
    },
    {
        titre: "Forms",
        className: 'forms',
        liste: [],
        iconePrincipal: 'fas fa-edit',
        angleLeft: 'fa fa-angle-left'
        
    },
    {
        titre: "Tables",
        className: 'tables',
        liste: [],
        iconePrincipal: 'fas fa-table',
        angleLeft: 'fa fa-angle-left'
        
    }
];

var i = 1;
var a = false;
function crea(iconePrincipal,titre,badge,liste,angleLeft){
  const nav = document.getElementById('nav');
  var div1 =document.createElement('div');
  div1.setAttribute('id',`${i}`)
  var div2 =document.createElement('div');
  var span1 = document.createElement('span');
  var span2 = document.createElement('span');
  var span3 = document.createElement('span');
  var span4 = document.createElement('span');
  var span5 = document.createElement('span');
  var i1 = document.createElement('i');
  var i2 = document.createElement('i');
  var i3 = document.createElement('i');
  var li = document.createElement('li')
  i1.setAttribute('class',iconePrincipal);
  span1.appendChild(i1);
  span1.setAttribute('class','span1');
  span3.innerHTML=`<h3>${titre}<h3/>`;
  i2.setAttribute('class',badge)
  span4.appendChild(i2);
  i3.setAttribute('class',angleLeft);
  span2.setAttribute('class','span2');
  span2.append(span3,span4,span5);
  div1.setAttribute('class','div1')
  div1.append(span1,span2);
  li.setAttribute('class','list')
  li.appendChild(div1);
  ul.append(li);
  if (liste!=0) {
    span5.appendChild(i3);
    span5.setAttribute('class','span5')
    var uli = document.createElement('ul');
    liste.forEach(ele => {
      uli.setAttribute('class','sousMenu');
      uli.setAttribute('id',`ul${i}`);
      var i11= document.createElement('i');
      i11.setAttribute('class','fa fa-circle');
      var span11 = document.createElement('span')
      span11.setAttribute('class','span11');
      var span12 = document.createElement('span')
      span12.setAttribute('class','span12');
      span11.appendChild(i11);
      span12.innerText=ele;
      var lii = document.createElement('li');
      lii.setAttribute('class','list1')
      lii.appendChild(span11)
      lii.appendChild(span12)
      uli.appendChild(lii);
      ul.appendChild(uli);
    });

  }
  document.getElementById('menu').addEventListener('click',()=>{
    a=!a
    if (a) {
      span2.style.display="none";
      nav.style.width="10vh";
    }else{
      span2.style.display="block";
      nav.style.width="45vh";
    }
    
  })
}

tableau.forEach(element => {
  crea(element.iconePrincipal,element.titre,element.badge,element.liste,element.angleLeft)
  i++;
});
var b=false;
var u = document.querySelectorAll('.sousMenu');
var di = document.querySelectorAll('.div1')
di.forEach(element => {
  element.addEventListener('click',()=>{
    b=!b;
    if (b) {
      element.parentElement.nextSibling.style.display="block";
      element.childNodes[1].childNodes[2].style.transform="rotate(-90deg)"
    }else{
      element.parentElement.nextSibling.style.display="none";
      element.childNodes[1].childNodes[2].style.transform="rotate(0deg)"
    }
    
  })
});



