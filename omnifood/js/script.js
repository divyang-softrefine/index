///////////////////////////////////////////////////////////
console.log("Hello world!")

const myName = "Divyang Patel"
const h1= document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

///////////////////////////////////////////////////////////
// Button Navigation 

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener('click',function(){
  headerEl.classList.toggle("nav-open")
})

///////////////////////////////////////////////////////////
// Smooth Scrolling animation

const allLinksEl = document.querySelectorAll('a:link');
console.log(allLinksEl);

allLinksEl.forEach(function(link){
  link.addEventListener('click',function(e){
    e.preventDefault();
    const hrefEl = link.getAttribute('href');
    

    // scroll back to top
    if(hrefEl==="#") window.scrollTo({
      top : 0,
      behavior : "smooth",
    })

    // scroll to other links
    if(hrefEl!=="#" && hrefEl.startsWith('#')) {
      const sectionEl = document.querySelector(hrefEl);
      sectionEl.scrollIntoView({ behavior : "smooth"});
    }

    // close mob nav
    if(link.classList.contains('main-nav-link')){
      headerEl.classList.toggle('nav-open');
    }
  })
})

///////////////////////////////////////////////////////////
// Sticky Navigation

// using intersection observer
const heroSecEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(function(entries){
const ent = entries[0];
console.log(ent);
if(ent.isIntersecting===false){
  document.body.classList.add('sticky')
}else{
  document.body.classList.remove('sticky')
}
},
{
  // in viewport
  root : null,
  threshold : 0,
  rootMargin : "-60px"
});


obs.observe(heroSecEl);




// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js



