// Authentication functions
function isLoggedIn() {
    return localStorage.getItem('userLoggedIn') === 'true';
  }
  
  function loadProject(url) {
    document.getElementById('project-frame').src = url;
  }
  
  function openProject(url) {
    if (isLoggedIn()) {
      window.open(url, '_blank');
    } else {
      alert('You need to log in first to view the full website.');
      window.location.href = 'loginform.html';
    }
  }
  
  // Modal functions
  function toggleDetails(projectId) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Project details content - customize for each project
    const projectDetails = {
      mp3: `
        <h2>MP3 WEBSITE</h2>
        <div class="modal-image">
          <img src="images/mymp3.png" alt="MP3 Website Screenshot">
        </div>
        <div class="modal-description">
          <h3>About This Project</h3>
          <p>This MP3 website features a custom audio player with playlist functionality. Users can play, pause, skip tracks, and adjust volume with an intuitive interface.</p>
          
          <h3>Technologies Used</h3>
          <ul>
            <li>HTML5 Audio API</li>
            <li>CSS3 animations and transitions</li>
            <li>JavaScript for player functionality</li>
          </ul>
          
          <h3>Key Features</h3>
          <ul>
            <li>Custom audio controls</li>
            <li>Responsive design for all devices</li>
            <li>Playlist management</li>
            <li>Track progress visualization</li>
          </ul>
          
          <div class="modal-actions">
            <a href="https://ematttt.github.io/mp3website2/" target="_blank" class="project-button">View Live Demo</a>
          </div>
        </div>
      `,
      article: `
        <h2>MY ARTICLE</h2>
        <div class="modal-image">
          <img src="images/myarticle.png" alt="Article Website Screenshot">
        </div>
        <div class="modal-description">
          <h3>About This Project</h3>
          <p>This article layout showcases responsive typography and content organization, providing an optimal reading experience across devices.</p>
          
          <h3>Technologies Used</h3>
          <ul>
            <li>HTML5 semantic elements</li>
            <li>CSS3 Grid and Flexbox</li>
            <li>Responsive design principles</li>
          </ul>
          
          <h3>Key Features</h3>
          <ul>
            <li>Typography optimized for readability</li>
            <li>Responsive layout</li>
            <li>Content sections with visual hierarchy</li>
            <li>Accessibility considerations</li>
          </ul>
          
          <div class="modal-actions">
            <a href="https://ematttt.github.io/article/index.html" target="_blank" class="project-button">View Live Demo</a>
          </div>
        </div>
      `,
      favorite: `
        <h2>MY FAVORITE</h2>
        <div class="modal-image">
          <img src="images/myfavorite.png" alt="My Favorite Website Screenshot">
        </div>
        <div class="modal-description">
          <h3>About This Project</h3>
          <p>This project showcases a collection of favorite items with a focus on visual presentation and interactive elements.</p>
          
          <h3>Technologies Used</h3>
          <ul>
            <li>HTML5 structure</li>
            <li>CSS3 animations and effects</li>
            <li>JavaScript for interactivity</li>
          </ul>
          
          <h3>Key Features</h3>
          <ul>
            <li>Gallery-style presentation</li>
            <li>Interactive item selection</li>
            <li>Detailed information on select</li>
            <li>Visually engaging design</li>
          </ul>
          
          <div class="modal-actions">
            <a href="https://ematttt.github.io/myfavorite/" target="_blank" class="project-button">View Live Demo</a>
          </div>
        </div>
      `,
      story: `
        <h2>MY STORY</h2>
        <div class="modal-image">
          <img src="images/mystory.png" alt="My Story Website Screenshot" style="border-radius: 10px; background: white;">
        </div>
        <div class="modal-description">
          <h3>About This Project</h3>
          <p>This interactive narrative project uses web design elements to tell a story, creating an immersive experience for users.</p>
          
          <h3>Technologies Used</h3>
          <ul>
            <li>HTML5 for content structure</li>
            <li>CSS3 animations and transitions</li>
            <li>JavaScript for interactive storytelling</li>
          </ul>
          
          <h3>Key Features</h3>
          <ul>
            <li>Progressive narrative flow</li>
            <li>Interactive story elements</li>
            <li>Visual storytelling techniques</li>
            <li>Engaging user experience</li>
          </ul>
          
          <div class="modal-actions">
            <a href="https://ematttt.github.io/mystory/" target="_blank" class="project-button">View Live Demo</a>
          </div>
        </div>
      `
    };
    
    // Set modal content
    modalContent.innerHTML = projectDetails[projectId];
    
    // Show modal with animation
    modal.style.display = 'block';
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
  }
  
  function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', () => {
    // Authentication UI setup
    const authButtons = document.getElementById('auth-buttons');
    const logoutIcon = document.getElementById('logout-icon');
  
    if (isLoggedIn()) {
      logoutIcon.style.display = 'flex';
      logoutIcon.addEventListener('click', () => {
        localStorage.removeItem('userLoggedIn');
        alert('You have been logged out. Please visit again soon!');
        window.location.href = 'index.html';
      });
    }
    
    // Project cell click events
    document.querySelectorAll('.projects-section .cells .cell').forEach(cell => {
      cell.addEventListener('click', function() {
        // Remove 'active' class from all cells
        document.querySelectorAll('.projects-section .cells .cell').forEach(c => c.classList.remove('active'));
        
        // Add 'active' class to the clicked cell
        this.classList.add('active');
        
        // Get project ID from data attribute
        const projectId = this.getAttribute('data-project-id');
        if (projectId) {
          toggleDetails(projectId);
        }
        
        // If using iframe display as well
        const url = this.getAttribute('data-url');
        const iframe = document.querySelector('.project-display-box iframe');
        if (iframe && url) {
          iframe.src = url;
        }
      });
    });
    
    // Modal close events
    window.onclick = function(event) {
      const modal = document.getElementById('project-modal');
      if (event.target == modal) {
        closeModal();
      }
    };
    
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  });