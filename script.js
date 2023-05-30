const clickAudio = new Audio('ting.mp3');
const btn = document.querySelector('.btn');
const quoteElement = document.getElementsByClassName('quote');
const quote = quoteElement[0];
const author = quoteElement[1];
let quotes;

const getQuotes = async () => {
    quotes = await fetch('https://type.fit/api/quotes');
    quotes = await quotes.json();
}

getQuotes();

btn.addEventListener('click', async () => {
    clickAudio.play();
    let randomIndex = Math.floor(Math.random() * 10);
    quote.innerText = `"${quotes[randomIndex].text}"`;
    author.innerText = `-${quotes[randomIndex].author}`;
});
