// ==================== Header ==================

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Open Sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

// Close Sidebar
function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// Close sidebar on link click
sidebar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeSidebar);
});

// Close on ESC key
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeSidebar();
});


// ====================Start Right Click Disabled==================

// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });


// ====================Start title Replace==================

// document.addEventListener('visibilitychange', function () {
//     if (document.visibilityState === 'hidden') {
//         document.title = 'Portfolio'
//     } else {
//         document.title = 'Imran Ali | Portfolio';
//     }
// });


// ====================Start Auto Typing==================

var typed = new Typed(".auto-type", {
  strings: ['MERN Stack Developer', 'Full Stack Web Developer', 'Frontend Developer.', 'Backend Developer.', 'UI &amp; UX Designer.'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
});

// ====================End Auto Typing==================



