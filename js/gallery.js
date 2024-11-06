// Modal for Gallery Images

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.gallery-grid img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `<img src="${img.src}" alt="${img.alt}"><span class="close-modal">&times;</span>`;
            document.body.appendChild(modal);
            
            modal.addEventListener('click', (e) => {
                if (e.target.classList.contains('close-modal') || e.target.classList.contains('modal')) {
                    modal.remove();
                }
            });
        });
    });
});
