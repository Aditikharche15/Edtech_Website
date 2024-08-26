function toggleCards() {
    const cards = document.querySelectorAll('.card1');
    cards.forEach(card => card.style.display = 'block');
    const cardHolder = document.querySelector('.card-holder');
    cardHolder.classList.toggle('transition-box');
  }
  
  $(document).ready(function() {
  $.getJSON('blog.json', function(data) {
      $.each(data, function(index, blog) {
        
          var blogHtml = `
          <div class="blog-card">
              <h2>${blog.title}</h2>
              <p><strong>Author:</strong> ${blog.author}</p>
              <p>${blog.content}</p>
              <p><strong>Date:</strong> ${blog.date}</p>
              <img src="${blog.image}" alt="${blog.title}" class="img-fluid">
              <!-- Add social media sharing buttons here -->
          </div>`;
          $('#blog-posts').append(blogHtml);
      });
  });
});

