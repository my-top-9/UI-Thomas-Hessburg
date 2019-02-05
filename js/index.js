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
      this.element.style.border = "4px solid #EDEDED";
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








  //carousel stuff

  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselImages = document.querySelectorAll(".carousel-slide img");
  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");

  let counter = 1;







  prevButton.addEventListener("click", function(){


    Array.from(carouselImages).map(image => image.style.display = "none");

    if(counter>0){
        counter--;
    }else{
        counter = 6;
    }
    
    carouselImages[counter].style.display = "block";


    TweenLite.from(".carousel-slide", 1.2, {
        ease: Bounce.easeOut,
        scale: 1.2
    });
    
  })

  nextButton.addEventListener("click", function(){
    Array.from(carouselImages).map(image => image.style.display = "none");
    if(counter<6){
        counter++;
    }else{
        counter = 0;
    }
    
    carouselImages[counter].style.display = "block";
    TweenLite.from(".carousel-slide", 1.2, {
        ease: Bounce.easeOut,
        scale: 1.2
    });
    
    
  });















  //Person construtor, making mock people who can show their accounts in the tabs section...

  class Person{
      constructor(attributes){
          this.img = attributes.img;
          this.name = attributes.name;
          this.age = attributes.age;
          this.foods = attributes.foods;
          this.movies = attributes.movies;
          this.sports = attributes.sports;
          this.tv = attributes.tv;
          this.games = attributes.games;
      }
      tellInterests(){
          return `Hey! My name is ${this.name}, i'm ${this.age}, and I love ${this.foods[0]}, ${this.movies[0]}, ${this.sports[0]}. ${this.tv[0]}, and ${this.games[0]}, along with so much more!!!`
      }
      listFoods(){
        return`I love to eat ${[...this.foods]}`;
        
      }
      listMovies(){
        return   `I love to watch ${[...this.movies]}`
      }
      listSports(){
        return   `I love to play ${[...this.sports]}`
      }
      listTv(){
        return   `I love to watch ${[...this.tv]}`
      }
      listGames(){
        return   `I love to play ${[...this.games]}`
      }
  }



//tab one person
let tom = new Person({
    img: undefined,
    name: "Tom",
    age: 23,
    foods: ["bacon","kale","everything else"],
    movies: ["Forrest Gump", "Green Mile", "Tropic Thunder"],
    sports: ["MMA", "lacrosse", "football"],
    tv: ["Game of Thrones", "SpongeBob"],
    games: ["What do you Meme?", "monopoly", "rubiks cubes"]
})
let tabOneTitle = document.querySelector(`.content[data-tab="1"] h3`);
let tabOneContent = document.querySelector(`.content[data-tab="1"] p`);
tabOneContent.innerHTML = tom.tellInterests();
tabOneTitle.innerHTML = tom.name;


let tomSports = document.querySelector(`.content[data-tab="1"] .sports`);
tomSports.addEventListener("click", () => {
    tabOneContent.innerHTML = tom.listSports();
})

let tomFoods = document.querySelector(`.content[data-tab="1"] .food`);
tomFoods.addEventListener("click", () => {
    tabOneContent.innerHTML = tom.listFoods();
})

let tomMovies = document.querySelector(`.content[data-tab="1"] .movies`);
tomMovies.addEventListener("click", () => {
    tabOneContent.innerHTML = tom.listMovies();
})

let tomGames = document.querySelector(`.content[data-tab="1"] .games`);
tomGames.addEventListener("click", () => {
    tabOneContent.innerHTML = tom.listGames();
})

let tomTv = document.querySelector(`.content[data-tab="1"] .tv`);
tomTv.addEventListener("click", () => {
    tabOneContent.innerHTML = tom.listTv();
})




//tab two person
let sarah = new Person({
    img: undefined,
    name: "Sarah",
    age: 31,
    foods: ["burgers","kale","everything else"],
    movies: ["Shrek", "Green Mile", "Tropic Thunder"],
    sports: ["ballet", "lacrosse", "football"],
    tv: ["Friends", "SpongeBob"],
    games: ["Mouse Trap", "monopoly", "rubiks cubes"]
})
let tabTwoTitle = document.querySelector(`.content[data-tab="2"] h3`);
let tabTwoContent = document.querySelector(`.content[data-tab="2"] p`);
tabTwoContent.innerHTML = sarah.tellInterests();
tabTwoTitle.innerHTML = sarah.name;  


let sarahSports = document.querySelector(`.content[data-tab="2"] .sports`);
sarahSports.addEventListener("click", () => {
    tabTwoContent.innerHTML = sarah.listSports();
})

let sarahFoods = document.querySelector(`.content[data-tab="2"] .food`);
sarahFoods.addEventListener("click", () => {
    tabTwoContent.innerHTML = sarah.listFoods();
})

let sarahMovies = document.querySelector(`.content[data-tab="2"] .movies`);
sarahMovies.addEventListener("click", () => {
    tabTwoContent.innerHTML = sarah.listMovies();
})

let sarahGames = document.querySelector(`.content[data-tab="2"] .games`);
sarahGames.addEventListener("click", () => {
    tabTwoContent.innerHTML = sarah.listGames();
})

let sarahTv = document.querySelector(`.content[data-tab="2"] .tv`);
sarahTv.addEventListener("click", () => {
    tabTwoContent.innerHTML = sarah.listTv();
})




//tab three person
let jeff = new Person({
    img: undefined,
    name: "Jeff",
    age: 17,
    foods: ["milk shakes","kale","everything else"],
    movies: ["Avengers", "Green Mile", "Tropic Thunder"],
    sports: ["Baseball", "lacrosse", "football"],
    tv: ["Jimmy Neutron", "SpongeBob"],
    games: ["tag", "monopoly", "rubiks cubes"]
})

let tabThreeTitle = document.querySelector(`.content[data-tab="3"] h3`);
let tabThreeContent = document.querySelector(`.content[data-tab="3"] p`);
tabThreeContent.innerHTML = jeff.tellInterests();
tabThreeTitle.innerHTML = jeff.name;  


let jeffSports = document.querySelector(`.content[data-tab="3"] .sports`);
jeffSports.addEventListener("click", () => {
    tabThreeContent.innerHTML = sarah.listSports();
})

let jeffFoods = document.querySelector(`.content[data-tab="3"] .food`);
jeffFoods.addEventListener("click", () => {
    tabThreeContent.innerHTML = sarah.listFoods();
})

let jeffMovies = document.querySelector(`.content[data-tab="3"] .movies`);
jeffMovies.addEventListener("click", () => {
    tabThreeContent.innerHTML = sarah.listMovies();
})

let jeffGames = document.querySelector(`.content[data-tab="3"] .games`);
jeffGames.addEventListener("click", () => {
    tabThreeContent.innerHTML = sarah.listGames();
})

let jeffTv = document.querySelector(`.content[data-tab="3"] .tv`);
jeffTv.addEventListener("click", () => {
    tabThreeContent.innerHTML = sarah.listTv();
})