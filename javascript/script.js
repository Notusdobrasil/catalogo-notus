
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



//MENU LATERAL FECHA E ABRE
function abrirNav(){
    document.getElementById("menuoculto").style.width="250px";
    document.getElementById("principal").style.marginleft="250px";
}
function fecharNav(){
    document.getElementById("menuoculto").style.width='0';
    document.getElementById("principal").style.marginLeft="0";
}






