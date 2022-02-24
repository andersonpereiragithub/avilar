   /*class Anuncio{
    constructor(id, endereco, aluguel, iptu, condominio, tipo, descricao){
        this._id = id;
        this._endereco = endereco;
        this._aluguel = aluguel;
        this._iptu = iptu;
        this._condominio = condominio;
        this._tipo = tipo;
        this._descricao = descricao;
        this._Total = 0.00;
    }

    
     * @param {any} id
    
    set setId(id){
        this._id = id;
    }
    get getId(){
        return this._id;
    }

    set setEdereco(endereco){
        this._endereco = endereco;
    }
    get getEndereco(){
        return this._endereco;
    }

    set setAlugue(aluguel){
        this._aluguel = aluguel;
    }
    get getAluguel(){
        return this._aluguel;
    }

    set setIptu(iptu){
        this._iptu = iptu;
    }
    get getIptu(){
        return this._iptu;
    }

    set setCondominio(value){
        this._condominio = value;
    }
    get getCondominio(){
        return this._condominio;
    }
    
    set setTipo(tipo){
        this._tipo = tipo;
    }
    get getTipo(){
        return this._tipo;
    }

    set setDescricao(descricao){
        this._descricao = descricao;
    }
    get getDescricao(){
        return this._descricao;
    }
}

 var an01 = new Anuncio('apto01', 'Rua Santo Antônio, nº 266/705', 700.00, 114.00, 310.00, 'apartamento', 'Quarto e sala com armários - área 44m2');
    var an02 = new Anuncio("apto02", "Rua Chanceler Oswaldo Aranha, nº 180/402", 1100.00, 155.56, 500.00, "apartamento", "03 quartos, garagem, com elevador - área 90m2");
    var an03 = new Anuncio("apto03", "Rua Gil Horta, 90", 1200.00, 247.52, 220.00, "apartamento", "03 quartos, garagem, sem elevador - área 112m2");
    var an04 = new Anuncio("apto04", "Rua Luz Interior, 0",	5000.00, 550.00, 0.00, "terreno", "Terreno 644m2");
    var an05 = new Anuncio("apto05", "Rua Vila Vidal, 107 apto 04",	700.00,	0.00, 0.00, "apartamento", "02 quartos pequenos, área fundos");
    var an06 = new Anuncio("apto06", "Rua Vila Vidal, 107 apto 05",	700.00,	0.00, 0.00, "apartamento", "02 quartos pequenos, área fundos");
    var an07 = new Anuncio("apto07", "Rua Adelina Maria da Costa, 197 Apto 201", 1000.00, 72.07, 0.00, "apartamento", "02 quartos, garagem e suíte - área 89m2");
    var an08 = new Anuncio("apto08", "Rua Adelina Maria da Costa, 197 Apto 301", 1000.00, 76.08, 0.00, "apartamento", "02 quartos, garagem e suíte - área 88m2");
    var an09 = new Anuncio("apto09", "Rua Adelina Maria da Costa, 197 Apto 401", 1100.00, 134.80, 0.00, "apartamento", "03 quartos, garagem e Suíte - área 145m2");
    var an10 = new Anuncio("apto10", "Rua Carlos Herculano Couto, nº 150 Apto 303", 700.00,	34.77, 218.00, "apartamento", "02 quartos, área, garagem descoberta - área 52m2");
    
    var an11 = new Anuncio("casa01", "Av. Dos Andras, nº 43 Sobrado", 5000.00, 535.46, 0.00, "comercial", "01 salão, 02 banheiros, cozinha, 02 quartinhos - 200m2");
    var an12 = new Anuncio("casa02", "Rua Dom Silvério, nº 59 Sobrado", 2500.00, 241.92, 0.00, "comercial", "01 salão, 01 escritório, 01 banheiro e cozinha - área 80m2");
    var an13 = new Anuncio("casa03", "Rua Barão de São Marcelino, nº 385 Sobrado", 3800.00, 378.52, 0.00, "comercial", "03 salas, 05 quartos, 03 banheiros - área 162m2");
    var an14 = new Anuncio("casa04", "Rua Uruguaiana, nº 94 Sobrado", 5000.00, 255.98, 0.00, "casa comercial","07 quartos, 01 sala, 01 copa, 03 banheiros, vagas para 04 carros - área 159m2");
    
    var an15 = new Anuncio("loja01", "Av. Presidente Costa e Silva, nº 1834", 3700.00, 147.33, 0.00, "loja", "Loja com sobreloja, banheiro e área externa nos fundos - área 90m2");	
    var an16 = new Anuncio("loja02", "Av. Br. do Rio Branco, 1829", 4400.00, 238.63, 106.00, "loja", "Loja SEM mezanino - área 47m2");
    var an17 = new Anuncio("loja03", "Av. Br. do Rio Branco, 1833", 4400.00, 238.35, 106.38, "loja", "Loja com mezanino em metal, banheiro - área 52m2");
    var an18 = new Anuncio("loja04", "Av. Br. do Rio Branco, 1835", 4400.00, 282.85, 148.16, "loja", "Loja com mezanino em metal, banheiro - área 52m2");
    var an19 = new Anuncio("loja05", "Av. Br. do Rio Branco, 1837", 4400.00, 287.79, 148.16, "loja", "Loja com sobreloja, banheiro - área 80m2");
    var an20 = new Anuncio("loja06", "Av. Br. do Rio Branco, 1839", 4400.00, 264.25, 148.16, "loja", "Loja com mezanino em madeira e 01 banheiro - área 52m2");
    var an21 = new Anuncio("loja07", "Rua Afonso Pinto da Mota, nº 30 Lojas 13/14", 2000.00, 276.71, 250.78, "loja", "Loja SEM mezanino - área 41m2");
    var an22 = new Anuncio("loja08", "Rua Batista de Oliveira, nº 401 Lojas 25 - Gal. Bellini", 1800.00, 159.01, 260.00, "loja", "Loja com sobreloja, banheiro - área 50m2");
    var an23 = new Anuncio("loja09", "Santa Cruz Shopping, 1685 Loja 1352", 1600.00, 288.37, 1037.80, "loja", "Loja com sobreloja - área 50m2");
    var an24 = new Anuncio("loja10", "Mister Shoppig, 70 Loja 116", 20000.00, 458.63, 2500.000, "loja", "Loja com sobreloja, banheiro - área 91m2");
    var an25 = new Anuncio("loja11", "Rua José Lourenço, 1384 Loja 02", 1000.00, 123.73, 0.00, "loja", "Loja SEM sobreloja, 02 banheiros - área 49m2");
   
    const arrayAnuncio = [an01, an02, an03, an04, an05, an06, an07, an08, an09, 
                        an10, an11, an12, an13, an14, an15, an16, an17, an18, an19, 
                        an20, an21, an22, an23, an24, an25];*/

    /*function criaLista(){
        let tbody = document.getElementById( 'tbody');
        
        for(let i = 0; i < arrayAnuncio.length; i++){
            let tr = tbody.insertRow();
            let td_end = tr.insertCell() ;
            let td_aluguel = tr.insertCell();
            let td_iptu = tr.insertCell();
            let td_cond = tr.insertCell();
            let td_total = tr.insertCell();
            let tr_desc = tbody.insertRow();
            
            td_end.innerText = arrayAnuncio[i].getEndereco;
            td_aluguel.innerText = arrayAnuncio[i]._aluguel.toFixed(2).replace('.', ',');
            td_iptu.innerText = arrayAnuncio[i]._iptu.toFixed(2).replace('.', ',');
            td_cond.innerText = arrayAnuncio[i]._condominio.toFixed(2).replace('.', ',');
            let somaTotal = arrayAnuncio[i]._aluguel + arrayAnuncio[i]._iptu + arrayAnuncio[i]._condominio;
            td_total.innerText = somaTotal.toFixed(2).replace('.', ',');
            tr_desc.innerText = arrayAnuncio[i]._descricao;
            
            tr.setAttribute('id', `${arrayAnuncio[i]._id}`);
            tr.setAttribute('class', 'dados');
            td_end.setAttribute('class', 'end');
            td_aluguel.setAttribute('class', 'valor');
            td_iptu.setAttribute('class', 'valor');
            td_cond.setAttribute('class', 'valor');
            td_total.setAttribute('class', 'tot');
            tr.setAttribute('onmouseover', 'showDesc(this.id)');
            tr.setAttribute('onmouseout', 'hiddenDesc(this.id)');
            tr_desc.setAttribute('id', `${arrayAnuncio[i]._id}` + '_sub');
            tr_desc.setAttribute('classe', 'dados');
            tr_desc.setAttribute('style', 'opacity: 0; width: 20px');
        }
    }*/
    function showDesc(id){
        let showDesc = document.getElementById(id + '_sub');
        showDesc.style.opacity = "1";
        showDesc.style.color = "#1a5c37";
        showDesc.style.fontSize = "12px";
        showDesc.style.width = "800px";
        showDesc.style.height = "20px";
        showDesc.style.textAlign = "center";
    }
    
    function hiddenDesc(id){
        let showDesc = document.getElementById(id + '_sub');
        showDesc.style.opacity = "0";
    }