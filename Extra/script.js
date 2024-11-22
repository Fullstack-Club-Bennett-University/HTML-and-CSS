const words = ["Web Developer", "ML Enthusiast", "Chai Lover", "Passionate Coder"];
let i = 0;  // Index for words array
let j = 0;  // Character index for current word
let isDeleting = false;
const typeElement = document.querySelector('.typewriter');

function typeEffect() {
    const currentWord = words[i];
    const displayText = isDeleting
        ? currentWord.substring(0, j--)
        : currentWord.substring(0, j++);

    typeElement.innerHTML = displayText;

    // Pause at the end of each word before deleting
    if (!isDeleting && j === currentWord.length) {
        setTimeout(() => isDeleting = true, 1500);  // Pause before deleting
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;  // Move to the next word
    }

    setTimeout(typeEffect, isDeleting ? 100 : 150);  // Typing speed
}

// Start the typewriter effect
document.addEventListener("DOMContentLoaded", typeEffect);

