document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetMenu = document.getElementById(button.getAttribute('data-target'));
            if (targetMenu.style.display === 'block') {
                targetMenu.style.display = 'none';
            } else {
                targetMenu.style.display = 'block';
            }
        });
    });
});
