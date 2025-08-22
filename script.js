// Favicon animation using multiple icon URLs
const icons = [
  // "https://res.cloudinary.com/dncyjrbtx/image/upload/v1750729623/search_sdyn1k.png",
  "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", // Colorful dev icon
  "https://cdn-icons-png.flaticon.com/512/2721/2721297.png", // Colorful code icon
  "https://cdn-icons-png.flaticon.com/512/3275/3275464.png", // Testing icon
  "https://cdn-icons-png.flaticon.com/512/4149/4149657.png", // QA icon
  "https://cdn-icons-png.flaticon.com/512/4149/4149694.png", // Bug testing icon
  "https://cdn-icons-png.flaticon.com/512/9068/9068756.png"
];

let index = 0;
const interval = 4000;

setInterval(() => {
  const favicon = document.getElementById('favicon');
  if (favicon) {
    favicon.href = icons[index];
    index = (index + 1) % icons.length;
  }
}, interval);

// text typing
const titles = [
  "Sathish Software Developer",
  "Sathish Software Testing"
];

let currentTitleIndex = 0;
let charIndex = 0;

function typeTitle() {
  const fullTitle = titles[currentTitleIndex];
  document.title = fullTitle.substring(0, charIndex++);

  if (charIndex <= fullTitle.length) {
    setTimeout(typeTitle, 250); // Typing delay
  } else {
    // Pause before switching to next title
    setTimeout(() => {
      charIndex = 0;
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
      typeTitle();
    }, 1500);
  }
}

typeTitle();


// cursor
const cursor = document.querySelector(".cursor");

// Follow the mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Hover effect on specific elements
const hoverTargets = document.querySelectorAll(".hover-target");

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
    cursor.style.background = "#ff4081";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.background = "#fff";
  });
});


// nav mobile off canva
document.addEventListener('DOMContentLoaded', function () {
  const offcanvasElement = document.getElementById('offcanvasNavbar');
  const offcanvas = new bootstrap.Offcanvas(offcanvasElement);

  // Close offcanvas when any nav-link is clicked
  document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      offcanvas.hide();
    });
  });
});

// text typing code
const words = ["Developer", "Testing"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 200;
const pause = 1000;

function type() {
  const element = document.getElementById("typewriter");

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      element.textContent = currentWord;
      setTimeout(type, speed);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      element.textContent = currentWord;
      setTimeout(type, speed / 2);
    } else if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, pause);
    } else {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, speed);
    }
  }
}

document.addEventListener("DOMContentLoaded", type);



// Qualification
const box = document.querySelector('.education-box');

box.addEventListener('mousemove', (e) => {
  const rect = box.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  box.style.setProperty('--x', `${x}%`);
  box.style.setProperty('--y', `${y}%`);
});

box.addEventListener('mouseleave', () => {
  box.style.setProperty('--x', `50%`);
  box.style.setProperty('--y', `50%`);
});

// experience
document.querySelectorAll('.experience-box').forEach(box => {
  box.addEventListener('mousemove', (e) => {
    const rect = box.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    box.style.setProperty('--x', `${x}%`);
    box.style.setProperty('--y', `${y}%`);
  });

  box.addEventListener('mouseleave', () => {
    box.style.setProperty('--x', `50%`);
    box.style.setProperty('--y', `50%`);
  });
});

// interests
document.querySelectorAll('.interests-box').forEach(box => {
  box.addEventListener('mousemove', (e) => {
    const rect = box.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    box.style.setProperty('--x', `${x}%`);
    box.style.setProperty('--y', `${y}%`);
  });

  box.addEventListener('mouseleave', () => {
    box.style.setProperty('--x', `50%`);
    box.style.setProperty('--y', `50%`);
  });
});

// tab
function showTab(evt, tabId) {
  const tabButtons = document.querySelectorAll(".tab-buttons button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(btn => btn.classList.remove("active"));
  tabContents.forEach(content => content.classList.remove("active"));

  evt.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

// loading

window.addEventListener("load", function () {
  // Hide the loader and show the content when the page is fully loaded
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});

// slider
$(document).ready(function () {
  $('.responsive-slider').slick({
    dots: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// footer
document.getElementById("year").textContent = new Date().getFullYear();

// end
document.addEventListener("DOMContentLoaded", function () {
  const progressPath = document.querySelector(".progress-path");
  const pathLength = progressPath.getTotalLength();

  // Set up the dash array and offset
  progressPath.style.strokeDasharray = pathLength;
  progressPath.style.strokeDashoffset = pathLength;

  const updateProgress = () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress);

  // Optional: scroll to top on click
  // document.querySelector(".progress-wrap").addEventListener("click", () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // });
});

// contact form

// document.getElementById("contact-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const form = e.target;
//   const popup = document.getElementById("popup-message");
//   const formData = new FormData(form);


//   fetch(form.action, {
//     method: form.method,
//     body: formData
//   })
//     .then(response => {
//       if (response.ok) {

//         showPopup("✅ Message sent successfully!", "green");
//         form.reset();
//       } else {

//         showPopup("❌ Something went wrong. Please try again later.", "red");
//       }
//     })
//     .catch(error => {

//       showPopup("⚠️ Network error. Please check your internet connection.", "orange");
//     });

//   function showPopup(message, color) {
//     popup.innerText = message;
//     popup.style.backgroundColor = color;
//     popup.style.color = "#fff";
//     popup.style.display = "block";
//     popup.style.opacity = "0";
//     popup.style.transition = "opacity 0.5s ease, transform 0.5s ease";
//     popup.style.transform = "translateY(-10px)";

//     setTimeout(() => {
//       popup.style.opacity = "1";
//       popup.style.transform = "translateY(0)";
//     }, 100);

//     setTimeout(() => {
//       popup.style.opacity = "0";
//       popup.style.transform = "translateY(-10px)";
//     }, 4000);

//     setTimeout(() => {
//       popup.style.display = "none";
//     }, 4500);
//   }
// });


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const popup = document.getElementById("popup-message");
  const formData = new FormData(form);

  // --- Validation for First Name and Last Name (first letter capital)
  const firstName = form.first_name.value.trim();
  const lastName = form.last_name.value.trim();
  const message = form.message.value.trim();

  const namePattern = /^[A-Z][a-z]*$/;

  if (!namePattern.test(firstName)) {
    showPopup("⚠️ 1.First Name must start with a capital letter.", "black");
    return;
  }

  if (!namePattern.test(lastName)) {
    showPopup("⚠️ 2.Last Name must start with a capital letter.", "black");
    return;
  }

  if (message.length > 1000) {
    showPopup("⚠️ 3.Message must be under 1000 characters.", "black");
    return;
  }

  // --- Submit via fetch
  fetch(form.action, {
    method: form.method,
    body: formData
  })
    .then(response => {
      if (response.ok) {
        showPopup("✅ Message sent successfully!", "green");
        form.reset();
      } else {
        showPopup("❌ Something went wrong. Please try again later.", "red");
      }
    })
    .catch(error => {
      showPopup("⚠️ Network error. Please check your internet connection.", "orange");
    });

  function showPopup(message, color) {
    popup.innerText = message;
    popup.style.backgroundColor = color;
    popup.style.color = "#fff";
    popup.style.display = "block";
    popup.style.opacity = "0";
    popup.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    popup.style.transform = "translateY(-10px)";

    setTimeout(() => {
      popup.style.opacity = "1";
      popup.style.transform = "translateY(0)";
    }, 100);

    setTimeout(() => {
      popup.style.opacity = "0";
      popup.style.transform = "translateY(-10px)";
    }, 4000);

    setTimeout(() => {
      popup.style.display = "none";
    }, 4500);
  }
});





window.addEventListener("DOMContentLoaded", () => {
  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.name = "access_key";
  hiddenInput.value = "921421f6-cd6f-4a66-a1a1-f638ed6d82ab";
  document.getElementById("access-container").appendChild(hiddenInput);
});

// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, F12
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  if (
    (event.ctrlKey && event.shiftKey && (key === "i" || key === "j")) ||
    (event.ctrlKey && key === "u") ||
    key === "f12"
  ) {
    event.preventDefault();
    console.log("Blocked developer shortcut");
  }
});












