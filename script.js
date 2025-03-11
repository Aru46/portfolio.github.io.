function toggleTheme() {
    document.body.classList.toggle('dark');
    const themeButton = document.querySelector('.theme-toggle');
    themeButton.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';

    // Запоминаем тему в localStorage
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Устанавливаем тему при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.theme-toggle').textContent = '🌞';
    }
});
