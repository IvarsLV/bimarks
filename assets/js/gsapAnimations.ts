import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    // General timeline for Hero Section
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

      tl.from(".hero-title", { opacity: 0, y: 50, duration: 1, ease: "power2.out" })
        .from(".hero-subtitle", { opacity: 0, y: 30, duration: 1, ease: "power2.out" }, "-=0.6")
        .from(".hero-button", { opacity: 0, scale: 0.8, duration: 1, ease: "power2.out" }, "-=0.6");

      // Scroll-triggered animation for header
      gsap.from("#header", {
        scrollTrigger: {
          trigger: "#header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Parallax effect for watermark in #about
      gsap.fromTo("#about .watermark",
        { y: -20, scale: 0.80, transformOrigin: "center" },
        {
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
          y: 0,
          scale: 1,
          ease: "none"
        }
      );

      // Parallax effect for watermark in #services
      gsap.fromTo("#services .watermark",
        { y: -20, scale: 0.80, transformOrigin: "center" },
        {
          scrollTrigger: {
            trigger: "#services",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
          y: 0,
          scale: 1,
          ease: "none"
        }
      );

      // Animations for about section
      gsap.from(".about-title, .about-subtitle, .about-text", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
      });

      // Animations for about card elements
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: ".about-card",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3
      });

      // Animations for services section
      gsap.from(".services-title, .services-subtitle", {
        scrollTrigger: {
          trigger: "#services",
          start: "top 95%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
      });

      // Animations for cd-card
      gsap.from(".cd-card", {
        scrollTrigger: {
          trigger: ".cd-card",
          start: "top 75%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
      });

      // Animations for lkt-card
      gsap.from(".lkt-card", {
        scrollTrigger: {
          trigger: ".lkt-card",
          start: "top 75%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
      });

      // Animations for lab-card
      gsap.from(".lab-card", {
        scrollTrigger: {
          trigger: ".lab-card",
          start: "top 75%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "power2.out", 
        stagger: 0.2
      });

      // Animations for contact section
      gsap.from("#contact", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top bottom",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Parallax effect for images in .parallax-img
      gsap.utils.toArray(".parallax-img").forEach((img) => {
        const element = img as HTMLElement;  // Приводим к типу HTMLElement
        const trigger = element.parentElement || element;
      
        gsap.fromTo(
          element,
          { y: -50, scale: 1.1, transformOrigin: "center" },
          {
            y: 10,
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      });

      // ScrollTop button functionality
      const scrollTopBtn = document.getElementById("scrollTopBtn");

      if (scrollTopBtn) {
        ScrollTrigger.create({
          start: "top -300",
          onEnter: () => {
            scrollTopBtn.classList.remove("opacity-0", "pointer-events-none");
            scrollTopBtn.classList.add("opacity-100", "pointer-events-auto");
          },
          onLeaveBack: () => {
            scrollTopBtn.classList.remove("opacity-100", "pointer-events-auto");
            scrollTopBtn.classList.add("opacity-0", "pointer-events-none");
          },
        });

        scrollTopBtn.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    }
  }