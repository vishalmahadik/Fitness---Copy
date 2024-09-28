// scroll btn to top
const scrollBtn = document.querySelector("#scrollbtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// aos animation
AOS.init({ once: true });

function adjustAOSOffset() {
  const element = document.getElementById("myElement");
  const element2 = document.getElementById("myElement2");
  const element3 = document.getElementById("testimonial");
  const element4 = document.getElementById("myElement4");

  if (window.innerWidth < 768) {
    element.setAttribute("data-aos-offset", "-400");
    element2.setAttribute("data-aos-offset", "-350");
    element2.setAttribute("data-aos-delay", "300");
    element3.setAttribute("data-aos-offset", "-120");
    element4.setAttribute("data-aos-offset", "-50");
  } else {
    element.setAttribute("data-aos-offset", "100");
  }

  AOS.refresh();
}

adjustAOSOffset();
window.addEventListener("resize", adjustAOSOffset);
