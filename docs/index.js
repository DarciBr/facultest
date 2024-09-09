// Seleciona o botão
const themeToggleButton = document.getElementById('theme-toggle');

// Função para alternar entre temas
themeToggleButton.addEventListener('click', function() {
    // Seleciona o elemento :root
    const root = document.documentElement;

    // Verifica se o tema escuro está ativo comparando o valor atual da variável CSS
    if (root.style.getPropertyValue('--plano-dark') === '#16423C' || root.style.getPropertyValue('--plano-dark') === '') {
        // Muda para o tema claro
        root.style.setProperty('--plano-dark', '#E9EFEC');
        root.style.setProperty('--plano2-dark', '#6A9C89');
        root.style.setProperty('--letra-dark', '#16423C');
        themeToggleButton.textContent = 'Escuro';
    } else {
        // Muda para o tema escuro
        root.style.setProperty('--plano-dark', '#16423C');
        root.style.setProperty('--plano2-dark', '#6A9C89');
        root.style.setProperty('--letra-dark', '#E9EFEC');
        themeToggleButton.textContent = 'Claro';
    }
});
