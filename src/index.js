// index.js
import "./styles.css";
import backImg from "./bella.png"
import pastaImg from "./pasta.png"
import lasagnaImg from "./lasagna.png"
import pizzaImg from "./pizza.png"
import tiramisuImg from "./tiramisu.png"
import polenta from "./polenta.png"
import gnocchi from "./gnocchi.png"

const imgList = [
        {name: "Pasta",
        src: pastaImg}, 
        {name: "Lasagna",
        src: lasagnaImg}, 
        {name: "Pizza",
        src: pizzaImg}, 
        {name: "Tiramisu",
        src: tiramisuImg}, 
        {name: "Polenta",
        src: polenta}, 
        {name: "Gnocchi",
        src: gnocchi
        }
    ];



const contentDOM = document.getElementById("content");

function makeHome(content) { 

    contentDOM.style.backgroundImage = `url(${backImg})`;
    const mainContainer = document.createElement("div");
    
    mainContainer.classList.add("mainContainer");
    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");


    textContainer.innerHTML = "<h1>  Welcome to Bella's Bistro </h1>" + 

"<h2> Discover the art of flavor at Bella's Bistro, where fresh ingredients and culinary passion come together to create an unforgettable dining experience. Whether you're here for a quick bite, a family dinner, or a special celebration, our menu offers something for everyone. "

+ "  Our Menu From farm-fresh salads to mouthwatering steaks, our chefs craft every dish with care and creativity. Be sure to try our signature Grilled Lemon Herb Salmon—a favorite among regulars."

+ "Cozy Atmosphere Step inside and feel at home. Our warm, inviting atmosphere is perfect for catching up with friends, enjoying a quiet meal, or hosting a gathering.</h2>"

+ "<h2> Reserve Your Table Planning a night out? Book your table in advance to enjoy a seamless dining experience. We can’t wait to serve you!</h2> "

+ "<h2> Hours & Location Open Monday–Saturday, 11 AM–10 PM. Located at 123 Main Street, Downtown.</h2> "

+ "<h2> Come taste the difference at Bella's Bistro—where food meets heart.</h2>"

    mainContainer.appendChild(textContainer);
    content.appendChild(mainContainer);
   
}

function makeMenu(content) { 
    const mainContainer = document.createElement("div");
    
    mainContainer.classList.add("mainContainer");
    // const textContainer = document.createElement("div");

   

    // textContainer.innerHTML = "<h1>  suck my dick </h1> "

    // mainContainer.appendChild(textContainer);

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menuGrid");

    for(let i = 0; i < imgList.length; i++){
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");
        imgContainer.textContent = imgList[i].name;
        let itemImg = document.createElement("img");
        itemImg.classList.add("gridImg");
        itemImg.src = imgList[i].src;
        imgContainer.appendChild(itemImg);
        menuGrid.appendChild(imgContainer);
    }
    mainContainer.appendChild(menuGrid);
    content.appendChild(mainContainer);
   
}

function makeAbout(content) { 
    contentDOM.style.backgroundImage = `url(${backImg})`;
    const mainContainer = document.createElement("div");
    
    mainContainer.classList.add("mainContainer");
    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer3");


    textContainer.innerHTML = "<h1>  About Bella's Bistro </h1>" + 

"<h2> Welcome to Bella's Bistro, where the rich flavors of Italy meet the comfort of home. Nestled in the heart of Downtown, Bella's Bistro has been serving authentic Italian cuisine to locals and visitors alike, offering a cozy, rustic atmosphere perfect for any occasion. "

+ "  Our passion for food comes from generations of Italian culinary tradition. We believe in using only the freshest, locally-sourced ingredients, bringing to life timeless recipes with a modern twist. Whether you're here for a casual lunch, a romantic dinner, or a special celebration, Bella's Bistro provides a dining experience filled with heart, flavor, and warmth. </h2>"

+ "<h1> Our Story </h1> " 
+ "<h2> Founded by Bella Rossi, a chef with deep roots in Italian heritage, Bella's Bistro opened its doors in 2010 with one mission: to bring the taste of Italy to every plate. Growing up in a family of chefs, Bella was inspired by the art of cooking from a young age, learning traditional recipes passed down through generations.</h2> "

+ "<h2> After years of perfecting her craft in kitchens around the world, Bella returned to her hometown, determined to create a space where food could bring people together. Bella's Bistro is the result of that dream—a place where you can savor the flavors of Italy without ever leaving the neighborhood.</h2> "


    mainContainer.appendChild(textContainer);
    content.appendChild(mainContainer);
   
}


makeHome(contentDOM);

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", () => {
    contentDOM.replaceChildren();
    makeHome(contentDOM);
})

menuButton.addEventListener("click", () => {
    contentDOM.replaceChildren();
    makeMenu(contentDOM);
})

aboutButton.addEventListener("click", () => {
    contentDOM.replaceChildren();
    makeAbout(contentDOM);
})
