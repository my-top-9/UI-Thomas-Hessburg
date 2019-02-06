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




//nav button event listeners
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

let meetPeople = document.querySelector(".main-nav .meet-people");
meetPeople.addEventListener("click", function(){
    mainContainer.classList.toggle("body-toggle-class");
    body.classList.toggle("body-cover")
    nav.classList.toggle("nav-display-toggle");  
})
let findFriends = document.querySelector(".main-nav .find-friends");
findFriends.addEventListener("click", function(){
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

let counter = 0;

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
        this.data = attributes.data;
            
        let currentTab = document.querySelector(`.content[data-tab="${this.data}"] p`);//get current tab
        let sports = document.querySelector(`.content[data-tab="${this.data}"] .sports`);//get sports button
        let foods = document.querySelector(`.content[data-tab="${this.data}"] .food`);//get foods button
        let movies = document.querySelector(`.content[data-tab="${this.data}"] .movies`);//get movies button
        let gamesButton = document.querySelector(`.content[data-tab="${this.data}"] .games`);//get games button
        let tvButton = document.querySelector(`.content[data-tab="${this.data}"] .tv`);//get tv button

        let tabTitle = document.querySelector(`.content[data-tab="${this.data}"] h3`);//get header to place name
        let tabContent = document.querySelector(`.content[data-tab="${this.data}"] p`);//get p tag to place content
        let profImage = document.querySelector(`.content[data-tab="${this.data}"] .content-top img`);//get img to add to source;
        tabContent.innerHTML = this.tellInterests();//set default content to a list of some basic interests
        tabTitle.innerHTML = this.name;//sets header to the persons name
        profImage.src = this.img; //sets image source to img passed in


        tabTitle.addEventListener("click",() => {     //click persons name to return to list of basic interests
        tabContent.innerHTML =  this.tellInterests();
        })

        sports.addEventListener("click", () => {//click sports button to change content to list of sports
        currentTab.innerHTML = this.listSports();
        })
        foods.addEventListener("click", () => {//click foods button to change content to list of foods
        currentTab.innerHTML = this.listFoods();
        })
        movies.addEventListener("click", () => {//click movies button to change content to list of movies
        currentTab.innerHTML = this.listMovies();
        })
        gamesButton.addEventListener("click", () => {//click games button to change content to list of games
        currentTab.innerHTML = this.listGames();
        })
        tvButton.addEventListener("click", () => {//click tv button to change content to list of tv
        currentTab.innerHTML = this.listTv();
        })

    }
    tellInterests(){
        return `Hey! My name is <span style="color: rgb(67, 151, 164);">${this.name}</span>, i'm <span style="color: rgb(67, 151, 164);">${this.age}</span>, and I love <span style="color: #FC3768;">${this.foods[0]}, ${this.movies[0]}, ${this.sports[0]}. ${this.tv[0]}</span>, and <span style="color: #FC3768;">${this.games[0]}</span>, along with so much more!!!`
    }
    listFoods(){
    let food = [...this.foods].map(food => " "+ food);
    return`I love to eat:<br><span style="color: #FC3768;">${food}</span>.`;
    
    }
    listMovies(){
    let movies = [...this.movies].map(movie => " "+ movie);  
    return   `I love to watch:<br><span style="color: #FC3768;">${movies}</span>.`;
    }
    listSports(){
    let sports = [...this.sports].map(sport => " "+ sport); 
    return   `I love to play:<br><span style="color: #FC3768;">${sports}</span>.`;
    }
    listTv(){
    let tv = [...this.tv].map(show => " "+ show); 
    return   `I love to watch:<br><span style="color: #FC3768;">${tv}</span>.`;
    }
    listGames(){
    let games = [...this.games].map(game => " "+ game); 
    return   `I love to play:<br><span style="color: #FC3768;">${games}</span>.`;
    }
}//person constructor for info to populate tabs


let tom = new Person({
    img: "https://source.unsplash.com/random/300x300/?people,man",
    name: "Tom",
    age: 23,
    foods: ["bacon","kale","pizza","burgers","toast","cereal","chic-fil-a","tostidos","and everything else"],
    movies: ["Forrest Gump", "Green Mile", "Tropic Thunder","Lovely","Kung-Fu-Panda","Windows","BumbleBee","Spider-Man","and A Quiet Place"],
    sports: ["MMA", "lacrosse", "football","water polo","ping-pong","fencing","tennis","hockey","and archery"],
    tv: ["Game of Thrones", "SpongeBob","Big Bang Theory","Stranger Things","Doctor Who","Black Mirror","Arrow","SNL","and Riverdale"],
    games: ["What do you Meme?", "Monopoly", "puzzles", "minecraft","tetris","Doom","Madden","Fortnite","and Fallout"],
    data: 1
})//populated in tab 1
let sarah = new Person({
    img: "https://source.unsplash.com/random/300x300/?people,woman",
    name: "Sarah",
    age: 31,
    foods: ["pub subs","kale","pizza","burgers","toast","cereal","chic-fil-a","tostidos","and everything else"],
    movies: ["Spy Kids", "Green Mile", "Tropic Thunder","Lovely","Kung-Fu-Panda","Windows","BumbleBee","Spider-Man","and A Quiet Place"],
    sports: ["ballet", "lacrosse", "football","water polo","ping-pong","fencing","tennis","hockey","and archery"],
    tv: ["Shameless", "SpongeBob","Big Bang Theory","Stranger Things","Doctor Who","Black Mirror","Arrow","SNL","and Riverdale"],
    games: ["Rocket League", "Monopoly", "puzzles", "minecraft","tetris","Doom","Madden","Fortnite","and Fallout"],
    data: 2
})//populated in tab 2
let jeff = new Person({
    img: "https://source.unsplash.com/random/300x300/?people,boy",
    name: "Jeff",
    age: 17,
    foods: ["poptarts","kale","pizza","burgers","toast","cereal","chic-fil-a","tostidos","and everything else"],
    movies: ["BRINK!", "Green Mile", "Tropic Thunder","Lovely","Kung-Fu-Panda","Windows","BumbleBee","Spider-Man","and A Quiet Place"],
    sports: ["soccer", "lacrosse", "football","water polo","ping-pong","fencing","tennis","hockey","and archery"],
    tv: ["Handmaid's Tail", "SpongeBob","Big Bang Theory","Stranger Things","Doctor Who","Black Mirror","Arrow","SNL","and Riverdale"],
    games: ["Mario Bros", "Monopoly", "puzzles", "minecraft","tetris","Doom","Madden","Fortnite","and Fallout"],
    data: 3
})//populated in tab 3
