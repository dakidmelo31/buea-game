
gsap.from(".leftbar div",{
    x: 50,
    duration: .5,
    ease: "slow(.55, 1)",
    stagger: .100
})

var opened = false;
var menuTl = gsap.timeline();

const menu = document.querySelector(".leftbar");
menu.addEventListener("click", (e) => {
  if (!opened) {
    opened = true;
    menuTl.to(".leftbar div", {
      width: "80%",
      left: 0,
      duration: 0.5,
      ease: "slow(.55, 1)",
      stagger: 0.1
    }).play();
    gsap.to(".sidebar", {
        right: 0,
        duration: .5
    })
} else {
    opened = false;
    gsap.to(".sidebar", {
        right: "-120vw",
        duration: .5
    })
    menuTl.reverse();
  }
});