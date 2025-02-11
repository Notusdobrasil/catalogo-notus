
function initializeCarousels() {
    // Seleciona todos os contêineres de carrossel na página
    const carousels = document.querySelectorAll('.carousel-container');

    // Configura cada carrossel individualmente
    carousels.forEach((carouselContainer, index) => {
        const carousel = carouselContainer.querySelector('.carousel');
        const cards = carousel.querySelectorAll('.card, .card-two'); // Seleciona ambas as classes
        const totalSlides = cards.length;
        let currentIndex = 0;

        function showSlide(index) {
            const cardWidth = cards[0].offsetWidth + 20; // largura do card + margem
            const newTransform = -index * cardWidth;
            carousel.style.transform = `translateX(${newTransform}px)`;
        }

        function nextSlide() {
            if (currentIndex === totalSlides - 7) {
                // Se for o último slide, volta para o primeiro
                currentIndex = 0;
            } else {
                // Avança para o próximo slide
                currentIndex++;
            }
            showSlide(currentIndex);
        }

        function prevSlide() {
            if (currentIndex === 0) {
                // Se for o primeiro slide, vai para o último
                currentIndex = totalSlides - 7;
            } else {
                // Volta para o slide anterior
                currentIndex--;
            }
            showSlide(currentIndex);
        }
        // Adiciona os eventos aos botões de controle do carrossel atual
        const nextButton = carouselContainer.querySelector('.next-button');
        const prevButton = carouselContainer.querySelector('.prev-button');

        if (nextButton) nextButton.addEventListener('click', nextSlide);
        if (prevButton) prevButton.addEventListener('click', prevSlide);
    });
}

// Inicializa todos os carrosséis ao carregar a página
document.addEventListener('DOMContentLoaded', initializeCarousels);
document.addEventListener('DOMContentLoaded', initializeCarousels);


function clickMenu() {
      if (itens.style.display == 'block'){
        itens.style.display = 'none'
        } else {
            itens.style.display = 'block'
        }
    }



    
const favoriteIcons = document.querySelectorAll('.fa-heart');
favoriteIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid'); 
  });
});



//MENU LATERAL FAVORITOS E CARRINHO
function abrirNav(){
    document.getElementById("menuoculto").style.width="400px";
    document.getElementById("principal").style.marginleft="400px";
}
function fecharNav(){
    document.getElementById("menuoculto").style.width='0';
    document.getElementById("principal").style.marginLeft="0";
}

//MENU LATERAL FAVORITOS E CARRINHO



// MENU SUPERIOR FILTRO ABRE A FECHA

function abrirNav2() {
    document.getElementById("menuoculto2").style.top = "0"; 
}

function fecharNav2() {
    document.getElementById("menuoculto2").style.top = "-100%"; 
}

// MENU SUPERIOR FILTRO ABRE A FECHA


// SUB MENU PARTE SUPERIOR CATEGORIAS 
function toggleMenu(event) {
    event.preventDefault(); // Evita a navegação do link

    let target = event.target;

    // Se o clique foi no <i>, pega o elemento pai (<a>)
    if (target.tagName === "I") {
        target = target.parentElement;
    }

    let submenu = target.nextElementSibling; // Pega o submenu associado

    if (submenu) {
        // Alterna a visibilidade do submenu
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    }
}

// Evento para fechar o menu ao clicar fora dele
document.addEventListener("click", function (event) {
    let dropdown = document.querySelector(".dropdown");
    let submenu = document.querySelector(".submenu");

    // Se o clique não for dentro do dropdown, fecha o submenu
    if (!dropdown.contains(event.target)) {
        submenu.style.display = "none";
    }
});

// SUB MENU PARTE SUPERIOR CATEGORIAS 

// BUSCA MEIO DA PÁGINA 

function toggleSearchBar() {
    let searchBar = document.getElementById("searchBar");
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block"; // Mostra a barra de pesquisa
    } else {
        searchBar.style.display = "none"; // Esconde a barra de pesquisa
    }
}

// FILTRO DENTRO DA BARRA DE BUSCA 

function filtroSearchbaricon() {
    let filtroSearchbar = document.getElementById("filtroSearchbaricon");

    if (!filtroSearchbar.classList.contains("active")) {
        filtroSearchbar.style.display = "block"; // Exibe o elemento antes da animação
        setTimeout(() => {
            filtroSearchbar.classList.add("active"); // Aplica a animação de entrada
        }, 200); // Pequeno delay para garantir que o CSS reconheça a mudança
    } else {
        filtroSearchbar.classList.remove("active"); // Inicia a animação de saída
        setTimeout(() => {
            filtroSearchbar.style.display = "none"; // Esconde após a transição
        }, 500); // Tempo correspondente à animação
    }
}
