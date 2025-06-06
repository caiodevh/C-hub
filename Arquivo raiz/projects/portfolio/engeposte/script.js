// Menu Mobile e Navegação
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const mobileBtn = document.getElementById('mobile_btn');
    const mobileCloseBtn = document.getElementById('mobile_close_btn');
    const mobileMenu = document.getElementById('mobile_menu');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');

    // Menu mobile
    mobileBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    mobileCloseBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('#mobile_nav_list a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Ativar item do menu conforme a seção visível
    function activateMenuItem() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const link = item.querySelector('a');
            if (link.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.hash) {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Efeito de sombra no header
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            scrollTimeout = setTimeout(() => {
                header.style.boxShadow = 'none';
            }, 100);
        }
        
        activateMenuItem();
    });

    // Ativar ao carregar a página
    window.addEventListener('load', function() {
        activateMenuItem();
        
        // Se estiver no topo, ativa a primeira seção
        if (window.scrollY === 0) {
            navItems[0].classList.add('active');
        }
    });

    // Dados dos produtos
    const produtos = {
        1: {
            titulo: "Poste Padrão Neo-Energia com Um Medidor",
            imagem: "src/popup-poste-1.jpg",
            descricao: "Poste padrão para entrada de energia elétrica em residências que há necessidade de apenas um medidor. Também avaliamos a necessidade e realizamos ART e projetos.",
            whatsapp: "https://wa.me/5515991053606?text=Olá,%20gostaria%20de%20solicitar%20orçamento%20para%20Poste%20Padrão%20Neo-Energia%20com%201%20medidor.%20Poderia%20me%20informar%20as%20especificações%20técnicas%20e%20valores?"
        },
        2: {
            titulo: "Poste Padrão Neo-Energia com Dois Medidores",
            imagem: "src/popup-poste-2.jpg",
            descricao: "Poste padrão para entrada de energia elétrica em residências que há necessidade de dois medidores. Também avaliamos a necessidade e realizamos ART e projetos.",
            whatsapp: "https://wa.me/5515991053606?text=Olá,%20tenho%20interesse%20no%20Poste%20Padrão%20com%202%20medidores.%20Poderia%20me%20enviar%20detalhes%20sobre%20instalação%20e%20preço?"
        },
        3: {
            titulo: "Pisos Intertravados",
            imagem: "src/popup-piso.jpg",
            descricao: "Os pisos intertravados são peças de concreto projetadas para serem instaladas de forma rápida e prática, sem a necessidade de argamassa ou outros materiais. Elas se encaixam umas nas outras, formando uma superfície resistente e durável, ideal para pavimentar áreas externas como calçadas, estacionamentos, pátios e áreas industriais.",
            whatsapp: "https://wa.me/5515991053606?text=Olá,%20gostaria%20de%20cotar%20Pisos%20Intertravados.%20Poderia%20me%20informar%20as%20cores%20disponíveis,%20medidas%20e%20preço%20por%20m²?"
        },
        4: {
            titulo: "Totem para Acoplar Caixa U.M.A SABESP e SAAE",
            imagem: "src/popup-totem.jpg",
            descricao: "Uma estrutura de concreto na qual acopla-se caixas medidoras de água da concessionária de sua cidade. Um método mais prático, rápido e barato para instalação das mesmas.",
            whatsapp: "https://wa.me/5515991053606?text=Olá,%20preciso%20de%20orçamento%20para%20Totem%20SABESP/SAAE.%20Qual%20a%20disponibilidade%20e%20prazo%20de%20entrega?"
        }
    };

    // Configuração do Carrossel
    const swiperProdutos = new Swiper('.produtos-carrossel', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: false,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        a11y: {
            prevSlideMessage: 'Produto anterior',
            nextSlideMessage: 'Próximo produto',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 20
            }
        }
    });

    // Pop-up de Produto
    const produtoPopup = document.getElementById('produtoPopup');
    const popupImagem = document.getElementById('popupImagem');
    const popupTitulo = document.getElementById('popupTitulo');
    const popupDescricao = document.getElementById('popupDescricao');
    const popupWhatsapp = document.getElementById('popupWhatsapp');

    // Abrir pop-up ao clicar no card
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const produtoId = this.getAttribute('data-produto-id');
            const produto = produtos[produtoId];
            
            if (produto) {
                popupImagem.src = produto.imagem;
                popupImagem.alt = produto.titulo;
                popupTitulo.textContent = produto.titulo;
                popupDescricao.textContent = produto.descricao;
                popupWhatsapp.href = produto.whatsapp;
                
                produtoPopup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fechar pop-up
    document.querySelector('.close-popup').addEventListener('click', function() {
        produtoPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Fechar ao clicar fora do conteúdo
    produtoPopup.addEventListener('click', function(e) {
        if (e.target === this) {
            produtoPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Fechar pop-up com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && produtoPopup.style.display === 'flex') {
            produtoPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Transição de Imagens (Sobre)
    const images = document.querySelectorAll('.sobre-imagens img');
    let currentImage = 0;

    function changeImage() {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }

    // Iniciar apenas se houver imagens
    if (images.length > 0) {
        images[0].classList.add('active');
        if (images.length > 1) {
            setInterval(changeImage, 3000);
        }
    }

    // Pré-carregar imagens do popup
    function preloadPopupImages() {
        Object.values(produtos).forEach(produto => {
            if (produto.imagem) {
                const img = new Image();
                img.src = produto.imagem;
            }
        });
    }

    // Pré-carregar após o carregamento da página
    window.addEventListener('load', preloadPopupImages);
});