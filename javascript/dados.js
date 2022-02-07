class Anuncio{
    constructor(id, endereco, aluguel, iptu, condominio, total, tipo, descricao){
        this.id = id;
        this.endereco = endereco;
        this.aluguel = aluguel;
        this.iptu = iptu;
        this.condominio = condominio;
        this.total = total;
        this.tipo = tipo;
        this.descricao = descricao;
    }

    /**
     * @param {any} id
     */
    set setId(id){
        this.id = id;
    }
    get getId(){
        return this.id;
    }

    /**
     * @param {any} endereco
     */
    set setEdereco(endereco){
        this.endereco = endereco;
    }
    get getEndereco(){
        return this.endereco;
    }

    /**
     * @param {any} aluguel
     */
    set setAlugue(aluguel){
        this.aluguel = aluguel;
    }
    get getAluguel(){
        return this.aluguel;
    }

    /**
     * @param {any} iptu
     */
    set setIptu(iptu){
        this.iptu = iptu;
    }
    get getIptu(){
        return this.iptu;
    }

    /**
     * @param {any} condominio
     */
    set setCondominio(condominio){
        this.condominio = condominio;
    }
    get getCondominio(){
        return this.condominio;
    }

    get getTotal(){
        return this.total;
    }
 
    /**
     * @param {any} tipo
     */
    set setTipo(tipo){
        this.tipo = tipo;
    }
    get getTipo(){
        return this.tipo;
    }

    /**
     * @param {any} descricao
     */
    set setDescricao(descricao){
        this.descricao = descricao;
    }
    get getDescricao(){
        return this.descricao;
    }
}

var an02 = new Anuncio("apto02", "Rua Chanceler Oswaldo Aranha, nº 180/402", 1.100,00, 155,56, 500,00, 1.750,00, "apartamento", "03 quartos, garagem, com elevador - área 90m2");


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
        this.td1.innerHTML = an02.endereco;
        console.log(an02.endereco);
        this.td2.setAttribute('class', 'valor');
        this.td2.innerHTML = an02.aluguel;
        this.td3.setAttribute('class', 'valor');
        this.td3.innerHTML = an02.iptu;
        this.td4.setAttribute('class', 'valor');
        this.td4.innerHTML = an02.condominio;
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
 /*  
    var end = document.getElementById("endereco").value;
    var aluguel = document.getElementById("numAluguel").value;
    var iptu = document.getElementById("numIptu").value;
    var condominio = document.getElementById("numCond").value;
    var total = parseFloat(aluguel) + parseFloat(iptu) + parseFloat(condominio);
*/ 
    var newLinha = new Linha();
    var an02 = new Anuncio("apto02", "Rua Chanceler Oswaldo Aranha, nº 180/402", 1100.00, 155.56, 500.00, 1750.00, "apartamento", "03 quartos, garagem, com elevador - área 90m2");
    newLinha.setLinha(an02);
    var lin = newLinha.getLinha();
    console.log('Funcionou!')
   
    console.log(lin);
    tabela.appendChild(lin);
}