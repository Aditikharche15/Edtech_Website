function toggleHeartColor() {
    var heartIcon = document.getElementById("heartIcon");
    heartIcon.classList.toggle("red-heart");
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

