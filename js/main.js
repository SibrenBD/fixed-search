const currentCards = [0, 1, 2];

const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
previousBtn.addEventListener("click", previousCards);
nextBtn.addEventListener("click", nextCards);

fetchAndCreate();

// alle functies

function fetchAndCreate() {
    fetch("monkeys.json")
    .then(response => response.json())
    .then(Data => createCards(Data))
}

function createCards(monkeyData) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < currentCards.length; i++) {
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
    fetchAndCreate();
}

function nextCards() {
    for (let i = 0; i < currentCards.length; i++) {
        currentCards[i]++;
    }
    fetchAndCreate();
}

// epic fixed search :)

function showResults() {
    fetch("monkeys.json")
    .then(response => response.json())
    .then(Data => {
        const searchInput = document.querySelector(".monkey-search");
        while(currentCards.length > 0) {
            currentCards.pop();
        }
        console.log(currentCards);
        for (let m = 0; m < Data.length; m++) {
            let dataLetters;
            for (let i = 0; i < searchInput.value.length; i++) {
                console.log(Data[m].Name);
                console.log(Data[m].Name[i]);
                dataLetters += Data[m].Name[i];
            }
            console.log(dataLetters);
            if (dataLetters == searchInput.value) {
                alert("foundtem");
                currentCards.push(m);
            }
        }
        if (currentCards.length == 0) {
            currentCards.push(0);
            currentCards.push(1);
            currentCards.push(2);
        }
        fetchAndCreate();
    })

}