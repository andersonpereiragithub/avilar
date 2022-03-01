var mainBody = document.querySelector('body');

mainBody.addEventListener('loadstart', listarImoveis());

function listarImoveis() {
    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            const json = this.responseText;
            const obj = JSON.parse(json);
            
            var anuncios = obj;
            criarLinha(anuncios);
        }
    });

    xhr.open("GET", "http://192.168.0.107:8080/anuncios");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "a692c64d-ad47-e5f9-f9da-af82f6aa1d8a");

    xhr.send(data);
}

function criarLinha(anuncios){
    var tbody = document.getElementById('tbody');

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