// ANIMATION CONTENT ON WEBSITE WHEN SCROLL

AOS.init();



$("[data-toggle=popover1]").popover({
        html : true,
       	trigger: 'focus',
        content: function() {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        }
    });

$('[data-toggle="popover"]').popover();

$("[data-toggle=popover3]").popover();



//COROUSEL

var elem = document.querySelector('.main-carousel');

var flkty = new Flickity( elem, {
  cellAlign: 'left',
  freeScroll: true,
  contain: true,
  autoPlay: 1900,
  wrapAround: true,
  on: {
    ready: function() {
      console.log('Flickity ready');
    }
  }
});


var slide = document.querySelector('.auctions-carousel');

var flkty = new Flickity( slide, {
  cellAlign: 'left',
  freeScroll: true,
  contain: true,
  autoPlay: 1900,
  wrapAround: true,
  on: {
    ready: function() {
      console.log('Flickity ready');
    }
  }
});


$('[data-fancybox="images"]').fancybox({
  buttons : [ 
    'slideShow',
    'share',
    'zoom',
    'fullScreen',
    'close'
  ],
  thumbs : {
    autoStart : true  
  }

});


function loadGallery() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Zobacz więcej"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Zobacz mniej"; 
    moreText.style.display = "inline";
  }
}



