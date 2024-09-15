document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtns = document.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var dropdown = this.nextElementSibling;
            this.classList.toggle('active');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        });
    });

    document.getElementById('language-toggle').addEventListener('click', function() {
        // Simple example of toggling languages, this would need to be expanded based on your needs
        var currentLanguage = document.documentElement.lang;
        if (currentLanguage === 'fa') {
            document.documentElement.lang = 'en';
            this.textContent = 'تغییر زبان به فارسی';
        } else {
            document.documentElement.lang = 'fa';
            this.textContent = 'Change Language to English';
        }
    });
});
