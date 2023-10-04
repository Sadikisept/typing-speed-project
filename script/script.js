const typingText = document.querySelector(".typing-text p"), 
inputField = document.querySelector(".wrapper .input-field"),
mistakeTag = document.querySelector("mistakes span");

let charIndex = mistakes = 0;

function randomParagraphs() {
    //getting random number and it'll always less than the paragraphs length
    let randomIndex = Math.floor(Math.random()* paragraphs.length);
    //getting random item from the paragraphs array, splitting all characters
    // of it, adding each character inside span and then adding this span iside p tag
    paragraphs[randomIndex].split("").forEach(span =>{
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    //focusing input field on keydown or click event
    document.addEventListener("keydown", () => inputField.focus());
    typingText.addEventListener("click", () => inputField.focus());
}

function initTyping(){
    const characters = typingText.querySelectorAll("span");
    let typedChar = inputField.value.split("")[charIndex];
    //if user hasn't enetered any character of pressed backspace
    if(typedChar== null){
      mistakes--;
      characters[charIndex].classList.remove("correct","incorrect");
    } else{
        if(characters[charIndex].innerHTML=== typedChar){
            //if user typed chracter and shown character matched then add the
            // correct class else increment the mistake and add the icorrect class 
            characters[charIndex].classList.add("correct");
        } else{
            mistakes++;
            characters[charIndex].classList.add("incorrect");
        }
        charIndex++; // increment charIndex either user typed correct or incorrect character
    }
    characters.forEach(span => span.classList.remove("active"));
     characters[charIndex].classList.add("active");

     mistakeTag.innerText = mistakes;
}
randomParagraphs();
inputField.addEventListener("input", initTyping)

