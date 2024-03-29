// start js code of website
// navigation bar js code
let helpIconSVG = document.querySelector(".header .row > div:nth-child(4) svg");
let pathHelp = document.querySelector(".path-help");
let helpDiv = document.querySelector(".help");
let arrowDiv = document.querySelector(".arrow");
let headerTitle = document.querySelector(".header-title");
let apiInfo = document.querySelector(".api-info");
let headLinks = document.querySelectorAll(".nav-pills .nav-link");
let taskParent = document.querySelector(".head.task");
let taskList = document.querySelector(".task-list");
let close = document.querySelector(".close");
let consoleDiv = document.querySelector(".console");
let sidebar = document.querySelector(".sidebar");
let details = document.querySelector(".details");
let title = document.querySelector(".title");
let paragraph = document.querySelector(".paragraph");
let doc = document.querySelector(".doc");
let npmModule = document.querySelector(".npm-module");
let burgerIcon = document.querySelector(".header-in-small svg");
let smallHeader = document.querySelector(".header-in-small");
let content = document.querySelector(".content");
let intro = document.querySelector(".intro");
let pageContainer = document.querySelector(".page-container");
let word = document.querySelector(".word-span");
let rightArrow = document.querySelector(".right-arrow");
let link = document.querySelector("span.link");
let hyperLink = document.querySelector("span.hyper-link");
let pickupTasks = document.querySelectorAll(".pickup-task h5");

// start website in small screens

burgerIcon.onclick = () => {
  word.classList.remove("d-none");
  sidebar.classList.toggle("d-none");
  sidebar.classList.toggle("col-1");
  details.classList.toggle("col-12");


  for (let i = 0; i < headLinks.length; i++) {
    headLinks.forEach((link) => {
      link.onclick = () => {
        sidebar.classList.add("d-none");
        smallHeader.classList.toggle("move-left");
        details.classList.toggle("offset-4");
        details.classList.toggle("col-8");
        details.classList.toggle("col-12");
      };
    });
  }

  if (sidebar.classList.contains("d-none")) {
    smallHeader.classList.toggle("move-left");

    details.classList.toggle("offset-4");
    details.classList.toggle("col-12");
    details.classList.toggle("col-8");
  } else {
    smallHeader.classList.toggle("move-left");
    sidebar.classList.add("col-4");
    details.classList.toggle("offset-4");
    details.classList.toggle("col-8");
    details.classList.remove("col-12");
   

    // content.style.cssText = " min-width: 50vw !important; min-height: 100vh;";

    // content.classList.toggle("overflow-x-hidden");
    // document.addEventListener("mousewheel", (evt) => {
    //   content.scrollLeft += evt.deltaY;
      
    //  ( !sidebar.classList.contains("d-none"))&& (sidebar.style.cssText = "transform : translateX(-100%)");
    //  burgerIcon.addEventListener("click" , ()=>{
    //   sidebar.style.cssText = "transform : translateX(0)"
    //  })
    // });
  }
};

// writing active link name in the header of small screens
window.addEventListener("scroll", () => {
  headLinks.forEach((head) => {
    if (head.classList.contains("active")) {
      head.style.color = "#3b4151";
      rightArrow.classList.remove("d-none");
      link.innerHTML = head.innerHTML;
      head.innerHTML === "Task" ||
      head.innerHTML === "Create Task" ||
      head.innerHTML === "Create Multiple Tasks"
        ? (hyperLink.innerHTML = "Reference")
        : (hyperLink.innerHTML = "Introduction");
      if (
        head.innerHTML === "Create Task" ||
        head.innerHTML === "Create Multiple Tasks"
      ) {
        link.innerHTML = `Task >  ${head.innerHTML}`;
      }
    }
  });
});
// start appearing console in small screeens

for (let i = 0; i < pickupTasks.length; i++) {
  pickupTasks[i].onclick = () => {
    consoleDiv.classList.toggle("move");
  };
}

// appearing help div
helpIconSVG.onmouseenter = () => {
  helpDiv.classList.remove("d-none");
  pathHelp.setAttribute("fill", "#718CFF");
  arrowDiv.classList.remove("d-none");
  helpIconSVG.addEventListener("click", () => {
    helpDiv.classList.add("d-none");
    arrowDiv.classList.add("d-none");
    apiInfo.classList.add("d-none");
    pathHelp.setAttribute("fill", "#6D73A9");
  });
};

// appearing api info
helpDiv.onclick = () => {
  apiInfo.classList.remove("d-none");
};

// head active and sub-head active
for (let i = 0; i < headLinks.length; i++) {
  headLinks[i].onclick = () => {
    headLinks.forEach((link) => link.classList.remove("active"));

    headLinks[i].classList.add("active");
    if (
      headLinks[i].classList.contains("active") &&
      headLinks[i].classList.contains("task-item")
    ) {
      headLinks.forEach((link) => link.classList.remove("border-active"));
      headLinks[i].classList.add("border-active");
    }
  };
}

// Tasks

taskParent.addEventListener("click", function () {
  taskParent.classList.add("active");
  taskList.classList.toggle("d-none");
  if (taskList.classList.contains("d-none")) {
    taskParent.classList.remove("active");
  }
  if (taskParent.classList.contains("active")) {
    taskList.classList.remove("d-none");
  }
});
window.onscroll = () =>
  taskParent.classList.contains("active")
    ? taskList.classList.remove("d-none")
    : taskList.classList.add("d-none");

// start console side

close.onclick = () => {

  consoleDiv.classList.toggle("move");
  consoleDiv.classList.toggle("move-forward");

  details.classList.remove("col-lg-4");
  details.classList.add("col-lg-5");
};
