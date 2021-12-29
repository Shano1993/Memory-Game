const cardArray = [
    {
        name: 'one',
        img: 'assets/img/one.jpg'
    },
    {
        name: 'one',
        img: 'assets/img/one.jpg'
    },
    {
        name: 'two',
        img: 'assets/img/two.jpeg'
    },
    {
        name: 'two',
        img: 'assets/img/two.jpeg'
    },
    {
        name: 'three',
        img: 'assets/img/three.jpg'
    },
    {
        name: 'three',
        img: 'assets/img/three.jpg'
    },
    {
        name: 'four',
        img: 'assets/img/four.jpg'
    },
    {
        name: 'four',
        img: 'assets/img/four.jpg'
    },
    {
        name: 'five',
        img: 'assets/img/five.jpg'
    },
    {
        name: 'five',
        img: 'assets/img/five.jpg'
    },
    {
        name: 'six',
        img: 'assets/img/six.jpg'
    },
    {
        name: 'six',
        img: 'assets/img/six.jpg'
    },
    {
        name: 'seven',
        img: 'assets/img/seven.jpg'
    },
    {
        name: 'seven',
        img: 'assets/img/seven.jpg'
    },
    {
        name: 'eight',
        img: 'assets/img/eight.png'
    },
    {
        name: 'eight',
        img: 'assets/img/eight.png'
    }
]
cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// button to start the game
document.querySelector('#start').addEventListener('click', function () {
    document.querySelector('#start').style.display = 'none';
    // function to create the game
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'assets/img/card.png');
            card.setAttribute('data-id', i.toString());
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        // if there are two identical cards, background replaced by white
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'assets/img/white.png');
            cards[optionTwoId].setAttribute('src', 'assets/img/white.png');
            cardsWon.push(cardsChosen);
        }
        // otherwise the cards take an original background
        else {
            cards[optionOneId].setAttribute('src', 'assets/img/card.png');
            cards[optionTwoId].setAttribute('src', 'assets/img/card.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.innerHTML = cardsWon.length.toString();
        // victory condition if there are no more cards left
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.innerHTML = 'Félicitation, tu as gagné !';
            document.querySelector('#restart').style.display = 'block';

        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
    createBoard();
})

// button restart game
document.querySelector('#restart').addEventListener('click', function() {
    location.reload();
})