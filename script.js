document.addEventListener("DOMContentLoaded", function() {
    const urlInput = document.getElementById("url-input");
    const submitButton = document.getElementById("submit-button");
    const wordInput = document.getElementById("input-field");
    const startSpeechButton = document.getElementById("start-speech-button");
    const answerTitle = document.getElementById("answer-title");

    let recognition;

    submitButton.addEventListener('click', () => {
      const youtubeVideoUrl = urlInput.value;
      window.open(youtubeVideoUrl, '_blank');
      startSpeechRecognition();
    });

    function startSpeechRecognition() {
      const targetWord = wordInput.value.toLowerCase();
      recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.continuous = true;
      recognition.interimResults = false; // Use 'false' to get only the final result.

      recognition.onresult = (event) => {
        let transcript = '';
        for (const result of event.results) {
          transcript += result[0].transcript + ' ';
        }
        console.log(transcript);
        const wordOccurrences = countOccurrences(transcript.toLowerCase(), targetWord);
        answerTitle.textContent = `Total times the word "${targetWord}" is shown in the video: ${wordOccurrences}`;
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      recognition.start();
    }

    function countOccurrences(text, targetWord) {
      const words = text.split(' ');
      let count = 0;
      for (const word of words) {
        if (word === targetWord) {
          count++;
        }
      }
      return count;
    }
  });