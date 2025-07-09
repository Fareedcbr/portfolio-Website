// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form validation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("✅ Thank you! Your message has been sent.");
  this.reset();
});

// Scroll animation using IntersectionObserver
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add("invisible");
  observer.observe(section);
});

// Profile image modal preview
const profileImg = document.getElementById('profile-img');
const modal = document.getElementById('profile-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close-modal');

if (profileImg && modal && modalImg && closeModal) {
  profileImg.addEventListener('click', function () {
    modal.style.display = 'flex';
    modalImg.src = this.src;
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}
