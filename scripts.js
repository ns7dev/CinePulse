let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
  const offset = -index * 100;
  document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);


// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const filterToggle = document.querySelector('.filter-toggle');
  const filterContent = document.querySelector('.filter-content');

  filterToggle.addEventListener('click', () => {
    if (filterContent.style.display === 'block') {
      filterContent.style.display = 'none';
    } else {
      filterContent.style.display = 'block';
    }
  });
});

// Get the button
const scrollToTopButton = document.getElementById('scrollToTop');

// Show the button when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Show button after scrolling 200px
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// Smooth scroll to top when button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});




// JavaScript for Filter Toggle
const filterToggle = document.getElementById('filterToggle');
const filterSection = document.getElementById('filters');

filterToggle.addEventListener('click', () => {
    filterSection.style.display = filterSection.style.display === 'block' ? 'none' : 'block';
});

// JavaScript for Search Functionality
const searchButton = document.getElementById('search');

searchButton.addEventListener('click', () => {
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;
    const rating = document.getElementById('rating').value;

    // Simulate content update based on filters
    console.log(`Searching for genre: ${genre}, year: ${year}, rating: ${rating}`);

    // For demonstration, alert user about filters being applied
    alert('Filters applied. Please refresh or update the content accordingly.');

    // Here, you would typically make an AJAX request to fetch filtered data.
    // For example: fetch('/api/search', { method: 'POST', body: JSON.stringify({ genre, year, rating }) })
    // Then update the content based on the response.
});

// JavaScript for Load More Button
const loadMoreButton = document.getElementById('loadMore');

loadMoreButton.addEventListener('click', () => {
    // Simulate loading more content
    const newCards = document.createElement('div');
    newCards.innerHTML = `
        <div class="card">
            <div class="card-thumbnail">
                <img src="img/new1.jpg" alt="New Movie 1">
                <div class="card-overlay">
                    <a href="movie.html?movieId=7" class="quick-play">Play</a>
                </div>
            </div>
            <div class="card-info">
                <h3>New Movie Title 1</h3>
                <p class="rating">Rating: 8.0/10</p>
                <p class="description">Brief description of the new movie.</p>
            </div>
        </div>
        <!-- Add more new cards here as needed -->
    `;
    document.querySelector('.cards').appendChild(newCards);
});

// JavaScript for Scroll to Top Button
const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
