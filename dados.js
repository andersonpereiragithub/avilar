class Anuncio{
 constructor(id, endereco, aluguel, iptu, condominio){
    this._id = id;
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