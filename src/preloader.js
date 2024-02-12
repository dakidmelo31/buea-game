// (function(){
//     document.querySelector("#meta1").outerHTML = "<meta content='#000' name='theme-color' id='meta2' />";
//     const mainBody = document.querySelector("#mainBody")

//     gsap.set(mainBody,{
//         "overflowY": "hidden",
//     })
//     gsap.set(".page",{
//         filter: "blur(25px)",
//     })

//     function loadChecker(){
//         function doneLoading(){

//             gsap.to("#divs .pre-column",{
//                 height: 0,
//                 scale: 1,
//                 borderRadius:"15px",
//                 stagger: .03,
//                 duration: 1.2,
//                 onComplete: ()=>{
//                     document.querySelector("#meta2").outerHTML = "<meta content='#fff' name='theme-color' id='meta1' />";
//                     gsap.set(mainBody,{
//                         "overflowY": "auto"
//                     })
//                     gsap.set(".preloader", {
//                         display: "none"
//                     })
//                     gsap.to(".page", {
//                         filter: "blur(0px)",
//                         duration: .35
//                     })
//                 }
//             })
//             }

//             const imgs = document.images;
//             const total = imgs.length;
//             let count = 0;
//             const percentElement = document.querySelector("#percentage")

            
            
//             function imgLoaded() {
//                 count++;
//                 var perc = (100/total * count) << 0;
//                 console.log(perc)
                
//                 //updating count
//                 percentElement.innerHTML = perc;

//                 if(count == total) return doneLoading();
            
//             }

//             for(let i = 0; i < total; i++){
//                 var img = new Image();
//                 img.onload = imgLoaded;
//                 img.onerror= imgLoaded;
//                 img.src = imgs[i].src;
//             }
                    
//     }
    
// document.addEventListener("DOMContentLoaded", loadChecker, false);

// }());


