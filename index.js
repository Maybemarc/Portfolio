///////Navbar////

function openMenu() {
  document.getElementById("sidebar").style.right = "0"; 
  document.getElementById("overlay").style.display = "block"; 
}

function closeMenu() {
  document.getElementById("sidebar").style.right = "-250px";
  document.getElementById("overlay").style.display = "none";
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    closeMenu();
  }
});

/////////section-top: 2 //////////

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.observe);

};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});



////////not_section-next:2 //////////


const allNotSections = document.querySelectorAll(".not_section");

const revealingSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hiddener");

};

const notSectionObserver = new IntersectionObserver(revealingSection, {
  root: null,
  threshold: 0.35,
});

allNotSections.forEach(function (group) {
  notSectionObserver.observe(group);
  group.classList.add("section--hiddener");
});


document.querySelectorAll(".down_links").forEach(
  transform => transform.addEventListener("click", function(e) {
    e.preventDefault()
    console.log("clicked:",transform);
    if(e.target.classList.contains("down_link")){
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior: "smooth"})
    }
  })
)


const hero = document.querySelector(".container")
const Top = document.querySelector(".up")
const project = document.querySelector("#project")
const Goto_project = document.querySelector(".Goto_project")
const home = document.querySelector(".Home")

Goto_project.addEventListener("click",function(e){
  e.preventDefault()
  project.scrollIntoView({behavior: "smooth"})
})

home.addEventListener("click",function(e){
  e.preventDefault()
  hero.scrollIntoView({behavior: "smooth"})
})



