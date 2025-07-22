// Hero Slider
(function() {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;
    const images = JSON.parse(slider.getAttribute('data-images'));
    let current = 0;
    function setBg(index) {
        slider.style.backgroundImage = `url('${images[index]}')`;
    }
    function next() {
        current = (current + 1) % images.length;
        setBg(current);
    }
    setBg(current);
    setInterval(next, 5000);
})();

// Quick Preview Modal for Featured Collection
(function() {
    const previewBtns = document.querySelectorAll('.preview-btn');
    if (!previewBtns.length) return;
    let modal = document.getElementById('preview-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'preview-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img src="" alt="Preview" />
                <h3></h3>
            </div>
        `;
        document.body.appendChild(modal);
    }
    function showPreviewModal(img, title) {
        modal.querySelector('img').src = img;
        modal.querySelector('h3').textContent = title;
        modal.style.display = 'flex';
    }
    previewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.closest('.featured-item');
            const img = item.querySelector('img').src;
            const title = item.querySelector('h3').textContent;
            showPreviewModal(img, title);
        });
    });
    modal.querySelector('.modal-close').onclick = () => modal.style.display = 'none';
    modal.onclick = function(e) {
        if (e.target === modal) modal.style.display = 'none';
    };
})();

document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      nav.classList.toggle('open');
    });
  }
}); 