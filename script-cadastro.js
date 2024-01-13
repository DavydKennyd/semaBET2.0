const novos_usuarios = []

function cadastrarUsuarios() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const novoUser = {
        username: username,
        email: email,
        password: password
    }

    const usuarioExistente = novos_usuarios.find(user => user.username === username || user.email === email);

    if (usuarioExistente) {
        alert('Usuário já cadastrado. Escolha um nome de usuário ou email diferente.');
    } else {
        novos_usuarios.push(novoUser);

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoUser),
        })
        .then(response => response.json())
        .then(() => {
            console.log('Usuário cadastrado com sucesso na API:', novoUser);
            alert('Usuário cadastrado com sucesso!');


            localStorage.setItem('novos_usuarios', JSON.stringify(novos_usuarios))

            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("confirm_password").value = "";
    })
    }   
    console.log('nova lista:', {novos_usuarios})

}

function voltarLogin(){
    window.location.href = 'login.html'
}