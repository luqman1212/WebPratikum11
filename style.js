document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.theme-btn');
    const card = document.querySelector('.card');
    const checkboxes = document.querySelectorAll('.todo-checkbox');

    // Tema untuk card background
    const themes = [
        { bg: '#ffffff', text: '#2e2e2e' }, // white
        { bg: '#1b1b1b', text: '#e1e1e1' }, // eerie-black
        { bg: '#141414', text: '#e1e1e1' }  // chinese-black
    ];
    let currentThemeIndex = 0;

    // Debugging
    if (!themeBtn || !card) {
        console.error('Tombol tema atau card tidak ditemukan!');
        return;
    }

    // Event listener untuk tombol tema
    themeBtn.addEventListener('click', () => {
        console.log('Tombol tema diklik!'); // Debugging
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const theme = themes[currentThemeIndex];
        card.style.backgroundColor = theme.bg;
        card.style.color = theme.text;
        console.log('Tema card baru:', theme); // Debugging
    });

    // Event listener untuk checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const todoText = checkbox.parentElement.querySelector('.todo-text');
            if (checkbox.checked) {
                todoText.style.textDecoration = 'line-through';
            } else {
                todoText.style.textDecoration = 'none';
            }
        });
    });
});