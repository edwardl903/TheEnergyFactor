// script.js
document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('nav li');

    navItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            var submenu = this.querySelector('ul');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', function () {
            var submenu = this.querySelector('ul');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});
