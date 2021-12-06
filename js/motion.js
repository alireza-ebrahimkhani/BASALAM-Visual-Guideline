gsap.registerPlugin(ScrollTrigger);

var tween = gsap.from(".imgMotion", {
    duration:10,
    scale:0.7,
    y:100,
    stagger:2,
    opacity:0,
    ease: "power4", 
    scrollTrigger: {
        trigger: "#imgMotionWrapper",
        start: "-20% center",
        end:  "center 50%",
        scrub:true,
        //pinSpacing:false, 
        //toggleActions:"restart none none none",
        //markers: true,
    }
  });
  