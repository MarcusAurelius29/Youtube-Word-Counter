document.addEventListener("DOMContentLoaded", function() {
    const wordInput = document.getElementById("input-field");
    const urlInput = document.getElementById("url-input");
    const submitButton = document.getElementById("submit-button");
    const answerTitle = document.getElementById("answer-title");

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.start();
  
    submitButton.addEventListener('click', countWordOccurrences);
  
    function countWordOccurrences() {
        const targetWord = wordInput.value;
        const targetUrl = urlInput.value;
  
        answerTitle.textContent = `Total times the word is shown in "${targetUrl}": `;
    }


    async function startSpeechRecognition() {
        const youtubeVideoUrl = urlInput.value;
    }
  }); 