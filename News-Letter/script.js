// Current date for the briefing section
document.addEventListener('DOMContentLoaded', function() {
    // Update the date in the briefing section
    const dateElement = document.querySelector('.date');
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString('en-US', options);
    
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        alert('Sorry Sir, I will Working on it.');
      }
    });
    
    // Navigation highlighting
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Simulate loading more news when scrolling to bottom
    window.addEventListener('scroll', function() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        // This would load more content in a real application
        // For demo purposes, we'll just log a message
        console.log('Would load more news here');
      }
    });
    
    // Add hover effects to news cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
      });
    });
  });
  
  // Function to fetch news (would connect to a real API in production)
  function fetchNews(category) {
    console.log(`Would fetch ${category} news from API`);
    // In a real application, this would make an API call to get news data
    // For this demo, we're using static content
  }
  
  // Weather data (would be fetched from a weather API in production)
  const weatherData = {
    location: 'Karnataka',
    temperature: '29°C',
    condition: 'Sunny',
    source: 'weather.com'
  };
  
  // Function to toggle between light and dark mode (not fully implemented in this demo)
  function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
  }