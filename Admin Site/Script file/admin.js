const body = document.querySelector("body"),
  sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

 sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});

let admin_check = localStorage.getItem("check");
let admin_name = localStorage.getItem("admin");
let alert = document.querySelector(".alert");

window.addEventListener("load", () => {
  if (admin_check == null) {
    window.open("http://127.0.0.1:5500/Admin.registration.html", "_self");
  }
  if (admin_name !== null) {
    alert.innerText = `Welcome ${admin_name} !`;
    alert.style.display = "block";
    setTimeout(() => {
      alert.style.display = "none";
    }, 1000);
  }
});

let logout = document.querySelector(".logout-mode");
logout.addEventListener("click", () => {
  localStorage.removeItem("check");
  window.open("http://127.0.0.1:5500/admin.login.html", "_self");
});
