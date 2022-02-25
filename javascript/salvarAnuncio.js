var btnEnviar = document.getElementById('btnEnviar');
console.log(btnEnviar);
btnEnviar.addEventListener("click", salvarImovel());

function salvarImovel() {
    console.log('Chamou!');
    var endereco = document.getElementById('id_end').value;
    var num = document.getElementById('num').value;
    var aluguel = document.getElementById('id_aluguel').value;
    var iptu = document.getElementById('id_iptu').value;
    var cond = document.getElementById('id_cond').value;
    var tipo = document.getElementById('id_tipo').value;
    var desc = document.getElementById('txtarea').value;
    var status = document.getElementById('id_status').value;
    
    var data = JSON.stringify({
        "endereco": endereco + ' ' + num,
        "aluguel": aluguel,
        "iptu": iptu,
        "condominio": cond,
        "tipo": tipo,
        "descricao": desc,
        "status": status
    });
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    
    xhr.open("POST", "http://localhost:8080/anuncios");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "133ab179-dd4a-6f8e-2b6c-dae7d9802770");
    
    xhr.send(data);
}