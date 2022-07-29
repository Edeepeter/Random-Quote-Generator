let quotes = [
    `"Love me or hate me, but you can\'t ignore me" `,
    `"If you let your head get too big, it will break your neck"`,
    `"If you want to see a rainbow you have to learn to see the rain" `,
    `"When life gives you lemons, squirt someone in the eye" `,
    `"Reading without reflecting is like eating without digesting" `,
    `"Life itself is the proper binge" `,
    `"We are wired to be kind. It\'s our deepest nature" `,
    `"Maybe life is random,but I doubt it"`,
    `"We grow fearless when we do the things we fear"`,
    `"Impossible is just an opinion" `,
    `" The secret of getting ahead is getting started" `,
    `"In the middle of every difficulty lies opportunity" `,
    `"The greatest gift of life is friendship" `
]
let authors =[
    "-JavaScript",
    "-Elvis Presley",
    "-Paulo Coelho",
    "-Cathy Guisewite",
    "-Edmund Burke",
    "-Julia Child",
    "-Jaime Thurston",
    " -Steven Tyler",
    " -Robin Sharma",
    "-Paulo Coelho",
    "-Mark Twain",
    "-Albert Einstein",
    "-Hubert Humphrey"
]

console.log(quotes);

let randomNumber = Math.floor(Math.random()*13)
console.log(randomNumber);

function newQuote () {
    let randomNumber = Math.floor(Math.random()*13)
     document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
     document.getElementById('auth').innerHTML = authors[randomNumber];

}

// document.getEleme2ntById('quoteDisplay').innerHTML = quotes[randomNumber];
// document