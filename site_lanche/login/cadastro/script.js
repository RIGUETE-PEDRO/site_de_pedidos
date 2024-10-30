document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulação de armazenamento de novo usuário
    const newUser = {
        nome: nome,
        email: email,
        password: password
    };

    // Simulação de salvar no localStorage (ou pode ser substituído por uma chamada a um servidor)
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Cadastro realizado com sucesso!');
    // Redirecionar para a página de login ou principal
    window.location.href = 'login.html';
});
