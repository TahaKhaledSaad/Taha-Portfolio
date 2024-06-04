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
  //   reset: true,
  distance: "80px",
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
// function sendEmail(event) {
//   event.preventDefault();
//   let fullName = document.getElementById("fullName").value;
//   let email = document.getElementById("email").value;
//   let mobile = document.getElementById("mobile").value;
//   let subject = document.getElementById("subject").value;
//   let message = document.getElementById("message").value;

//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "tahakhsaad55@gmail.com",
//     Password: "09AFD7B4A455BC6CD405B272C373AC87CD3F",
//     To: "tahakhsaad55@gmail.com",
//     From: email,
//     Subject: subject,
//     Body: `Name: ${fullName} <br/> Email: ${email} <br/> Message: ${message} <br/> Mobile: ${mobile}`,
//   }).then((message) => {
//     // document.getElementById("popup1").style.opacity = 1;
//     console.log(message);
//     alert(message);
//   });
// }

function sendEmail(event) {
  event.preventDefault();
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  Email.send({
    SecureToken: "Your-Elastic-Email-Secure-Token", // Replace with your Elastic Email Secure Token
    To: "tahakhsaad55@gmail.com",
    From: email,
    Subject: subject,
    Body: `Name: ${fullName} <br/> Email: ${email} <br/> Message: ${message} <br/> Mobile: ${mobile}`,
  }).then((message) => {
    console.log(message);
    alert(message);
  });
}

/*========= Portfolio =========*/
let projects = [
  {
    id: 0,
    img: "./images/project1.png",
    category: "basics",
    title: "FreEasy",
    desc: "description",
    accomplishmentList: ["HTML5", "CSS3", "Bootsrap"],
    liveDemo: "https://tahakhaledsaad.github.io/FreEasy/",
    githubLinkk: "githubLinkk",
  },
  {
    id: 1,
    img: "./images/project2.png",
    category: "basics",
    title: "Dashboard",
    desc: "description",
    accomplishmentList: ["HTML5", "CSS3", "Bootsrap"],
    liveDemo: "https://tahakhaledsaad.github.io/Dashboard/",
    githubLinkk: "githubLinkk",
  },
  {
    id: 2,
    img: "./images/project3.png",
    category: "basics",
    title: "Activities Tracker",
    desc: "description",
    accomplishmentList: ["HTML5", "CSS3", "Bootsrap"],
    liveDemo: "https://tahakhaledsaad.github.io/Daily-Activities/",
    githubLinkk: "githubLinkk",
  },
  {
    id: 3,
    img: "./images/project4.png",
    category: "basics",
    title: "Portfolio",
    desc: "description",
    accomplishmentList: ["HTML5", "CSS3", "Bootsrap"],
    liveDemo: "https://tahakhaledsaad.github.io/Definition-Project/",
    githubLinkk: "githubLinkk",
  },
  {
    id: 4,
    img: "./images/project5.png",
    category: "javascript",
    title: "Shop App",
    desc: "description",
    accomplishmentList: ["HTML5", "CSS3", "Bootsrap"],
    liveDemo: "https://tahakhaledsaad.github.io/Buy/",
    githubLinkk: "githubLinkk",
  },
  {
    id: 5,
    img: "./images/project6.png",
    category: "javascript",
    title: "GYM Products",
    desc: "description",
    accomplishmentList: ["HTML5", "CSS3", "Bootsrap"],
    liveDemo: "https://tahakhaledsaad.github.io/JS-Project/",
    githubLinkk: "githubLinkk",
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
      ).style.transform = "translateY(-100%)";
    }
  });
}

function openToggle(id) {
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
