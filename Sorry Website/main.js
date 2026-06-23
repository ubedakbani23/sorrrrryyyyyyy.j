
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I'm SORRY BABYYYY forgive me pleaseeeeee!!!";
  gif.src = "images/sorry.png";
  gif.style.height = "300px"; 
gif.style.width = "400px"; 
  noBtn.innerHTML = "No";
  yesBtn.innerHTML = "Acha theek hai";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Thankkkkyyouuuuu soo muchh myy lovveeeee!!!!";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  })

  noBtn.addEventListener("click", () => {
    question.innerHTML = "Pleaseeeeeeeee maaf kardo babyyyy";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "Accha thik hai";
    noBtn.innerHTML = "Nai karungi";

    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Thankkkkyyouuuuu soo muchh myy lovveeeee!!!!";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    })

    noBtn.addEventListener("click", () => {
      question.innerHTML = "Apne gulaam ko maaf kardo na baby pleaseeeeee";
      gif.src = "images/sadlife.gif";
      yesBtn.innerHTML = "Chalo maan gai";
      noBtn.innerHTML = "Final no";

      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Thankkkkyyouuuuu soo muchh myy lovveeeee!!!!";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });

      noBtn.addEventListener("click", () => {
        question.innerHTML = "Pleaseeeee meri jaaaaaannnnnnn pleaseee aaf kardo aur reply dedo meri princesss!!!!";
        gif.src = "images/run.gif";
        yesBtn.innerHTML = "No";
        noBtn.innerHTML = "Yes";

        noBtn.addEventListener("click", () => {
          question.innerHTML = "Thankkkkyyouuuuu soo muchh myy lovveeeee!!!!";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        })
        // Hover effect for the "yes" button
        yesBtn.addEventListener("mouseover", () => {
          const yesBtnRect = yesBtn.getBoundingClientRect();
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const margin = 50; // Margin from each side
        
          // Calculate maximum available space for the button
          const maxX = screenWidth - yesBtnRect.width - margin * 2; // Considering margin on both sides
          const maxY = screenHeight - yesBtnRect.height - margin * 2; // Considering margin on both sides
        
          // Generate random position within the available space
          const randomX = Math.max(margin, Math.floor(Math.random() * maxX)) + margin; // Add margin to X position
          const randomY = Math.max(margin, Math.floor(Math.random() * maxY)) + margin; // Add margin to Y position
        
          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        });
        
        
      });
    });
  });
});




