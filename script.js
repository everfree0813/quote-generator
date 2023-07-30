//Show New Quote
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function newQuote() {
   
    //Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    
    //Check if Quthor filed is blank and replace it with 'Unknown'
    if(!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    //Check Quote length to determine styling
    if(quote.text.length> 100) {
        quoteText.classList.add('long-quote');

    }else {
        quoteText.classList.remove('long-quote');

    }
    
    quoteText.textContent = quote.text;

}

//Tweet quote 
function TweetQuote() {
    
const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
window.open(twitterUrl, '_blank');
   
} 

//Event Listenes
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',TweetQuote);

newQuote();
