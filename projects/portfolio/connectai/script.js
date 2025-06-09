// Função para alternar entre os modos
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    // Salvar preferência no localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Função para rolar suavemente para uma seção
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

// Código do carrossel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let carouselInterval;

function changeSlide(direction) {
    clearInterval(carouselInterval);
    
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
    
    startCarousel();
}

// Iniciar o carrossel
function startCarousel() {
    carouselInterval = setInterval(() => changeSlide(1), 5000);
}

// Verificar preferência de modo escuro ao carregar a página
function checkDarkModePreference() {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
        document.body.classList.add("dark-mode");
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    // Iniciar carrossel
    items[currentIndex].classList.add('active');
    startCarousel();
    
    // Verificar modo escuro
    checkDarkModePreference();
    
    // Ajustar padding do hero para compensar o header fixo
    const hero = document.querySelector('.hero');
    const topBarHeight = document.querySelector('.top-bar').offsetHeight;
    const headerHeight = document.querySelector('.main-header').offsetHeight;
    hero.style.paddingTop = `${topBarHeight + headerHeight}px`;
});

// Pausar carrossel quando o mouse estiver sobre ele
document.querySelector('.carousel')?.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

document.querySelector('.carousel')?.addEventListener('mouseleave', () => {
    startCarousel();
});