const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
console.log(usuarioLogado)

function verificarUsuarioLogado() {
    //validacao 
    console.log('usuario:',usuarioLogado)
    if (!usuarioLogado) {
        window.location.href = 'login.html'
        alert('Faça Login para acessar o perfil')
    } else {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
        window.location.href = 'perfil.html'
       
    }
}
function verificarIndex() {
    if (usuarioLogado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
    } 
}