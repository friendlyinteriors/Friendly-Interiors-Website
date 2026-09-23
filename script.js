'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
document.querySelectorAll('.footer-top > div:last-child').forEach(contactBlock => {
  if (!contactBlock.querySelector('a[href*="instagram.com"]')) {
    const instagram = document.createElement('a');
    instagram.href = 'https://www.instagram.com/friendly_interiors_studio/';
    instagram.target = '_blank';
    instagram.rel = 'noopener';
    instagram.textContent = 'Instagram ↗';
    contactBlock.append(instagram);
  }
});
if (menuButton && navigation) {
  document.documentElement.classList.add('js');
  menuButton.hidden = false;
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}

const hero = document.querySelector('.hero');
if (hero && !document.querySelector('.trust-strip')) {
  const trustStrip = document.createElement('section');
  trustStrip.className = 'trust-strip';
  trustStrip.setAttribute('aria-label', 'Friendly Interiors strengths');
  trustStrip.innerHTML = '<div><strong>Nairobi studio</strong><span>A considered base for global work</span></div><div><strong>Worldwide reach</strong><span>Remote collaboration across borders</span></div><div><strong>One accountable team</strong><span>Design and project management together</span></div><div><strong>End-to-end care</strong><span>From brief to final handover</span></div>';
  hero.after(trustStrip);
}

const premiumGallery = document.querySelector('.premium-gallery-grid');
if (premiumGallery && !premiumGallery.querySelector('[data-site-assessment]')) {
  const siteAssessment = document.createElement('figure');
  siteAssessment.dataset.siteAssessment = 'true';
  siteAssessment.innerHTML = '<img src="images/site%20visit%20day.jpg" alt="Friendly Interiors team member measuring a commercial interior before installation" loading="lazy" decoding="async"><figcaption><span>Site assessment</span><strong>Good design starts on site.</strong></figcaption>';
  premiumGallery.insertBefore(siteAssessment, premiumGallery.lastElementChild);
}

const serviceDirectory = document.querySelector('#service-guide');
if (serviceDirectory && !document.querySelector('#capabilities')) {
  const capabilities = document.createElement('section');
  capabilities.id = 'capabilities';
  capabilities.className = 'section capability-section';
  capabilities.innerHTML = `<div class="section-heading"><p class="eyebrow">What the company does</p><h2>One considered process.<br>Every detail covered.</h2><p>Friendly Interiors brings design direction, practical planning and professional delivery together from the first conversation to final handover.</p></div><div class="capability-grid"><article><span>01</span><h3>Interior Design &amp; Concept Development</h3><p>Refined design concepts balancing aesthetics, functionality, lifestyle and your vision.</p></article><article><span>02</span><h3>Space Planning &amp; Layout Design</h3><p>Furniture, circulation, zoning and spatial relationships planned for comfort, efficiency and usability.</p></article><article><span>03</span><h3>Project Planning &amp; Management</h3><p>Scope, schedules, budgets, procurement requirements and execution plans from commencement to completion.</p></article><article><span>04</span><h3>Budget &amp; Cost Management</h3><p>Realistic budgets, expenditure monitoring and resource management for financial control.</p></article><article><span>05</span><h3>Material &amp; Finish Specification</h3><p>Flooring, wall finishes, cabinetry, lighting, fabrics, hardware, sanitary fittings and decorative finishes.</p></article><article><span>06</span><h3>Procurement &amp; Supplier Coordination</h3><p>Materials, furniture and finishes sourced while coordinating deliveries, lead times and quality.</p></article><article><span>07</span><h3>Site Supervision &amp; Quality Control</h3><p>Installation and workmanship overseen to maintain the approved design and quality standards.</p></article><article><span>08</span><h3>Contractor &amp; Trade Coordination</h3><p>Carpenters, electricians, plumbers, painters, gypsum installers and other specialists kept aligned.</p></article><article><span>09</span><h3>Renovation &amp; Interior Fit-Out</h3><p>Residential and commercial transformations including kitchens, bathrooms, offices, living spaces, ceilings and flooring.</p></article><article><span>10</span><h3>Custom Joinery &amp; Furniture Solutions</h3><p>Kitchens, wardrobes, TV units, storage solutions, reception counters and bespoke interior elements.</p></article><article><span>11</span><h3>Furniture Design</h3><p>Purposeful furniture concepts developed around the room, the way it is used and the character of the wider interior.</p></article><article><span>12</span><h3>Lighting &amp; Electrical Planning</h3><p>Lighting positions, ambient and feature lighting, switches, sockets and electrical requirements planned around the concept.</p></article><article><span>13</span><h3>Client Coordination &amp; Reporting</h3><p>Clear communication around approvals, progress, budgets, variations and key project decisions.</p></article><article><span>14</span><h3>Project Handover</h3><p>Final inspections, outstanding corrections and a completed space ready for occupation and use.</p></article></div>`;
  const capabilityNote = document.createElement('div');
  capabilityNote.className = 'capability-note';
  capabilityNote.innerHTML = '<strong>Why both roles matter</strong><span>An interior designer shapes how the space looks, feels and functions. A project manager protects how it is planned, budgeted, coordinated and delivered. Bringing both roles into the project early helps prevent costly changes, disconnected decisions and avoidable delays.</span>';
  capabilities.querySelector('.section-heading').append(capabilityNote);
  const broaderCapabilities = document.createElement('div');
  broaderCapabilities.className = 'capability-grid capability-grid-extended';
  broaderCapabilities.innerHTML = '<article><span>15</span><h3>Interior Styling &amp; Furnishing</h3><p>Furniture, soft furnishings, accessories, art and finishing layers selected to make the space feel complete.</p></article><article><span>16</span><h3>Furniture Procurement</h3><p>Furniture recommendations, sourcing, quotations, delivery coordination and placement for a cohesive result.</p></article><article><span>17</span><h3>3D Visualisation &amp; Design Presentation</h3><p>Visual references, moodboards and presentation material that help clients understand the proposed direction before work begins.</p></article><article><span>18</span><h3>Design Drawings &amp; Documentation</h3><p>Plans, elevations, schedules and written specifications that give trades and suppliers a clear design reference.</p></article><article><span>19</span><h3>Site Measurement &amp; Assessment</h3><p>Existing conditions, dimensions, access, services and site constraints reviewed before decisions are finalised.</p></article><article><span>20</span><h3>Renovation Feasibility &amp; Surveys</h3><p>Early guidance on what is possible, what needs investigation and which decisions may affect scope, cost or timing.</p></article><article><span>21</span><h3>Brand &amp; Customer Experience Interiors</h3><p>Commercial environments shaped around identity, customer flow, staff use and the experience a business wants to create.</p></article><article><span>22</span><h3>Art, Accessories &amp; Window Treatments</h3><p>Decorative details, mirrors, plants, curtains and blinds chosen to balance function, comfort and atmosphere.</p></article><article><span>23</span><h3>Snagging &amp; Defects Coordination</h3><p>Outstanding items recorded, assigned and followed through before the project is considered complete.</p></article><article><span>24</span><h3>Aftercare &amp; Ongoing Support</h3><p>Post-handover guidance and follow-up support for adjustments, additions and future improvements.</p></article>';
  capabilities.querySelector('.capability-grid').after(broaderCapabilities);
  serviceDirectory.before(capabilities);
}

const filters = document.querySelector('.filters');
const projects = [...document.querySelectorAll('.project-card[data-category]')];
if (filters && projects.length) {
  filters.hidden = false;
  function filterProjects(value) {
    filters.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === value));
    });
    let count = 0;
    projects.forEach(project => {
      project.hidden = value !== 'all' && !project.dataset.category.split(' ').includes(value);
      if (!project.hidden) count++;
    });
    document.querySelector('#filter-status').textContent = `${count} project ${count === 1 ? 'story' : 'stories'} shown.`;
  }
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (button) filterProjects(button.dataset.filter);
  });
  window.addEventListener('hashchange', () => {
    const target = projects.find(project => `#${project.id}` === location.hash);
    if (target && target.hidden) {
      filterProjects('all');
      target.scrollIntoView();
    }
  });
}

function buildWhatsAppUrl(form) {
  const data = new FormData(form);
  const read = name => String(data.get(name) || '').trim();
  const message = [
    'Hello Friendly Interiors, I would like to discuss a project.',
    `Name: ${read('name')}`,
    `Location: ${read('location')}`,
    `Space: ${read('space')}`,
    `Service: ${read('service')}`,
    `Budget (KES): ${read('budget') || 'To discuss'}`,
    `Preferred timing: ${read('timing') || 'To discuss'}`,
    `My vision: ${read('vision') || 'I would like to explore ideas with your team.'}`
  ].join('\n');
  return `https://wa.me/254763507911?text=${encodeURIComponent(message)}`;
}

const projectForm = document.querySelector('#project-form');
if (projectForm) {
  const params = new URLSearchParams(location.search);
  for (const name of ['service', 'space']) {
    const field = projectForm.elements.namedItem(name);
    const value = params.get(name);
    if (value && [...field.options].some(option => option.value === value)) field.value = value;
  }
  for (const name of ['name', 'location']) {
    const field = projectForm.elements.namedItem(name);
    field.addEventListener('input', () => field.setCustomValidity(''));
  }
  document.querySelector('#enquiry-submit').hidden = false;
  projectForm.addEventListener('submit', event => {
    event.preventDefault();
    for (const name of ['name', 'location']) {
      const field = projectForm.elements.namedItem(name);
      field.setCustomValidity(field.value.trim() ? '' : 'Please enter this detail.');
    }
    if (!projectForm.reportValidity()) return;
    window.location.assign(buildWhatsAppUrl(projectForm));
  });
}

const heroImages = [...document.querySelectorAll('.hero-image')];
const heroDots = [...document.querySelectorAll('.hero-dot')];
if (heroImages.length && heroDots.length) {
  let heroIndex = 0;
  const updateHero = index => {
    heroIndex = index;
    heroImages.forEach((image, imageIndex) => {
      image.classList.toggle('is-active', imageIndex === heroIndex);
    });
    heroDots.forEach((dot, dotIndex) => {
      const active = dotIndex === heroIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
  };
  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateHero(index);
      clearInterval(heroSliderTimer);
      heroSliderTimer = setInterval(() => {
        updateHero((heroIndex + 1) % heroImages.length);
      }, 4000);
    });
  });
  let heroSliderTimer = setInterval(() => {
    updateHero((heroIndex + 1) % heroImages.length);
  }, 4000);
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
