const currentCards = [0, 1, 2];

fetch("monkeys.json")
    .then(response => response.json())
    .then(Data => createCards(Data))


const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
previousBtn.addEventListener("click", previousCards);
nextBtn.addEventListener("click", nextCards);




function createCards(monkeyData) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        container.innerHTML +=
            `
        <div class="card">
            <h2>${monkeyData[currentCards[i]].Name}</h2>
            <img src="${monkeyData[currentCards[i]].Image}" alt="${monkeyData[currentCards[i]].Name}">
            <h2>${monkeyData[currentCards[i]].Population}</h2>
        </div>
        `
    }
}

function previousCards() {
    for (let i = 0; i < currentCards.length; i++) {
        currentCards[i]--;
    }
    fetch("monkeys.json")
        .then(response => response.json())
        .then(Data => createCards(Data))
}

function nextCards() {
    for (let i = 0; i < currentCards.length; i++) {
        currentCards[i]++;
    }
    fetch("monkeys.json")
        .then(response => response.json())
        .then(Data => createCards(Data))
}