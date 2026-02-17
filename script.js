
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  
  if (user !== "" && pass !== "") {
    localStorage.setItem("student", user); 
    window.location.href = "dashboard.html"; 
  } else {
    document.getElementById("error").innerText = "Please fill in all fields!";
  }
}


function logout() {
  localStorage.removeItem("student"); 
  window.location.href = "index.html"; 
}


window.onload = function() {
  const student = localStorage.getItem("student");
  const currentPage = window.location.pathname;

  
  if (currentPage.includes("dashboard.html") || currentPage.includes("account.html")) {
    if (!student) {
      window.location.href = "index.html";
    } else {

      const welcomeText = document.getElementById("welcome");
      if (welcomeText) {
        welcomeText.innerText = "Welcome, " + student + "!";
      }
    }
  }
};


function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const main = document.querySelector('.main-content');
  
  if (sidebar) {
    sidebar.classList.toggle('hidden');
  }
  
  if (main) {
    main.classList.toggle('expanded');
  }
}
