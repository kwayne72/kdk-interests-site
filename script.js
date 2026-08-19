// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Pre-fill property select when "Request Details" is clicked
document.querySelectorAll('[data-property]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const property = btn.getAttribute('data-property');
    const select = document.getElementById('property');
    if (select && property) {
      select.value = property;
    }
  });
});

// Contact form handling
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const property = document.getElementById('property').value;
    const message = document.getElementById('message').value.trim();

    // Build a clean mailto link so the user can send it right away
    // Once you set up Formspree or another service, replace this logic
    const subject = encodeURIComponent(
      property ? `Inquiry: ${property}` : 'Home Inquiry – KDK Interests LLC'
    );

    let body = `Name: ${name}\nEmail: ${email}`;
    if (phone) body += `\nPhone: ${phone}`;
    if (property) body += `\nProperty: ${property}`;
    body += `\n\nMessage:\n${message}`;

    const mailto = `mailto:info@kdktx.com?subject=${subject}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailto;

    // Optional: show a success message on the page
    const originalHTML = form.innerHTML;
    form.innerHTML = `
      <div class="form-success">
        <h3>Thanks, ${name.split(' ')[0]}!</h3>
        <p>Your email client should open shortly.<br>
        If it doesn’t, please email us directly at <strong>info@kdktx.com</strong>.</p>
      </div>
    `;

    // Reset after a few seconds if they stay on the page
    setTimeout(() => {
      form.innerHTML = originalHTML;
      // Re-attach the listener after restoring HTML
      // (simple approach – full page reload is also fine)
    }, 8000);
  });
}
