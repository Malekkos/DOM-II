import './less/index.less'

// Your code goes here!
let homeLink = document.querySelector("nav a:nth-of-type(1)")
let aboutLink = document.querySelector("nav a:nth-of-type(2)")
let blogLink = document.querySelector("nav a:nth-of-type(3)")
let contactLink = document.querySelector("nav a:nth-of-type(4)")
// let nav = document.querySelector("nav");
let busImage = document.querySelector("img:nth-of-type(1)");

homeLink.addEventListener("mouseover", event => {
  event.target.style.transition = "1.3s";
  event.target.style.backgroundColor = "lightgray"
  event.target.style.borderRadius = "40%"
  event.target.style.border = "0.2rem solid"
  event.target.style.height = "4rem"
  event.target.style.paddingTop = "0.8rem"
  event.target.style.fontSize = "2.3rem"
});
homeLink.addEventListener("mouseleave", event => {
  event.target.style.transition = "2s";
  event.target.style.backgroundColor = "white";
  event.target.style.fontSize = "1.6rem";
  event.target.style.border = "0";
  event.target.style.height = "0";
  event.target.style.padding = "0";
})
aboutLink.addEventListener("mouseover", event => {
  event.target.style.transition = "1.3s";
  event.target.style.backgroundColor = "lightgray"
  event.target.style.borderRadius = "40%"
  event.target.style.border = "0.2rem solid"
  event.target.style.height = "4rem"
  event.target.style.paddingTop = "0.8rem"
  event.target.style.fontSize = "2.3rem"
});
aboutLink.addEventListener("mouseleave", event => {
  event.target.style.transition = "2s";
  event.target.style.backgroundColor = "white";
  event.target.style.fontSize = "1.6rem";
  event.target.style.border = "0";
  event.target.style.height = "0";
  event.target.style.padding = "0";
})
blogLink.addEventListener("mouseover", event => {
  event.target.style.transition = "1.3s";
  event.target.style.backgroundColor = "lightgray"
  event.target.style.borderRadius = "40%"
  event.target.style.border = "0.2rem solid"
  event.target.style.height = "4rem"
  event.target.style.paddingTop = "0.8rem"
  event.target.style.fontSize = "2.3rem"
});
blogLink.addEventListener("mouseleave", event => {
  event.target.style.transition = "2s";
  event.target.style.backgroundColor = "white";
  event.target.style.fontSize = "1.6rem";
  event.target.style.border = "0";
  event.target.style.height = "0";
  event.target.style.padding = "0";
})
contactLink.addEventListener("mouseover", event => {
  event.target.style.transition = "1.3s";
  event.target.style.backgroundColor = "lightgray"
  event.target.style.borderRadius = "40%"
  event.target.style.border = "0.2rem solid"
  event.target.style.height = "4rem"
  event.target.style.paddingTop = "0.8rem"
  event.target.style.fontSize = "2.3rem"
});
contactLink.addEventListener("mouseleave", event => {
  event.target.style.transition = "2s";
  event.target.style.backgroundColor = "white";
  event.target.style.fontSize = "1.6rem";
  event.target.style.border = "0";
  event.target.style.height = "0";
  event.target.style.padding = "0";
})
console.log(busImage);
busImage.addEventListener("mouseover", event => {
  event.target.style.transition = "1s";
  event.target.style.marginLeft = "38rem";
  // event.target.style.marginRight = "4rem";
  console.log("hello");
})
busImage.addEventListener("mouseleave", event => {
  event.target.style.transition = "1.6s";
  event.target.style.marginLeft = "-20rem";
  setTimeout(() => {
    event.target.style.marginLeft = "0rem";
  }, 2500)
})

//a

















// nav.addEventListener("mouseover", event => {
//   if (event.target.classList.contains("nav-link")) {
//     console.log("hovered on a child element")
//     event.target.style.transition = "2s";
//     event.target.style.width = "6rem";
//     event.target.style.backgroundColor = "lightgray"
//   }
  
// })
// nav.addEventListener("mouseleave", event => {
//   if (event.target.classList.contains("nav-link")) {
//     console.log("left a child element")
//     event.target.style.transition = "1s";
//     event.target.style.width = "3rem";
//   }
  
// })
// nav.addEventListener("mouseleave", event => {
  
// })
// homeLink.addEventListener("mouseleave", event => {
//   event.target.style.transition = "2s";
//   event.target.style.backgroundColor = "white";
// })
//Animation for the nav button, on hover turn a bit gray
// Can use transition. Why not shorten the other button's as well when hovering on one?
// As the screen scrolls down, change the color
// Make the nav buttons actually do something. Something like alert, or rick roll idk