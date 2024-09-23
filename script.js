function valueSetters(){
   gsap.set("#nav a",{ y: "-100%", opacity:0});
   gsap.set("#home span .child", { y : "100% "})
   gsap.set("#home .row img",{ opacity: 0 })
   gsap.set(".row .frontend-style #Frontend", { opacity: 0 })
}
function revealToSpan(){
document.querySelectorAll(".reveal")
.forEach(function(elem){
    //create two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");
    //parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");
    //span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    //elem replace its value with parent span 
    elem.innerHTML ="";
    elem.appendChild(parent);

});
}

function loaderAnimation() {
var tl  = gsap.timeline();

tl
   .from("#loader .child span", {
      x:100,
      delay: 0.3,
      stagger: .2,
      duration: 1,
      ease: Power3.easeInOut,
      
   })
  .to("#loader .parent .child", {
      y:"-100%",
      duration: 1,
      ease: Circ.easeInOut
   })
    .to("#loader", {
      height: 0,
     duration: 1,
     ease: Circ.easeInOut
  })
  .to("#green", {
      height: "100%",
      top: 0,
     duration: 1,
     delay: -.8,
     ease: Circ.easeInOut
  })
  .to("#green", {
     height: "0%",
     top: 0,
     duration: 1,
     delay: -.2,
     ease: Circ.easeInOut,
     onComplete: function() {
      animateHomepage();
     }
  })
}

function animateHomepage() {


   var tl = gsap.timeline();

   tl
   .to("#nav a", {
      y : 0,
      opacity : 1,
      stagger : .05,
      ease : Expo.easeInOut
   })
   .to("#home .parent .child", {
      y : 0,
      stagger : .1,
      duration: 1.5,
      ease : Expo.easeInOut
   })
   
   .to(".row .frontend-style #Frontend", {
      opacity: 1,
      duration: 1 ,
      ease : Expo.easeInOut

   })
   .to("#home .row img", {
      opacity: 1,
      ease : Expo.easeInOut
   })
}

function locoInitialize(){
   const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true

   });
}
// name animation
function paraAnimation(){
   var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.style = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };
}

function cardHoverEffect() {
   document.querySelectorAll(".cnt")
   .forEach(function(cnt){
      var showingImage;
      cnt.addEventListener("mousemove", function (dets) {

        document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
        showingImage = dets.target;
        document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        showingImage.style.filter = "grayscale(1)";

        document.querySelector("#work2").style.backgroundColor = "#" + dets.target.dataset.color;

      })
      cnt.addEventListener("mouseleave", function (dets) {
         document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
        showingImage.style.filter = "grayscale(0)";

        document.querySelector("#work2").style.backgroundColor = "#f2f2f2";

         
 
       })
   })
   document.querySelectorAll(".cnt0")
   .forEach(function(cnt0){
      var showingImage; 

      cnt0.addEventListener("mousemove", function (dets) {

        document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
        showingImage = dets.target;
        document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        showingImage.style.filter = "grayscale(1)";

        document.querySelector("#work2").style.backgroundColor = "#" + dets.target.dataset.color;

      })
      cnt0.addEventListener("mouseleave", function (dets) {
         document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
        showingImage.style.filter = "grayscale(0)";

        document.querySelector("#work2").style.backgroundColor = "#f2f2f2";

         
 
       })
   })
  
}
function cardHover2(){
   document.querySelectorAll(".pro")
   .forEach(function(pro){
      var showingImage;
      pro.addEventListener("mousemove", function (dets) {

        document.querySelector("#cursor2").children[dets.target.dataset.index].style.opacity = 1;
        showingImage = dets.target;
        document.querySelector("#cursor2").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        showingImage.style.filter = "grayscale(1)";

        document.querySelector("#work2").style.backgroundColor = "#" + dets.target.dataset.color;


      })
      pro.addEventListener("mouseleave", function (dets) {
         document.querySelector("#cursor2").children[showingImage.dataset.index].style.opacity = 0;
        showingImage.style.filter = "grayscale(0)";

        document.querySelector("#work2").style.backgroundColor = "#f2f2f2";

         
 
       })

   })
}
function cardHover3(){
   document.querySelectorAll(".pic")
   .forEach(function(pic){
      var showingImage;
      pic.addEventListener("mousemove", function(dets) {

        document.querySelector("#cursor3").children[dets.target.dataset.index].style.opacity = 1;
        showingImage = dets.target;
        document.querySelector("#cursor3").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        showingImage.style.filter = "grayscale(1)";

        document.querySelector("#work2").style.backgroundColor = "#" + dets.target.dataset.color;


      })
      pic.addEventListener("mouseleave", function(dets) {
         document.querySelector("#cursor3").children[showingImage.dataset.index].style.opacity = 0;
        showingImage.style.filter = "grayscale(0)";
         
        document.querySelector("#work2").style.backgroundColor = "#f2f2f2";

 
       })
   })
   document.querySelectorAll(".pic0")
   .forEach(function(pic0){
      var showingImage;
      pic0.addEventListener("mousemove", function(dets) {

        document.querySelector("#cursor3").children[dets.target.dataset.index].style.opacity = 1;
        showingImage = dets.target;
        document.querySelector("#cursor3").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        showingImage.style.filter = "grayscale(1)";

        document.querySelector("#work2").style.backgroundColor = "#" + dets.target.dataset.color;


      })
      pic0.addEventListener("mouseleave", function(dets) {
         document.querySelector("#cursor3").children[showingImage.dataset.index].style.opacity = 0;
        showingImage.style.filter = "grayscale(0)";
         
        document.querySelector("#work2").style.backgroundColor = "#f2f2f2";

 
       })
   })
}
function imageAnimation(){
   let imglefElem = document.querySelectorAll(".imglef-elem")

imglefElem.forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
       gsap.to(elem.childNodes[3],{
           opacity:1,
           scale:1

       })
   })
   elem.addEventListener("mouseleave", function(){
       gsap.to(elem.childNodes[3],{
           opacity:0,
           scale:0

       })
      
   })
   elem.addEventListener("mousemove", function(dets){
       gsap.to(elem.childNodes[3],{
           x:dets.x - elem.getBoundingClientRect().x-40,
           y:dets.y - elem.getBoundingClientRect().y-90

       })
   })  

})
}


  
revealToSpan();
valueSetters();
loaderAnimation();
locoInitialize();
paraAnimation();
cardHoverEffect();
cardHover2();
cardHover3();
imageAnimation();



