const mouse = {
  x:10,
  y: 10
}

document.addEventListener("mousemove", (ev)=>{
  mouse.x = ev.clientX
  mouse.y = ev.clientY
  gsap.to("#img2", {
    rotateY: -mouse.x * .025,
    rotateX: -mouse.y * .025,
    yoyo: true,
    duration: .25
  })

  gsap.to(".cursor",{
    top: mouse.y,
    left: mouse.x,
    
    duration: .4
  })
})
const links = document.querySelectorAll("a");
links.forEach((e)=>{
  e.addEventListener("mouseenter", (ev)=>{
    gsap.to(".cursor",{
      width: e.clientWidth +20,
      borderRadius: "20px",
      height: e.clientHeight + 20,
      duration: .25
    })
  })
  e.addEventListener("mouseleave", (ev)=>{
    gsap.to(".cursor",{
      width:20,
      borderRadius: "20px",
      height: 20,
      duration: .25
    })
    
  })

})
gsap.registerPlugin(ScrollTrigger)
gsap.to("#img",{
    scale: "1.1",
    yoyo: true,
    duration: 2,
    repeat: -1,
    ease: "slow(0.1, .9)"
})

const tl = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
      trigger: "#footer",
      start: 'top center',
      end: '+=600',
      toggleActions: 'play reverse play reverse',
    },
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".header",
        scrub: 2,
        start: "+=200px",
        snap: true,
        end: "+=300px",
        toggleActions: 'play pause play reverse',
    }
  })
  tl2.to("#img",{
    y: -600,
    duration: 1,
    width: "90%"
  })
  
  tl2.to(".cta",{
    y: 560,
    opacity: 1,
    duration: 1,
  })

  
  // Add the fade animation to the timeline
  tl.to("#footer p",{
    opacity: 1.0,
    stagger: .08,
    duration: .25
  })
  tl.to(".circle",{
    backgroundColor: "#000",
    scale: 1.50,
    y: 50,
    duration: .15
  })
  tl.to(".circle",{
    scale: 1.0,
    rotateX: 180,
    y: 0,
    duration: .2
  })
  tl.to(".circle",{
    backgroundColor: "#000",
    scale: 50.0,
    duration: 2
  })

  tl.to(".links", {
    opacity: 0,
    scale: 1.5,
    duration: .3,
  });



  
  gsap.set(".links", {
    opacity: 1,
    scale: 1.0,
    duration: .31,
  });

