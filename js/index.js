//variable for eventListeners
let navButton = document.querySelector(".nav-button");
let mainContainer = document.querySelector(".main-container");
let body = document.querySelector("body");
let nav = document.querySelector(".main-nav");
let closeNav = document.querySelector(".close-nav");
let plusNav = document.querySelector(".tab-plus-nav");
let fullTopSection = document.querySelector(".section-one");
let downArrow = document.querySelector(".down-arrow");


//GSAP
TweenLite.from(".nav-button", 1.4, {
    ease: Bounce.easeOut,
    x: 130
  });
TweenLite.from(".tab-plus-nav", 2.1, {
    ease: Bounce.easeOut,
    x: 830
});  
TweenLite.from(".main-container h2", 1.4, {
    ease: Bounce.easeOut,
    x: -230
});
TweenLite.from(".section-one h1", 1, {
    ease: Bounce.easeOut,
    x: -330
});
TweenLite.from(".section-one .people .man-woman:nth-child(2)", 1.9, {
    ease: Bounce.easeOut,
    y: -330
});
TweenLite.from(".section-one .people .man-woman:nth-child(1)", 1.7, {
    ease: Bounce.easeOut,
    y: -230
});




//basic event listeners
navButton.addEventListener("click", function(){
    mainContainer.classList.toggle("body-toggle-class");
    body.classList.toggle("body-cover")
    nav.classList.toggle("nav-display-toggle");
})

closeNav.addEventListener("click", function(){
    mainContainer.classList.toggle("body-toggle-class");
    body.classList.toggle("body-cover")
    nav.classList.toggle("nav-display-toggle");  
})









//tabs component section
class TabLink {
    constructor(element) {
     
      this.element = element;
      this.data = this.element.dataset.tab;
      
      this.itemElement = document.querySelector(`.content[data-tab="${this.data}"]`);
      
      this.tabItem = new TabItem(this.itemElement);
      
      this.element.addEventListener("click", () => this.select());
    };
  
    select() {
      let tabs = document.querySelectorAll(".tab");
      tabs.forEach(tab => {
          tab.style.border = "none";
          tab.style.color = "#EDEDED";
        } )  
      this.element.style.border = "4px solid #FC3768";
      this.element.style.color = "#FC3768";

      const links = document.querySelectorAll(".content");
      links.forEach(link => link.classList.remove("tabs-link-selected"));
      
      this.element.classList.add("tabs-link-selected");
      
      this.tabItem.select(this.element);
    }
  }
  
  
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      let items = document.querySelectorAll(".content");
     
      items.forEach(item => item.classList.remove("tabs-item-selected"));
     
      this.element.classList.add("tabs-item-selected");
    }
  }
  
  
  
  
  
  let links = document.querySelectorAll(".tab").forEach(link => new TabLink(link));