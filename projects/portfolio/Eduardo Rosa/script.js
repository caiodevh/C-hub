$(document).ready(function(){
    // Menu mobile
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });

    // Scroll para seções
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 800);
    });

    // Ativar menu conforme scroll
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)');
            header.addClass('scrolled');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Observador de elementos para animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Animação ScrollReveal
    ScrollReveal().reveal('header', { 
        duration: 2000,
    });
    
    ScrollReveal().reveal('#cta', {
        origin: 'left', 
        duration: 1500,
        distance: '50px'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right', 
        duration: 1500,
        distance: '50px'
    });

    ScrollReveal().reveal('.section-title, .section-subtitle', {
        duration: 1000,
        distance: '20px',
        origin: 'top'
    });

    ScrollReveal().reveal('.servico-card', {
        interval: 200,
        origin: 'bottom',
        distance: '50px',
        duration: 800
    });

    ScrollReveal().reveal('.beneficio-item', {
        interval: 150,
        origin: 'left',
        distance: '50px',
        duration: 800
    });

    ScrollReveal().reveal('.beneficios-img', {
        origin: 'right',
        duration: 1000,
        distance: '50px'
    });

    ScrollReveal().reveal('.sobre-img', {
        origin: 'left',
        duration: 1000,
        distance: '50px'
    });

    ScrollReveal().reveal('.sobre-text', {
        origin: 'right',
        duration: 1000,
        distance: '50px'
    });

    ScrollReveal().reveal('.certificado-item', {
        interval: 150,
        origin: 'bottom',
        distance: '30px',
        duration: 800
    });

    ScrollReveal().reveal('.depoimento-card', {
        interval: 200,
        origin: 'bottom',
        distance: '50px',
        duration: 800
    });

    // Formulário de contato
    $('#form-contato').on('submit', function(e){
        e.preventDefault();
        
        // Simulação de envio
        const nome = $('#nome').val();
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`);
        
        // Reset do formulário
        this.reset();
    });
});