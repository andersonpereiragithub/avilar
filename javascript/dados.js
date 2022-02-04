class Anuncio{
 constructor(id, tipo, endereco, aluguel, iptu, condominio){
    this._id = id;
    this.tipo = tipo;
    this._endereco = endereco;
    this._aluguel = aluguel; 
    this._iptu = iptu;
    this._condominio = condominio; 
     
 }   
 get total(){
     return this.calculaTotal();
 }

 calculaTotal(){
     return this.aluguel + this.iptu + this.condominio;
 }
}

function inserirNovo(){
    var end = document.getElementById("endereco");
    
    var aluguel = document.getElementById("numAluguel");
    var iptu = document.getElementById("numIptu");
    var condominio = document.getElementById("numCond");
}