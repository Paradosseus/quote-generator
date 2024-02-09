var quote = document.getElementById("quote");
var author = document.getElementById("author");
var share = document.getElementById("twitter-share");

async function fetchQuote() {
  const api_url = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  const response = await fetch(api_url);
  var data = await response.json();
  chooseQuote(data);
}

function chooseQuote(quote_array) {
  let index = Math.floor(Math.random() * quote_array.length) + 1;

  //   return console.log(quote_array[index].text);
  quote.innerText = quote_array[index].text;
  author.innerText = quote_array[index].author;
  return (share.href = `http://twitter.com/intent/tweet?text=%20${quote.innerText}%0A%0A-${author.innerText}`);
}

fetchQuote();
