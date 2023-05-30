import { useEffect } from 'react';

const UseIntersectionAnimations = () => {
    useEffect(() => {
        const leftSwipeObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("swipe-left");
    
              setTimeout(() => {
                entry.target.classList.remove("swipe-left");
              }, 1000);
            }
          });
        });
        document.querySelectorAll(".animate-left").forEach((el) => {
          leftSwipeObserver.observe(el);
        });
    
        const rightSwipeObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("swipe-right");
    
              setTimeout(() => {
                entry.target.classList.remove("swipe-right");
              }, 1000);
            }
          });
        });
        document.querySelectorAll(".animate-right").forEach((el) => {
          rightSwipeObserver.observe(el);
        });
    
        const downSwipeObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("swipe-down");
    
              setTimeout(() => {
                entry.target.classList.remove("swipe-down");
              }, 1000);
            }
          });
        });
        document.querySelectorAll(".animate-down").forEach((el) => {
          downSwipeObserver.observe(el);
        });
    
        const upSwipeObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("swipe-up");
    
              setTimeout(() => {
                entry.target.classList.remove("swipe-up");
              }, 1000);
            }
          });
        });
        document.querySelectorAll(".animate-up").forEach((el) => {
          upSwipeObserver.observe(el);
        });
      }, []);
};

export default UseIntersectionAnimations;
