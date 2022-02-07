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

    set setEdereco(endereco){
        this.endereco = endereco;
    }
    get getEndereco(){
        return this.endereco;
    }

    set setAlugue(aluguel){
        this.aluguel = aluguel;
    }
    get getAluguel(){
        return this.aluguel;
    }

    set setIptu(iptu){
        this.iptu = iptu;
    }
    get getIptu(){
        return this.iptu;
    }

    set setCondominio(condominio){
        this.condominio = condominio;
    }
    get getCondominio(){
        return this.condominio;
    }

    set setTotal(){
        this.total = this.getAluguel + this.getIptu + this.getCondominio;
    }
    get getTotal(){
        return this.total;
    }
 
    set setTipo(tipo){
        this.tipo = tipo;
    }
    get getTipo(){
        return this.tipo;
    }

    set setDescricao(descricao){
        this.descricao = descricao;
    }
    get getDescricao(){
        return this.descricao;
    }
}
var an01 = new Anuncio("apto01", "Rua Santo Antônio, nº 266/705",	700,00,	114,00,	310,00,	1.124,00, "apartamento", "Quarto e sala com armários - área 44m2");
var an02 = new Anuncio("apto02", "Rua Chanceler Oswaldo Aranha, nº 180/402", 1.100,00, 155,56, 500,00, 1.750,00, "apartamento", "03 quartos, garagem, com elevador - área 90m2");
var an03 = new Anuncio("apto03", "Rua Gil Horta, 90",	1.200,00,	247,52,	220,00, 1.670,00, "apartamento", "03 quartos, garagem, sem elevador - área 112m2");
var an04 = new Anuncio("apto04", "Rua Luz Interior, 0",	5.000,00, 550,00,	0,00,	5.550,00, "terreno", "Terreno 644m2");
var an05 = new Anuncio("apto05", "Rua Vila Vidal, 107 apto 04",	700,00,	0,00,	"Divisão",	750,00, "apartamento", "02 quartos pequenos, área fundos");
var an06 = new Anuncio("apto06", "Rua Vila Vidal, 107 apto 05",	700,00,	0,00,	"Divisão",	750,00, "apartamento", "02 quartos pequenos, área fundos");
var an07 = new Anuncio("apto07", "Rua Adelina Maria da Costa, 197 Apto 201",	1.000,00,	72,07,	"Divisão",	1.072,00, "apartamento", "02 quartos, garagem e suíte - área 89m2");
var an08 = new Anuncio("apto08", "Rua Adelina Maria da Costa, 197 Apto 301",	1.000,00,	76,08,	"Divisão",	1.076,00, "apartamento", "02 quartos, garagem e suíte - área 88m2");
var an09 = new Anuncio("apto09", "Rua Adelina Maria da Costa, 197 Apto 401",	1.100,00,	134,80,	"Divisão",	1.235,00, "apartamento", "03 quartos, garagem e Suíte - área 145m2");
var an10 = new Anuncio("apto10", "Rua Carlos Herculano Couto, nº 150 Apto 303", 700,00,	34,77,	218,00,	955,00, "apartamento", "02 quartos, área, garagem descoberta - área 52m2");

var an11 = new Anuncio("casa01", "Av. Dos Andras, nº 43 Sobrado",	5.000,00, 535,46, "Divisão", 5.540,00, "casa comercial", "01 salão, 02 banheiros, cozinha, 02 quartinhos - 200m2");
var an12 = new Anuncio("casa02", "Rua Dom Silvério, nº 59 Sobrado", 2.500,00, 241,92, "---------", 2.742,00, "casa comercial", "01 salão, 01 escritório, 01 banheiro e cozinha - área 80m2");
var an13 = new Anuncio("casa03", "Rua Barão de São Marcelino, nº 385 Sobrado", 3.800,00, 378,52, "---------",	4.180,00, "casa comercial", "03 salas, 05 quartos, 03 banheiros - área 162m2");
var an14 = new Anuncio("casa04", "Rua Uruguaiana, nº 94 Sobrado",	5.000,00, 255,98, "---------", 5.256,00, "casa comercial","07 quartos, 01 sala, 01 copa, 03 banheiros, vagas para 04 carros - área 159m2");

var an15 = new Anuncio("loja01", "Av. Presidente Costa e Silva, nº 1834", 3.700,00,	147,33,	0,00, "loja", "Loja com sobreloja, banheiro e área externa nos fundos - área 90m2");	
var an16 = new Anuncio("loja02", "Av. Br. do Rio Branco, 1829", 4.400,00, 238,63, 106,00, 4.750,00, "loja", "Loja SEM mezanino - área 47m2");
var an17 = new Anuncio("loja03", "Av. Br. do Rio Branco, 1833", 4.400,00, 238,35, 106,38, 4.750,00, "loja", "Loja com mezanino em metal, banheiro - área 52m2");
var an18 = new Anuncio("loja04", "Av. Br. do Rio Branco, 1835", 4.400,00, 282,85, 148,16, 4.830,00, "loja", "Loja com mezanino em metal, banheiro - área 52m2");
var an19 = new Anuncio("loja05", "Av. Br. do Rio Branco, 1837", 4.400,00, 287,79, 148,16, 4.848,00, "loja", "Loja com sobreloja, banheiro - área 80m2");
var an20 = new Anuncio("loja06", "Av. Br. do Rio Branco, 1839", 4.400,00, 264,25, 148,16, 4.820,00, "loja", "Loja com mezanino em madeira e 01 banheiro - área 52m2");
var an21 = new Anuncio("loja07", "Rua Afonso Pinto da Mota, nº 30 Lojas 13/14", 2.000,00, 276,71, 250,78, 2.530,00, "loja", "Loja SEM mezanino - área 41m2");
var an22 = new Anuncio("loja08", "Rua Batista de Oliveira, nº 401 Lojas 25 - Gal. Bellini", 1.800,00, 159,01, 260,00, 2.220,00, "loja", "Loja com sobreloja, banheiro - área 50m2");
var an23 = new Anuncio("loja09", "Santa Cruz Shopping, 1685 Loja 1352", 1.600,00, 288,37, 1037,80, 2.930,00, "loja", "Loja com sobreloja - área 50m2");
var an24 = new Anuncio("loja10", "Mister Shoppig, 70 Loja 116", 20.000,00, 458,63, 2.500,00, 22.960,00, "loja", "Loja com sobreloja, banheiro - área 91m2");
var an25 = new Anuncio("loja11", "Rua José Lourenço, 1384 Loja 02", 1.000,00, 123,73, "--------", "loja", "Loja SEM sobreloja, 02 banheiros - área 49m2");


var arrayAnuncio = [an02, an03, an04, an01, an05, an06, an07, an08, an09, an10,
                    an11, an12, an13, an14, an15, an16, an17, an18, an19, an20, 
                    an21, an22, an23, an24, an25]