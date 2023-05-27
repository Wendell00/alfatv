var navList = document.querySelectorAll('.nav-list');

function removeActive(){
    navList.forEach(function(e){
        e.classList.remove('active-a');
    });
}

alfatv = document.getElementById('alfatv')
window.addEventListener('load', function() {
  alfatv.classList.add('animate')
});

var homeNav = new Waypoint({
    element: document.getElementById('alfatv'),
    handler: function(direction) {
      removeActive()
      navList[0].classList.add('active-a')
    },
    offset: '10%'
})

var concertosTitle = new Waypoint({
    element: document.getElementById('titulo-concertos'),
    handler: function(direction) {
      this.element.classList.add('animate')
      removeActive()
      navList[1].classList.add('active-a')
    },
    offset: '75%'
  })

var concertosNav = new Waypoint({
    element: document.getElementById('titulo-concertos'),
    handler: function(direction) {
      removeActive()
      navList[1].classList.add('active-a')
    },
    offset: '10%'
})
  
var card1 = new Waypoint({
    element: document.getElementById('card-1'),
    handler: function(direction) {
      this.element.classList.add('animate')
    },
    offset: '75%'
  })
  
var card2 = new Waypoint({
    element: document.getElementById('card-2'),
    handler: function(direction) {
      let elemento = this.element
      setTimeout(function() {
        elemento.classList.add('animate')
      }, 300);
    },
    offset: '75%'
  })
  
var card3 = new Waypoint({
    element: document.getElementById('card-3'),
    handler: function(direction) {
      let elemento = this.element
      setTimeout(function() {
        elemento.classList.add('animate')
      }, 600);
    },
    offset: '75%'
  })
  
var card4 = new Waypoint({
    element: document.getElementById('card-4'),
    handler: function(direction) {
      let elemento = this.element
      setTimeout(function() {
        elemento.classList.add('animate')
      }, 900);
    },
    offset: '75%'
  })
  
var tituloDepoimentos = new Waypoint({
    element: document.getElementById('titulo-depoimentos'),
    handler: function(direction) {
      this.element.classList.add('animate')
      removeActive()
      navList[2].classList.add('active-a')
    },
    offset: '75%'
  })

var depoimentosNav = new Waypoint({
    element: document.getElementById('titulo-depoimentos'),
    handler: function(direction) {
      removeActive()
      navList[2].classList.add('active-a')
    },
    offset: '10%'
})

var tituloMaps = new Waypoint({
    element: document.getElementById('maps'),
    handler: function(direction) {
      this.element.classList.add('animate')
      removeActive()
      navList[3].classList.add('active-a')
    },
    offset: '75%'
})

var navMaps = new Waypoint({
    element: document.getElementById('maps'),
    handler: function(direction) {
      removeActive()
      navList[3].classList.add('active-a')
    },
    offset: '10%'
})
