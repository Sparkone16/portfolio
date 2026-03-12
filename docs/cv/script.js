document.addEventListener('click', function(e) {
    if (e.target.tagName === 'bouton_pdf') {
        window.print();
    }
});