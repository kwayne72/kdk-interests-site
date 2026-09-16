// ===== Mobile menu =====
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

// ===== Current year =====
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== Property image carousels =====
function initCarousels() {
  document.querySelectorAll('.property-image[data-images]').forEach(wrap => {
    let images = [];
    try {
      images = JSON.parse(wrap.getAttribute('data-images') || '[]');
    } catch (e) {
      images = [];
    }
    if (!images.length) return;

    let idx = 0;
    const img = wrap.querySelector('.carousel-img');
    const counter = wrap.querySelector('.carousel-counter');
    const prevBtn = wrap.querySelector('.carousel-btn.prev');
    const nextBtn = wrap.querySelector('.carousel-btn.next');

    function update() {
      if (img) {
        img.src = images[idx];
        img.alt = `Photo ${idx + 1} of ${images.length}`;
      }
      if (counter) {
        const currentSpan = counter.querySelector('.current');
        const totalSpan = counter.querySelector('.total');
        if (currentSpan && totalSpan) {
          currentSpan.textContent = idx + 1;
          totalSpan.textContent = images.length;
        } else {
          counter.textContent = `${idx + 1} / ${images.length}`;
        }
      }
    }

    if (prevBtn) {
      prevBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        idx = (idx - 1 + images.length) % images.length;
        update();
      };
    }
    if (nextBtn) {
      nextBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        idx = (idx + 1) % images.length;
        update();
      };
    }

    update();
  });
}

// ===== Pre-fill property select from data-property buttons =====
function attachPropertyPrefill() {
  document.querySelectorAll('[data-property]').forEach(btn => {
    btn.addEventListener('click', () => {
      const property = btn.getAttribute('data-property');
      const select = document.getElementById('property');
      if (select && property) {
        select.value = property;
      }
    });
  });
}

// ===== Load properties from JSON =====
async function loadProperties() {
  const grid = document.getElementById('property-grid');
  if (!grid) return;

  try {
    const res = await fetch('data/properties.json?t=' + Date.now());
    if (!res.ok) throw new Error('No properties.json');
    const data = await res.json();
    const props = data.properties || [];

    // Dynamically populate the contact form property select (supports growth)
    const select = document.getElementById('property');
    if (select) {
      const currentValue = select.value;
      select.innerHTML = '<option value="">Select a property…</option>';
      props.forEach(p => {
        if (!p.title) return;
        const opt = document.createElement('option');
        opt.value = p.title;
        opt.textContent = (p.location ? p.location + ' – ' : '') + p.title;
        select.appendChild(opt);
      });
      const general = document.createElement('option');
      general.value = 'General Inquiry';
      general.textContent = 'General Inquiry / Future Properties';
      select.appendChild(general);
      if (currentValue && [...select.options].some(o => o.value === currentValue)) {
        select.value = currentValue;
      }
    }

    if (props.length === 0) {
      grid.innerHTML = '<p style="text-align:center;color:#5c6b7a;">No properties listed yet.</p>';
      return;
    }

    let html = props.map(p => {
      const isAvailable = (p.status || '').toLowerCase() === 'available';
      const badgeClass = isAvailable ? '' : 'unavailable';
      const badgeText = isAvailable ? 'Available' : 'Unavailable';
      const cardClass = isAvailable ? '' : 'unavailable';
      const mainImg = (p.images && p.images[0]) ? p.images[0] : 'images/palmer/01-exterior.jpg';
      const features = (p.features || []).slice(0, 4).map(f => `<li>${f}</li>`).join('');
      const leaseBtn = p.leaseUrl && !p.leaseUrl.includes('YOUR_')
        ? `<a href="${p.leaseUrl}" class="btn btn-sm btn-outline-dark" download>Download Lease</a>`
        : `<a href="documents/Texas_Residential_Lease_Agreement.docx" class="btn btn-sm btn-outline-dark" download>Download Lease</a>`;
      const appBtn = (p.applicationUrl && !p.applicationUrl.includes('YOUR_'))
        ? `<a href="${p.applicationUrl}" class="btn btn-sm btn-outline-dark">Apply Online</a>`
        : `<a href="application.html" class="btn btn-sm btn-outline-dark">Apply Online</a>`;
      const requestBtn = isAvailable
        ? `<a href="#contact" class="btn btn-sm btn-secondary" data-property="${p.title}">Request Details</a>`
        : `<span class="btn btn-sm btn-outline-dark" style="opacity:0.6;cursor:default;">Currently Rented</span>`;

      return `
        <article class="property-card ${cardClass}">
          <div class="property-image" data-images='${JSON.stringify(p.images || [mainImg])}'>
            <img src="${mainImg}" alt="${p.title}" loading="lazy" class="carousel-img">
            <span class="badge ${badgeClass}">${badgeText}</span>
            <button type="button" class="carousel-btn prev" aria-label="Previous photo">‹</button>
            <button type="button" class="carousel-btn next" aria-label="Next photo">›</button>
            <div class="carousel-counter"><span class="current">1</span> / <span class="total">${(p.images || [mainImg]).length}</span></div>
          </div>
          <div class="property-body">
            <div class="property-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${p.location || ''}
            </div>
            <h3>${p.title || 'Property'}</h3>
            <p class="property-desc">${(p.description || '').replace(/\n/g, ' ').substring(0, 160)}...</p>
            <ul class="property-features">${features}</ul>
            <div class="property-actions">
              ${requestBtn}
              ${leaseBtn}
              ${appBtn}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Always append a "Coming Soon" card for growth messaging
    html += `
      <article class="property-card coming-soon">
        <div class="property-image">
          <img src="images/palmer/06-yard-trees.jpg" alt="Coming soon properties" loading="lazy">
          <span class="badge">Coming Soon</span>
        </div>
        <div class="property-body">
          <h3>More Homes Soon</h3>
          <p class="property-desc">We are actively adding quality rental properties in the Dallas–Fort Worth and Ellis County areas.</p>
          <a href="#contact" class="btn btn-sm btn-outline-dark">Get Notified</a>
        </div>
      </article>
    `;

    grid.innerHTML = html;

    // Initialize carousels and re-attach prefill listeners on the new buttons
    initCarousels();
    attachPropertyPrefill();

  } catch (err) {
    console.warn('Using static fallback for properties', err);
    // Static HTML already present as fallback — still init its carousel
    initCarousels();
    attachPropertyPrefill();
  }
}

// ===== Contact form (mailto fallback) =====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const property = document.getElementById('property').value;
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(
      property ? `Inquiry: ${property}` : 'Property Inquiry – KDK Interests'
    );
    let body = `Name: ${name}\nEmail: ${email}`;
    if (phone) body += `\nPhone: ${phone}`;
    if (property) body += `\nProperty: ${property}`;
    body += `\n\nMessage:\n${message}`;

    const mailto = `mailto:paige@kdktx.com,Don@kdktx.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    const originalHTML = form.innerHTML;
    form.innerHTML = `
      <div class="form-success">
        <h3>Thanks, ${name.split(' ')[0]}!</h3>
        <p>Your email client should open shortly.<br>
        If it doesn’t, please email us directly at <strong>paige@kdktx.com</strong> or <strong>Don@kdktx.com</strong>.</p>
      </div>
    `;
    setTimeout(() => {
      form.innerHTML = originalHTML;
    }, 8000);
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  loadProperties();
});
