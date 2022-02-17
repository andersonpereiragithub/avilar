function testandoApi() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.responseText);

            const json = this.responseText;
            const obj = JSON.parse(json);

            for (var i = 0; i < obj.length; i++) {
                console.log(obj[i].descricao);
            }

            var input = document.getElementById('input1');

            input.value = obj[6].descricao;
        }
    });

    xhr.open("GET", "http://192.168.0.109:8080/cost");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "46602ff6-d18a-89ad-6884-77d809090d72");

    xhr.send(data);
}

function salvarImovel() {
    console.log('Chamou!')
    var endereco = document.getElementById('id_end').value;
    console.log(endereco);
    
    var num = document.getElementById('num').value;
    console.log(num);

    var aluguel = document.getElementById('id_aluguel').value;
    console.log(aluguel);

    var iptu = document.getElementById('id_iptu').value;
    console.log(iptu);

    var cond = document.getElementById('id_cond').value;
    console.log(cond);

    var tipo = document.getElementById('id_tipo').value;
    console.log(tipo);

    var desc = document.getElementById('txtarea').value;
    console.log(desc);

    var status = document.getElementById('id_status').value;
    console.log(status);

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