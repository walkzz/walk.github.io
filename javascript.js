const modalImage = document.getElementById("modalImage");
const flashcards = document.querySelectorAll(".flashcard");
//object mapping
const imagePathMap = {
    'Aatrox': '/Champion Icons/Aatrox/Aatrox_Background.jpg',
    'Viego': '/Champion Icons/Viego_0.jpg',
    
};

// event listener for flashcards
flashcards.forEach(flashcard => {
    flashcard.addEventListener('click', () =>{
        overlay.style.display = "flex";
        modal.style.display = "block";
        modalContent.innerHTML = '';

        const contentValue = flashcard.getAttribute('data-content');
        modalImage.textContent = contentValue;
        const imagePath = imagePathMap[contentValue] || '/path/to/default-image.jpg';
        modalImage.src = imagePath;

        //creating new image in the modal
        const newImage = document.createElement('img');
        newImage.src = imagePath;
        newImage.alt = contentValue;
        modalContent.appendChild(newImage);
    })
})
closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    modal.style.display = 'none';
});

closeButton.addEventListener('click', closeModal);

// Close modal when overlay is clicked
overlay.addEventListener('click', closeModal);

function closeModal() {
    // Hide overlay and modal
    overlay.style.display = 'none';
    modal.style.display = 'none';
}

function dark_theme(){
    const body = document.getElementById("body");
    body.classList.toggle("dark_theme");
}

function search_champions(){
    var input, filter, container, cards, title, i;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    container = document.getElementById("container");
    cards = container.getElementsByClassName("flashcard");

    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector("#champion_name");

        // Add a check to ensure title is not null
        if (title) {
            if (title.innerText.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}