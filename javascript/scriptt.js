$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow', '10px 1px 10px rgba(0, 0, 0, 0.4)');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();
            
            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });


    ScrollReveal().reveal('header',{ 
        duration: 2500,
    });
    
    ScrollReveal().reveal('.navbar',{ 
        origin: 'left',
        duration: 2800,
        distamce: '30%'
    });

    ScrollReveal().reveal('#cta',{
        origin: 'left', 
        duration: 2000,
        distance: '30%'
    });

    ScrollReveal().reveal('#banner',{
        origin: 'right', 
        duration: 2500,
        distance: '30%'
    });

    ScrollReveal().reveal('.divisoria',{
        duration: 3000,

    });

    ScrollReveal().reveal('.project',{
        origin: 'left', 
        duration: 2000,
        distance: '30%'
    });

    ScrollReveal().reveal('#prog_avaliacao',{
        origin: 'left', 
        duration: 3000,
        distance: '30%'
    });

    ScrollReveal().reveal('.feedback',{
        origin: 'right', 
        duration: 2000,
        distance: '30%'
    });

});


//*Area sobre*/

function openPopup(tech) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    
    // Atualizando o conteúdo do popup de acordo com a tecnologia clicada
    if (tech === 'html') {
        popupImg.src = 'src/img/html-img.jpg';
        popupTitle.textContent = 'HTML';
        popupText.textContent = 'HTML é a linguagem de marcação padrão para documentos na web. Ela permite estruturar o conteúdo de páginas e documentos.';
    } else if (tech === 'css') {
        popupImg.src = 'src/img/csss-img.jpg';
        popupTitle.textContent = 'CSS';
        popupText.textContent = 'CSS é a linguagem usada para descrever a aparência de um documento HTML. Ela define estilos como cores, fontes e layout.';
    } else if (tech === 'js') {
        popupImg.src = 'src/img/js-img.jpg';
        popupTitle.textContent = 'JavaScript';
        popupText.textContent = 'JavaScript é uma linguagem de programação usada para criar conteúdo dinâmico na web, como animações e interatividade.';
    } else if (tech === 'php') {
        popupImg.src = 'src/img/php-img.jpg';
        popupTitle.textContent = 'PHP';
        popupText.textContent = 'Linguagem de script server-side usada para criar páginas web dinâmicas, processar formulários e interagir com bancos de dados.';
    } else if (tech === 'python') {
        popupImg.src = 'src/img/python-img.jpg';
        popupTitle.textContent = 'Python';
        popupText.textContent = 'Linguagem de programação versátil, usada em desenvolvimento web, automação, análise de dados, IA e aplicações desktop.';
    } else if (tech === 'mysql') {
        popupImg.src = 'src/img/mysql-img.jpg';
        popupTitle.textContent = 'MYSQL';
        popupText.textContent = 'Sistema de gerenciamento de banco de dados relacional (SGBD) que armazena e organiza dados, frequentemente usado com PHP ou Python.';
    } else if (tech === 'java') {
        popupImg.src = 'src/img/java-img.jpg';
        popupTitle.textContent = 'Java';
        popupText.textContent = 'Linguagem de programação orientada a objetos, multiplataforma, utilizada em aplicações empresariais, Android e sistemas complexos.';
    } else if (tech === 'wordpress') {
        popupImg.src = 'src/img/wordpress-img.jpg';
        popupTitle.textContent = 'WordPress';
        popupText.textContent = 'Plataforma de gerenciamento de conteúdo (CMS) baseada em PHP e MySQL, usada para criar sites, blogs e lojas virtuais de forma simplificada.';
    }
    
    // Exibindo o pop-up
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    // Ocultando o pop-up
    popup.style.display = 'none';
}



