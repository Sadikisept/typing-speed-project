// ====Random Quotes Api Url
const quoteApiUrl = "https://api.qoutable.io/random?minLength=80&maxLength=100";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");
let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

//Display random quotes
const renderNewQuote = async () => {
    //Fetch contents from url
    const response = await fetch(quoteApiUrl);

    //Store response
    let data = await response.json();

    //Access qoute
    quote = data.content;

    //array of characters in the quote
    let arr = quote.split("").map((value) => {
        //wrap the charactoers in the span tag
        return "<span class='quote-chars'>" + value + "</span>";
    });
    //join array for displaying
    quoteSection.innerHTML += arr.join ("");
  
};

window.onload = () => {
    userInput.value = "";
    document.getElementById("start-test").style.display = "block";
    document.getElementById("stop-test").style.display = "none";
    userInput.disable = true;
    renderNewQuote();
};





for (let counter = 1; counter < 10; counter = counter++) {
console.log(result);
}
