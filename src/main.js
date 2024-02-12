


gsap.registerPlugin(EasePack)
gsap.registerPlugin(ScrollTrigger)

gsap.from("header", {
    height: 20,
    ease: "easeInOut(7)",
    y: 390,
    duration: 1.5
})

const nav = document.querySelector(".nav2");
nav.addEventListener("click", (e)=>{

    if(nav.classList.contains("opened")){
        gsap.to(".nav",{
            width: "100%",
            height: "100dvh",
            flexFlow: "row nowrap",
            duration: .25,
            opacity: 0,
            left: "-100vw",
            zIndex: 0
        })
        nav.classList.remove("opened")
    }
    else{
        gsap.to(".nav",{
            width: "100%",
            height: "100dvh",
            flexFlow: "column nowrap",
            alignItems:"center",
            justifyContent: "space-evenly",
            backdropFilter: "blur(8px)",
            duration: .25,
            opacity: 1.0,
            top: 0,
            left: 0,
            zIndex: 8
        })
        nav.classList.add("opened");
    }


})


var qblocks = document.getElementsByClassName("qblock");

// Loop through each question block
for (var i = 0; i < qblocks.length; i++) {
  var qblock = qblocks[i];
  var question = qblock.querySelector(".question");
  var answer = qblock.querySelector(".answer");

  // Set up the click event listener
  question.addEventListener("click", toggleAccordion);
}

// Function to toggle the accordion
function toggleAccordion() {
  var answer = this.nextElementSibling;

  // Toggle the visibility of the answer using GSAP
  gsap.to(answer, {
    duration: 0.3,
    height: answer.clientHeight ? 0 : "auto",
    ease: "power1.inOut"
  });
}
