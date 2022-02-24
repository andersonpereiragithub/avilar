var btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener("click", salvarImovel());

export function salvarImovel() {
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

export function listarImoveis() {
    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            const json = this.responseText;
            const obj = JSON.parse(json);
            
            var anuncios = obj;

            var tbody = document.getElementById('tbody');
            var i = 0;

            for(let i = 0; i < anuncios.length; i++){
                let tr = tbody.insertRow();
                let td_end = tr.insertCell() ;
                let td_aluguel = tr.insertCell();
                let td_iptu = tr.insertCell();
                let td_cond = tr.insertCell();
                let td_total = tr.insertCell();
                let tr_desc = tbody.insertRow();
                
                td_end.innerText = anuncios[i].endereco;
                td_aluguel.innerText = anuncios[i].aluguel.toFixed(2).replace('.', ',');
                td_iptu.innerText = anuncios[i].iptu.toFixed(2).replace('.', ',');
                td_cond.innerText = anuncios[i].condominio.toFixed(2).replace('.', ',');
                tr_desc.innerText = anuncios[i].descricao;
                
                let somaTotal = anuncios[i].aluguel + anuncios[i].iptu + anuncios[i].condominio;
                td_total.innerText = somaTotal.toFixed(2).replace('.', ',');
                
                tr.setAttribute('id', `${anuncios[i].id}`);
                tr.setAttribute('class', 'dados');
                td_end.setAttribute('class', 'end');
                td_aluguel.setAttribute('class', 'valor');
                td_iptu.setAttribute('class', 'valor');
                td_cond.setAttribute('class', 'valor');
                td_total.setAttribute('class', 'tot');
                tr.setAttribute('onmouseover', 'showDesc(this.id)');
                tr.setAttribute('onmouseout', 'hiddenDesc(this.id)');
                tr_desc.setAttribute('id', `${anuncios[i].id}` + '_sub');
                tr_desc.setAttribute('classe', 'dados');
                tr_desc.setAttribute('style', 'opacity: 0; width: 20px');
            }
        }
    });

    xhr.open("GET", "http://192.168.0.107:8080/anuncios");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "a692c64d-ad47-e5f9-f9da-af82f6aa1d8a");

    xhr.send(data);
}