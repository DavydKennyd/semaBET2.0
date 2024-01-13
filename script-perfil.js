const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
    console.log(usuarioLogado)

function alterarUsuario() {

    document.getElementById('user_name').innerText =  usuarioLogado.name
        
        document.getElementById('user_fullname').innerText = 'Nome: ' + usuarioLogado.name
        
        document.getElementById('user_username').innerText = 'Usuário: ' + usuarioLogado.username
        
        document.getElementById('user_email').innerText = 'Email: ' + usuarioLogado.email

            if (usuarioLogado.address) {
            document.getElementById('user_street').innerText = 'Endereço: Rua ' + usuarioLogado.address.street + ', ' + usuarioLogado.address.suite
            
            document.getElementById('user_city').innerText = 'Cidade: ' + usuarioLogado.address.city

            document.getElementById('user_zipcode').innerText = 'CEP: ' + usuarioLogado.address.zipcode
            }
}

function verificarLogado() {
    if (usuarioLogado) {
        alterarUsuario()
    }
}

function deslogarUsuario() {
    localStorage.removeItem('usuarioLogado')
    alert('Usuario deslogado com sucesso')
    window.location.href = 'index.html'
}