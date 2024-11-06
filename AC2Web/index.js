const form = document.getElementById('productForm');
const cardsContainer = document.getElementById('cards-container');
const clearAllBtn = document.getElementById('clearAllBtn');

function createCard(title) 
{
    const randomImageId = Math.floor(Math.random() * 1000);

    const card = document.createElement('div');
    card.classList.add('col-md-4', 'col-sm-6', 'col-12');

    card.innerHTML = `
    <div class="card">
        <img src="https://picsum.photos/300/200?random=${randomImageId}" class="card-img-top" alt="Imagem aleatória">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <button class="btn btn-danger" onclick="removeCard(this)">Apagar</button>
        </div>
    </div>
    `;
    cardsContainer.appendChild(card);
}

function removeCard(button) 
{
    const cardToRemove = button.closest('.col-md-4');
    cardToRemove.remove();
}

function clearAllCards()
{
    cardsContainer.innerHTML = '';
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('texto').value;
    if (title.trim() !== "") {
    createCard(title);
    }

    document.getElementById('texto').value = '';
});

clearAllBtn.addEventListener('click', function () {
    clearAllCards();
});
