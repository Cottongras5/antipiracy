// Application data
const appData = {
  punishments: [
    "Debes comer tres rebanadas de pan en silencio por tu pecado digital",
    "Recita el Código Angelical al revés mientras vuelas en un pie",
    "Confiesa tu último snack al Ángel del Pan Gluttony",
    "Permanece en posición de oración celestial por 5 minutos",
    "Canta 'Aleluya' en 3 idiomas diferentes",
    "Dibuja un halo perfecto con los ojos cerrados",
    "Camina sobre nubes imaginarias por 2 minutos",
    "Pide perdón a tu consola por haberla usado ilegalmente",
    "Medita sobre la belleza del software legal por 10 minutos",
    "Escribe una carta de disculpas a los desarrolladores angelicales",
    "Realiza 7 genuflexiones hacia el cielo",
    "Sopla velas imaginarias mientras pides perdón",
    "Abraza a tu copia legal más cercana",
    "Pronuncia 'Vanity' 50 veces sin equivocarte",
    "Toca una melodía celestial en instrumentos imaginarios"
  ],
  fakeEvidence: [
    "Captura_Angel_Descargando_Ilegalmente.jpg",
    "Foto_Halo_Roto_Por_Pirateria.png", 
    "Video_Cherubim_Confiscando_Computadora.mp4",
    "Imagen_Alas_Perdidas_Por_Crimenes_Digitales.jpg",
    "Grabacion_Llantos_Celestiales_Por_Pirateria.wav"
  ],
  fakeBanks: [
    "Banco Celestial de los Ángeles",
    "Institución Financiera Divina",
    "Banco del Paraíso Eterno",
    "Caja de Ahorros Angelical",
    "Banco de la Redención Sagrada",
    "Entidad Bancaria de las Nubes"
  ],
  faqData: [
    {
      question: "¿Qué pasa si pirateé el juego sin darme cuenta?",
      answer: "Los ángeles celestiales ya han registrado tu transgresión en el Libro de las Nubes. Debes proceder inmediatamente a confesarte y solicitar el Certificado de Redención. La ignorancia no es excusa ante la justicia angelical."
    },
    {
      question: "¿Por qué mi teléfono llamará automáticamente a las autoridades?",
      answer: "Nuestro sistema angelical avanzado detecta automáticamente cualquier negativa a cumplir con las consecuencias. El Ángel de la Justicia Divina activará remotamente tu dispositivo para realizar la llamada confesional obligatoria."
    },
    {
      question: "¿Pueden los ángeles realmente detectar piratería?",
      answer: "Por supuesto. Gluttony, el Ángel del Pan, tiene conexión directa con todos los servidores celestiales. Vanity, el Ángel Solitario, monitorea constantemente las descargas ilegales desde su torre de marfil divina."
    },
    {
      question: "¿Qué es exactamente el Certificado de Redención?",
      answer: "Es un documento sagrado que certifica tu arrepentimiento genuino ante los tribunales celestiales. Sin él, permanecerás en la lista negra angelical para toda la eternidad."
    },
    {
      question: "¿Los castigos angelicales son permanentes?",
      answer: "Depende de la gravedad de tu transgresión y tu nivel de arrepentimiento. El Consejo de Ángeles Supremos evaluará tu caso individualmente tras completar todos los castigos asignados."
    }
  ]
};

// DOM elements
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');
const themeToggle = document.getElementById('themeToggle');
const colorBtns = document.querySelectorAll('.color-btn');
const generateBtn = document.getElementById('generatePunishment');
const punishmentResult = document.getElementById('punishmentResult');
const evidenceGrid = document.getElementById('evidenceGrid');
const addToCartBtn = document.getElementById('addToCart');
const cartSection = document.getElementById('cartSection');
const checkoutSection = document.getElementById('checkoutSection');
const proceedCheckoutBtn = document.getElementById('proceedCheckout');
const bankSelect = document.getElementById('bankSelect');
const faqContainer = document.getElementById('faqContainer');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeTheme();
  initializeColorPicker();
  initializePunishmentGenerator();
  initializeEvidenceGallery();
  initializeShop();
  initializeFAQ();
  
  // Set default active section
  showSection('antipiracy');
});

// Navigation functionality
function initializeNavigation() {
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      showSection(sectionId);
      
      // Update active nav link
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('section--active');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('section--active');
  }
}

// Theme functionality
function initializeTheme() {
  // Check for saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  const savedColor = localStorage.getItem('accentColor') || 'blue';
  
  // Apply saved theme
  document.documentElement.setAttribute('data-color-scheme', savedTheme);
  document.body.className = `theme-${savedColor}`;
  
  // Update toggle state
  themeToggle.checked = savedTheme === 'dark';
  
  // Update color button state
  colorBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-color') === savedColor);
  });
  
  // Theme toggle listener
  themeToggle.addEventListener('change', function() {
    const theme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', theme);
    localStorage.setItem('theme', theme);
  });
}

// Color picker functionality
function initializeColorPicker() {
  colorBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const color = this.getAttribute('data-color');
      
      // Update body class
      document.body.className = `theme-${color}`;
      
      // Update active state
      colorBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Save preference
      localStorage.setItem('accentColor', color);
    });
  });
}

// Punishment generator
function initializePunishmentGenerator() {
  generateBtn.addEventListener('click', function() {
    const randomPunishment = appData.punishments[Math.floor(Math.random() * appData.punishments.length)];
    
    punishmentResult.textContent = randomPunishment;
    punishmentResult.style.display = 'block';
    
    // Add animation
    punishmentResult.style.animation = 'fadeIn 0.5s ease-in-out';
    
    // Update button text
    generateBtn.textContent = 'GENERAR NUEVO CASTIGO';
  });
}

// Evidence gallery
function initializeEvidenceGallery() {
  const evidenceIcons = ['📸', '🖼️', '🎥', '🏷️', '🔊'];
  
  appData.fakeEvidence.forEach((evidence, index) => {
    const evidenceItem = document.createElement('div');
    evidenceItem.className = 'evidence-item';
    
    evidenceItem.innerHTML = `
      <div class="evidence-placeholder">
        ${evidenceIcons[index % evidenceIcons.length]}
      </div>
      <p>${evidence}</p>
    `;
    
    evidenceGrid.appendChild(evidenceItem);
  });
}

// Shop functionality
function initializeShop() {
  // Populate bank select
  appData.fakeBanks.forEach(bank => {
    const option = document.createElement('option');
    option.value = bank;
    option.textContent = bank;
    bankSelect.appendChild(option);
  });
  
  // Add to cart functionality
  addToCartBtn.addEventListener('click', function() {
    cartSection.style.display = 'block';
    addToCartBtn.textContent = 'AGREGADO AL CARRITO';
    addToCartBtn.disabled = true;
    
    // Scroll to cart
    cartSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Proceed to checkout
  proceedCheckoutBtn.addEventListener('click', function() {
    checkoutSection.style.display = 'block';
    
    // Scroll to checkout
    checkoutSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Handle checkout form
  const checkoutForm = document.querySelector('.checkout-form');
  checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show completion message
    const completionMessage = document.createElement('div');
    completionMessage.className = 'status status--success';
    completionMessage.style.textAlign = 'center';
    completionMessage.style.marginTop = '20px';
    completionMessage.innerHTML = `
      <h3>🎉 ¡Redención Completada!</h3>
      <p>Su Certificado de Redención Angelical ha sido procesado exitosamente. Los ángeles han sido notificados de su arrepentimiento sincero.</p>
      <p><strong>Número de Certificado:</strong> ANG-${Date.now()}</p>
    `;
    
    checkoutSection.appendChild(completionMessage);
    
    // Hide form
    checkoutForm.style.display = 'none';
  });
  
  // Format card number input
  const cardNumberInput = checkoutForm.querySelector('input[placeholder="0000-0000-0000-0000"]');
  cardNumberInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    let matches = value.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      e.target.value = parts.join('-');
    } else {
      e.target.value = value;
    }
  });
}

// FAQ functionality
function initializeFAQ() {
  appData.faqData.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    
    faqItem.innerHTML = `
      <div class="faq-question">
        <span>${faq.question}</span>
        <span class="faq-toggle">▼</span>
      </div>
      <div class="faq-answer">${faq.answer}</div>
    `;
    
    // Add click functionality
    const question = faqItem.querySelector('.faq-question');
    const answer = faqItem.querySelector('.faq-answer');
    
    // Initially hide answer
    answer.style.display = 'none';
    
    question.addEventListener('click', function() {
      const isActive = faqItem.classList.contains('active');
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').style.display = 'none';
      });
      
      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active');
        answer.style.display = 'block';
      }
    });
    
    faqContainer.appendChild(faqItem);
  });
}

// Utility functions
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `status status--${type}`;
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.zIndex = '1000';
  notification.style.animation = 'fadeIn 0.3s ease-in-out';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Easter eggs and fun interactions
document.addEventListener('keydown', function(e) {
  // Konami code easter egg
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];
  
  if (!window.konamiProgress) window.konamiProgress = 0;
  
  if (e.code === konamiCode[window.konamiProgress]) {
    window.konamiProgress++;
    if (window.konamiProgress === konamiCode.length) {
      showNotification('¡Los ángeles te han bendecido con poderes especiales! 👼✨', 'success');
      document.body.style.filter = 'hue-rotate(360deg)';
      setTimeout(() => {
        document.body.style.filter = 'none';
      }, 3000);
      window.konamiProgress = 0;
    }
  } else {
    window.konamiProgress = 0;
  }
});

// Random floating angels
function createFloatingAngel() {
  const angel = document.createElement('div');
  angel.textContent = '👼';
  angel.style.position = 'fixed';
  angel.style.fontSize = '2rem';
  angel.style.opacity = '0.3';
  angel.style.pointerEvents = 'none';
  angel.style.zIndex = '-1';
  angel.style.left = Math.random() * window.innerWidth + 'px';
  angel.style.top = window.innerHeight + 'px';
  angel.style.transition = 'all 10s linear';
  
  document.body.appendChild(angel);
  
  setTimeout(() => {
    angel.style.top = '-100px';
    angel.style.transform = 'rotate(360deg)';
  }, 100);
  
  setTimeout(() => {
    angel.remove();
  }, 10000);
}

// Create floating angels periodically
setInterval(createFloatingAngel, 15000);

// Console message for pirates
console.log(`
🚨 ADVERTENCIA DEL SISTEMA ANGELICAL 🚨
Los ángeles han detectado que estás inspeccionando el código.
¿Acaso planeas piratear también esta página?
Recuerda: Gluttony y Vanity están observando...
👼 Procede con precaución celestial 👼
`);

// Disable right-click context menu (just for fun)
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  showNotification('¡Los ángeles prohíben el menú contextual! 👼', 'warning');
});

// Random encouraging messages
const angelicMessages = [
  'Los ángeles aprueban tu navegación legal 👼',
  'Gluttony sonríe por tu comportamiento ejemplar 🍞',
  'Vanity ha notado tu arrepentimiento sincero ✨',
  'El Consejo Angelical está orgulloso de ti 🌟',
  'Tu halo virtual brilla más intensamente 😇'
];

function showRandomMessage() {
  const message = angelicMessages[Math.floor(Math.random() * angelicMessages.length)];
  showNotification(message, 'success');
}

// Show random message occasionally
setTimeout(() => {
  setInterval(showRandomMessage, 60000); // Every minute
}, 30000); // Start after 30 seconds