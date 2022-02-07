class Anuncio{
    constructor(id, endereco, aluguel, iptu, condominio, total, tipo, descricao){
        this._id = id;
        this._endereco = endereco;
        this._aluguel = aluguel;
        this._iptu = iptu;
        this._condominio = condominio;
        this._total = total;
        this._tipo = tipo;
        this._descricao = descricao;
    }

    /**
     * @param {any} id
     */
    set setId(id){
        this._id = id;
    }
    get getId(){
        return this._id;
    }

    /**
     * @param {any} endereco
     */
    set setEdereco(endereco){
        this._endereco = endereco;
    }
    get getEndereco(){
        console.log("O Endereço é: " + this._endereco);
        return this._endereco;
    }

    /**
     * @param {any} aluguel
     */
    set setAlugue(aluguel){
        this._aluguel = aluguel.replace(".", ",").fixed(2);
    }
    get getAluguel(){
        return this._aluguel.toFixed(2).replace(".", ",");
    }

    /**
     * @param {any} iptu
     */
    set setIptu(iptu){
        this._iptu = iptu;
    }
    get getIptu(){
        return this._iptu.toFixed(2).replace(".", ",");
    }

    /**
     * @param {any} condominio
     */
    set setCondominio(condominio){
        this._condominio = condominio;
    }
    get getCondominio(){
        return this._condominio.toFixed(2).replace(".", ",");
    }

    set setTotal(value){
        value = this._aluguel + this._iptu + this._condominio;
        this._total = value;
    }
    get getTotal(){
        return this._total.toFixed(2).replace(".", ",");
    }
 
    /**
     * @param {any} tipo
     */
    set setTipo(tipo){
        this._tipo = tipo;
    }
    get getTipo(){
        return this._tipo;
    }

    /**
     * @param {any} descricao
     */
    set setDescricao(descricao){
        this._descricao = descricao;
    }
    get getDescricao(){
        return this._descricao;
    }
}

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
    setLinha(an02){
        this.tr.setAttribute('class', 'dados');
        this.img.setAttribute('src', 'imagens/info2.png');
        this.img.setAttribute('alt', 'informacao');
        this.abbr.setAttribute('style', 'text-decoation: nome; cursor: copy;');
        this.td0.setAttribute('class', 'info');
        this.td1.setAttribute('class', 'end');
        this.td1.innerHTML = an02.getEndereco;
        this.td2.setAttribute('class', 'valor');
        this.td2.innerHTML = an02.getAluguel;
        this.td3.setAttribute('class', 'valor');
        this.td3.innerHTML = an02.getIptu;
        this.td4.setAttribute('class', 'valor');
        this.td4.innerHTML = an02.getCondominio;
        this.td5.setAttribute('class', 'valor');
        this.td5.setAttribute("style", "font-size: 12px;");
        this.td5.innerHTML = an02.getTotal;
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
 /*  
    var end = document.getElementById("endereco").value;
    var aluguel = document.getElementById("numAluguel").value;
    var iptu = document.getElementById("numIptu").value;
    var condominio = document.getElementById("numCond").value;
    var total = parseFloat(aluguel) + parseFloat(iptu) + parseFloat(condominio);
*/ 
    var an02 = new Anuncio("apto02", "Rua Chanceler Oswaldo Aranha, nº 180/402", 1100.00, 155.56, 500.00, 1750.00, "apartamento", "03 quartos, garagem, com elevador - área 90m2");
    var newLinha = new Linha();
    newLinha.setLinha(an02);
    var lin = newLinha.getLinha();
     
    tabela.appendChild(lin);
    alert("Anúncio publicado com SUCESSO!");
}