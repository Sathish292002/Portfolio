const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", (e) => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// nav
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
  const words = ["Development", "testing"];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const speed = 200;
  const pause = 1500;

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
    autoplaySpeed: 9000,
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
  document.querySelector(".progress-wrap").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});










// // 
// document.getElementById('contactForm').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const message = document.getElementById('message').value.trim();
//   const status = document.getElementById('form-status');

//   if (!name || !email || !message) {
//     status.textContent = "Please fill out all fields.";
//     status.style.color = "orange";
//     return;
//   }

//   try {
//     const response = await fetch('/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name, email, message })
//     });

//     const result = await response.json();
//     if (response.ok) {
//       status.textContent = "Message sent successfully!";
//       status.style.color = "lightgreen";
//       document.getElementById('contactForm').reset();
//     } else {
//       status.textContent = result.error || "Something went wrong.";
//       status.style.color = "red";
//     }
//   } catch (err) {
//     status.textContent = "Failed to send. Please try again later.";
//     status.style.color = "red";
//   }
// });


//from 
// function showAlert() {
//   const alertBox = document.getElementById('customAlert');
//   alertBox.classList.add('show');

//   setTimeout(() => {
//     alertBox.classList.remove('show');
//   }, 5000);
// }


function showAlert() {
  const form = document.getElementById('contact-form');
  const inputs = form.querySelectorAll('input, textarea');
  const alertBox = document.getElementById('customAlert');

  let allFilled = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allFilled = false;
    }
  });

  if (allFilled) {
    alertBox.classList.add('show');

    setTimeout(() => {
      alertBox.classList.remove('show');
    }, 10000);
  } else {
    alertBox.classList.remove('show');
  }
}


