/*========= Idea [0]: toggle icon navbar =========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  // ---- [1] convert menu icon to cancle icon ----
  // [1.1]
  // bx-x refer to --> <i class='bx bx-x' ></i>
  menuIcon.classList.toggle("bx-x");
  // [1.2]
  navbar.classList.toggle("active");
};

/*========= Idea [1]: scroll sections active link =========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*========= Idea [2]: sticky navbar =========*/
  let header = document.querySelector("header", window.scrollY > 100);

  /*========= Idea [3]: remove toggle icon and navbar when click navbar link (scroll) =========*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*========= scroll reveal =========*/
ScrollReveal({
  reset: true,
  distance: "50px",
  duration: 2000,
  delay: 200,
});

// reveal-1
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
// reveal-2
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
// reveal-3
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
// reveal-4
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*========= typed js =========*/
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  typeDelay: 1000,
  loop: true,
});

/*========= Current Year =========*/
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerText = currentYear;

/*========= Email.js =========*/
const loader = document.querySelector(".loader");
loader.style.display = "none";

const notify = document.querySelector(".notification");
notify.style.display = "none";

function sendEmail(event) {
  event.preventDefault();
  loader.style.display = "block";

  var templateParams = {
    firstName: document.getElementById("firstName").value,
    email: document.getElementById("email").value,
    lastName: document.getElementById("lastName").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.init("JDjwsl8plApW2xhJb");

  var service_id = "service_ta20zur";
  var template_id = "template_q8v1py4";

  emailjs
    .send(service_id, template_id, templateParams)
    .then((res) => {
      loader.style.display = "none";
      notify.style.display = "flex";
      setTimeout(() => {
        notify.style.display = "none";
      }, 3000);
    })

    .catch((err) => {
      alert("Something went wrong!");
      loader.style.display = "none";
    });
}

/*========= Portfolio =========*/

let projects = [
  {
    id: 0,
    img: "./images/project7.png",
    category: "react",
    title: "Educaring",
    desc: "EduCaring website for education management",
    accomplishmentList: [
      "React.js",
      "React-Router && React-Redux && i18next",
      "jwt-decode && react-toastify",
      "HTML5 && CSS3 && SCSS && Bootstrap",
    ],
    liveDemo: "https://educarring.com/",
    githubLinkk: "https://github.com/TahaKhaledSaad/EduCaring",
  },
  {
    id: 1,
    img: "./images/project8.png",
    category: "react",
    title: "Mulhm",
    desc: "Dashboard for worker and supervisor management",
    accomplishmentList: [
      "React.js",
      "Redux && React-Router && i18next",
      "HTML5 && CSS3 && SCSS && Bootstrap",
      "axios && Primereact && Recharts",
    ],
    liveDemo: "Under_Work...",
    githubLinkk: "https://github.com/TahaKhaledSaad/Mulhm",
  },
  {
    id: 2,
    img: "./images/project5.png",
    category: "javascript",
    title: "Shop App",
    desc: "Login and Signup page using Regular Expression",
    accomplishmentList: ["HTML5", "CSS3", "Bootsrap", "Javascript"],
    liveDemo: "https://tahakhaledsaad.github.io/Buy/",
    githubLinkk: "https://github.com/TahaKhaledSaad/Buy",
  },
  {
    id: 5,
    img: "./images/project09.png",
    category: "javascript",
    title: "Memory Game",
    desc: "Memory Game for making random cards using javascript",
    accomplishmentList: ["HTML5", "CSS3", "javascript"],
    liveDemo: "https://tahakhaledsaad.github.io/Memory-Game/",
    githubLinkk: "https://github.com/TahaKhaledSaad/Memory-Game",
  },
  {
    id: 3,
    img: "./images/project6.png",
    category: "javascript",
    title: "Quiz App",
    desc: "Quiz App for testing your knowledge in javascript",
    accomplishmentList: ["HTML5", "CSS3", "javascript"],
    liveDemo: "https://tahakhaledsaad.github.io/Quiz-App/",
    githubLinkk: "https://github.com/TahaKhaledSaad/Quiz-App",
  },
  {
    id: 4,
    img: "./images/project10.png",
    category: "javascript",
    title: "Hangman Game",
    desc: "Hangman Game for guessing the word using javascript",
    accomplishmentList: ["HTML5", "CSS3", "javascript"],
    liveDemo: "https://tahakhaledsaad.github.io/Hangman-Game/",
    githubLinkk: "https://github.com/TahaKhaledSaad/Hangman-Game",
  },
  {
    id: 10,
    img: "./images/project11.png",
    category: "javascript",
    title: "ToDo List",
    desc: "ToDo List for adding and deleting tasks using javascript",
    accomplishmentList: ["HTML5", "CSS3", "javascript"],
    liveDemo: "https://tahakhaledsaad.github.io/To-Do/",
    githubLinkk: "https://github.com/TahaKhaledSaad/To-Do",
  },
  {
    id: 6,
    img: "./images/project1.png",
    category: "basics",
    title: "FreEasy",
    desc: "Shoping website with main concepts of css",
    accomplishmentList: ["HTML5", "CSS3", "Bootsrap"],
    liveDemo: "https://tahakhaledsaad.github.io/FreEasy/",
    githubLinkk: "https://github.com/TahaKhaledSaad/FreEasy",
  },
  {
    id: 7,
    img: "./images/project2.png",
    category: "basics",
    title: "Dashboard",
    desc: "Dashboard with many features and Tools",
    accomplishmentList: [
      "HTML5",
      "CSS3",
      "Creating Framework for styling as Bootstrap",
    ],
    liveDemo: "https://tahakhaledsaad.github.io/Dashboard/",
    githubLinkk: "https://github.com/TahaKhaledSaad/Dashboard",
  },
  {
    id: 8,
    img: "./images/project3.png",
    category: "basics",
    title: "Activities Tracker",
    desc: "Activities Tracker with main features and Tools",
    accomplishmentList: ["HTML5", "CSS3"],
    liveDemo: "https://tahakhaledsaad.github.io/Daily-Activities/",
    githubLinkk: "https://github.com/TahaKhaledSaad/Daily-Activities",
  },
  {
    id: 9,
    img: "./images/project4.png",
    category: "basics",
    title: "Portfolio",
    desc: "Portfolio Landing page with main Animation",
    accomplishmentList: ["HTML5", "CSS3"],
    liveDemo: "https://tahakhaledsaad.github.io/Definition-Project/",
    githubLinkk: "https://github.com/TahaKhaledSaad/Definition-Project",
  },
];

let portfolioContainer = document.querySelector(".portfolio-container");
console.log(portfolioContainer);

projects.forEach((project) => {
  let projectBox = document.createElement("div");
  projectBox.id = `project-${project.id}`;
  projectBox.classList.add("portfolio-box", "all", project.category);
  projectBox.innerHTML = `
    <img src=${project.img} />
    <div class="desc">
      <h4>${project.title}</h4>
      <p>${project.desc}</p>
      <i class="bx bx-dots-vertical-rounded" onclick="openToggle(${
        project.id
      })"></i>
    </div>
    <div class="portfolio-layer">
      <div>
        <h3>Accomplishments</h3>
        <ul>
          ${
            project.accomplishmentList &&
            project.accomplishmentList.map((acc) => `<li>${acc}</li>`).join("")
          }
        </ul>
      </div>
      <div class="links">
        <div class="line"></div>
        <a href=${project.liveDemo} target="_blank">
          <i class="bx bx-link-alt"></i>
        </a>
        <a href=${project.githubLinkk} target="_blank">
          <i class="bx bxl-github"></i>
        </a>
      </div>
      <i class="bx bx-x" id="closeToggle" onclick="closeToggle(${
        project.id
      })"></i>
    </div>
  `;

  portfolioContainer.appendChild(projectBox);
});

/*========= parts =========*/

function closeToggle(id) {
  projects.forEach((project) => {
    if (project.id === id) {
      document.querySelector(
        `#project-${id} .portfolio-layer`
      ).style.transform = "translateY(100%)";
    }
  });
}

function openToggle(id) {
  // Open the selected toggle
  projects.forEach((project) => {
    if (project.id === id) {
      document.querySelector(
        `#project-${id} .portfolio-layer`
      ).style.transform = "translateY(0)";
    }
  });
}

/*========= parts =========*/
let parts = document.querySelectorAll(".part");
let partInputs = document.querySelectorAll(".part input");

partInputs.forEach((input) => {
  input.addEventListener("change", () => {
    let selectedPart = input.id.split("-")[1];
    // Perform logic based on the selected part
    switch (selectedPart) {
      case "1":
        // Logic for "All" part
        console.log("All");
        document.querySelectorAll(".portfolio-box").forEach((box) => {
          box.style.display = "none";
        });
        document.querySelectorAll(".all").forEach((box) => {
          box.style.display = "block";
        });
        break;
      case "2":
        // Logic for "React" part
        console.log("React");
        document.querySelectorAll(".portfolio-box").forEach((box) => {
          box.style.display = "none";
        });
        document.querySelectorAll(".react").forEach((box) => {
          box.style.display = "block";
        });
        break;
      case "3":
        // Logic for "Javascript" part
        console.log("Javascript");
        document.querySelectorAll(".portfolio-box").forEach((box) => {
          box.style.display = "none";
        });
        document.querySelectorAll(".javascript").forEach((box) => {
          box.style.display = "block";
        });
        break;
      case "4":
        // Logic for "Basics" part
        console.log("Basics");
        document.querySelectorAll(".portfolio-box").forEach((box) => {
          box.style.display = "none";
        });
        document.querySelectorAll(".basics").forEach((box) => {
          box.style.display = "block";
        });
        break;
      default:
        break;
    }
  });
});
