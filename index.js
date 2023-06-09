const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aniright");
      }
    });
  });
  
  const elementToAnimate = document.querySelector("#right");
  observer.observe(elementToAnimate);
  