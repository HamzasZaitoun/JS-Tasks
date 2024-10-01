'use strict'
let heading = document.querySelector("h1");
let paragraph = document.querySelector("p");
function higlight()
{
    const words = paragraph.innerHTML.split(" ");
    const updatedText = words.map(word => {
        if (word.length > 8) {
            return `<span class="highlight">${word}</span>`;
        }
        return word;
    }).join(" ");

    paragraph.innerHTML = updatedText;
}
window.onload = higlight;