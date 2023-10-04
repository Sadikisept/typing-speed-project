const typingText = document.querySelector(".typing-text p"),
    inputField = document.querySelector(".wrapper .input-field"),
    timeTag = document.querySelector(".time span  b"),
    mistakeTag = document.querySelector(".mistake span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span"),
    tryAgainBtn = document.querySelector("button");

let timer,
    maxTime = 60,
    timeLeft = maxTime,
    charIndex = mistakes = isTyping = 0;

function randomParagraphs() {
    //getting random number and it'll always less than the paragraphs length
    let randomIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    //getting random item from the paragraphs array, splitting all characters
    // of it, adding each character inside span and then adding this span iside p tag
    paragraphs[randomIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    //focusing input field on keydown or click event
    document.addEventListener("keydown", () => inputField.focus());
    typingText.addEventListener("click", () => inputField.focus());
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inputField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {// once timer is start, it won't restart again on every key clicked
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        //if user hasn't enetered any character of pressed backspace
        if (typedChar == null) {
            charIndex--;//decrement charIndex
            //decrement mistakes only if the charIndex span contains incorect class 
            if ([charIndex].classList.contains("incorect")) {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
        } else {
            if (characters[charIndex].innerHTML === typedChar) {
                //if user typed chracter and shown character matched then add the
                // correct class else increment the mistake and add the icorrect class 
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++; // increment charIndex either user typed correct or incorrect character
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round((((charIndex - mistakes) / 5) / (maxTime - timeLeft)) * 60);
        // if wpm value is 0 , empty, or infinity then setting it's value to 0
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        mistakeTag.innerText = mistakes;
        wpmTag.innerText = wpm;
        cpmTag.innerText = charIndex - mistakes;// cpm will not count miskaes
    } else {
        inputField.value = "";
        clearInterval(timer);
    }
}

function initTimer() {
    //if timeleft is greater than 0 then decrement the timeLeft else clear the timer
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer)
    }
}

function resetGame() {
    //calling loadparagraph function and 
    // resetting each variables and elements value to default
    randomParagraphs();
    inputField.value = "";
    timeLeft = maxTime,
    charIndex = mistakes = isTyping =  0;
    timeTag.innerText.timeLeft;
    mistakeTag.innerText = mistakes;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
}
randomParagraphs();
inputField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);