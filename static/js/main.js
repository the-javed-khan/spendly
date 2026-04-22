// main.js — students will add JavaScript here as features are built

(function () {
    var overlay = document.getElementById('demo-modal');
    if (!overlay) return;

    var iframe = document.getElementById('demo-iframe');
    var openBtn = document.getElementById('open-demo-modal');
    var closeBtn = document.getElementById('close-demo-modal');

    function openModal() {
        iframe.src = iframe.dataset.src;
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        // Stop video by clearing src; restored from data-src on next open
        iframe.src = '';
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Close when clicking the dark backdrop (not the modal box itself)
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
}());
