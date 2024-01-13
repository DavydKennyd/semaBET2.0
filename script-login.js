function obterDados() {
    const user = document.getElementById("username").value
    const password = document.getElementById("password").value

    const usuariosLocais = JSON.parse(localStorage.getItem('novos_usuarios')) || []
    const usuarioLocal = usuariosLocais.find(userObj => userObj.username == user && userObj.password == password);

    //validacao 
    console.log('user:', usuarioLocal, 'senha:', password)

    if (usuarioLocal) {
        alert('Login bem sucedido!')
        window.location.href = "perfil.html"
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLocal))
    } else {
        const url = "https://jsonplaceholder.typicode.com/users"
        fetch(url).then(response => response.json()).then(data => {
        const usuarioValidoAPI = data.find(userObj => userObj.username == user && userObj.id.toString() == password)

                if (usuarioValidoAPI) {
                    alert('Login bem sucedido!')
                    window.location.href = "perfil.html?usuario=" + usuarioValidoAPI
                    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValidoAPI));
                } else {
                    alert('Login mal sucedido. Verifique suas credenciais.')
                }
            })
    }
}

    // const url = "https://reqres.in/api/users"
    // let req = new XMLHttpRequest()
    // req.open("GET", url)
    // req.responseType = "json"
    // req.send()
    // req.onload = function(){
    //     let users = req.response
    //     exibirDados(users)
// }
// function exibirDados(JsonObj){
//     let usuarios = JsonObj.data
//     let validado = false
//     const user = document.getElementById("username").value
//     const password = document.getElementById("password").value
//     for (let i = 0; i < usuarios.length; i++) {
//         if (usuarios[i].email === user && usuarios[i].id.toString() === password) {
//             validado = true;
//             break; 
//         }
//     }
//         if (validado){
//             alert('Login bem sucedido')
//             window.location.href="perfil.html"
//         } else {
//             alert('Login mal sucedido')
//         }
// }


