document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("header nav");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  }

  const slides = document.querySelectorAll(".review-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  // Auto-advance every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);


  // Typing effect
  const title = document.getElementById("welcome-title");
  const text = "Hello, I’m BLACKSON — Your Next Web Developer!";
  let index = 0;
  function typeEffect() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();

  // Form alert
  const form = document.querySelector(".hours-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      alert("Thank you! Your preferred working hours will be sent to me directly.");
    });
  }

  // Chat toggle
  const fab = document.getElementById("chatFab");
  const panel = document.getElementById("chatPanel");
  const closeBtn = document.getElementById("closeBtn");
  if (fab && panel && closeBtn) {
    fab.addEventListener("click", () => panel.classList.add("open"));
    closeBtn.addEventListener("click", () => panel.classList.remove("open"));
  }


  db.collection("messages").orderBy("timestamp").onSnapshot((snapshot) => {
    chatBox.innerHTML = "";
    snapshot.forEach((doc) => {
      const msg = doc.data();
      const p = document.createElement("p");
      p.textContent = `${msg.user}: ${msg.text}`;
      chatBox.appendChild(p);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.15 // Triggers when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a slight delay for each paragraph to create a "staggered" feel
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150);
      }
    });
  }, observerOptions);

  // Only target the reveal-text inside the about-modern section
  const targets = document.querySelectorAll(".about-modern .reveal-text");
  targets.forEach((el) => observer.observe(el));
});


// Slow Reveal for the Global Monitor Section
document.addEventListener("DOMContentLoaded", () => {
  const monitor = document.getElementById('uploadMonitor');

  const monitorObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adds the reveal class when the div enters the viewport
        entry.target.classList.add('reveal');
        // Once revealed, we don't need to observe it anymore
        monitorObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15 // Triggers when 15% of the div is visible
  });

  if (monitor) {
    monitorObserver.observe(monitor);
  }
});
