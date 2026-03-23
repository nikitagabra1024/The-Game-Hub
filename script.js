const quotes = [
  {text:"Games are the most elevated form of investigation.", author:"Albert Einstein"},
  {text:"Winning isn't everything, but wanting to win is.", author:"Vince Lombardi"},
  {text:"Life is more fun if you play games.", author:"Roald Dahl"},
  {text:"Play is our brain’s favorite way of learning.", author:"Diane Ackerman"},
  {text:"Games give you courage and confidence.", author:"Anonymous"}
];

function loadQuote() {
  // generates a random number between 0 to 4 ( since the lenght of quotes array is 5 hence from (0-4))
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const q = quotes[randomIndex];
  // backticks helps to dynamically insert the value in given element
  document.getElementById("quoteText").textContent = `"${q.text}"`;
  document.getElementById("quoteAuthor").textContent = `- ${q.author}`;
}

window.onload = loadQuote;
function openGame(url){
  window.location.href = url;
}
