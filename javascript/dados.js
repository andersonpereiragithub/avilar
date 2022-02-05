let tabela = document.getElementById('tabela_1');

class Linha {
    constructor(){
        this.tr = document.createElement('tr');
        this.img = document.createElement('img');
        this.abbr = document.createElement('abbr');
        this.td0 = document.createElement('td');
        this.td1 = document.createElement('td');
        this.td2 = document.createElement('td');
        this.td3 = document.createElement('td');
        this.td4 = document.createElement('td');
        this.td5 = document.createElement('td');
    }
    setLinha(end, aluguel, iptu, condominio){
        this.tr.setAttribute('class', 'dados');
        this.img.setAttribute('src', 'imagens/info2.png');
        this.img.setAttribute('alt', 'informacao');
        this.abbr.setAttribute('style', 'text-decoation: nome; cursor: copy;');
        this.td0.setAttribute('class', 'info');
        this.td1.setAttribute('class', 'end');
        this.td1.innerHTML = end;
        this.td2.setAttribute('class', 'valor');
        this.td2.innerHTML = aluguel;
        this.td3.setAttribute('class', 'valor');
        this.td3.innerHTML = iptu;
        this.td4.setAttribute('class', 'valor');
        this.td4.innerHTML = condominio;
        this.td5.setAttribute('class', 'valor');
        this.td5.setAttribute("style", "font-size: 12px;");
    }
    getLinha(){
        this.abbr.appendChild(this.img);
        this.td0.appendChild(this.abbr);
        this.tr.appendChild(this.td0);
        this.tr.appendChild(this.td1);
        this.tr.appendChild(this.td2);
        this.tr.appendChild(this.td3);
        this.tr.appendChild(this.td4);
        this.tr.appendChild(this.td5);

        return this.tr;
    }
}

function inserirNovo(){
    var end = document.getElementById("endereco").value;
    var aluguel = document.getElementById("numAluguel").value;
    var iptu = document.getElementById("numIptu").value;
    var condominio = document.getElementById("numCond").value;
    var total = parseFloat(aluguel) + parseFloat(iptu) + parseFloat(condominio);
    
    var newLinha = new Linha();
    
    newLinha.setLinha(end, aluguel, iptu, condominio);
    var lin = newLinha.getLinha();
   
    tabela.appendChild(lin);
}