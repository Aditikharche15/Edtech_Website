document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data from the file
    fetch('travel.json')
      .then(response => response.json())
      .then(jsonData => {
        jsonData.cards.forEach(cardData => {
          const targetCard = document.querySelector(cardData.selector);
  
          if (targetCard) {
            // Update the content of the target card
            targetCard.querySelector(".card-img-top").src = cardData.image;
            targetCard.querySelector(".card-title").textContent = cardData.title;
            targetCard.querySelector(".card-text").textContent = cardData.previewText;
           
  
            const previewText = targetCard.querySelector(".card-text");
  
            // Add an event listener to toggle between preview and full paragraph
            previewText.addEventListener("click", function () {
              if (previewText.textContent !== cardData.fullParagraph) {
                previewText.textContent = cardData.fullParagraph;
              } else {
                previewText.textContent = cardData.previewText;
              }
            });
  
            const seeMoreLink = targetCard.querySelector(".btn-primary");
  
            // Add an event listener to open "more.html" when clicking "See More"
            seeMoreLink.addEventListener("click", function (event) {
              event.preventDefault();
              window.location.href = cardData.link;
            });
          }
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  