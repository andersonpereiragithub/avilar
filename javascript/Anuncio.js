export default class Anuncio{
        constructor(id, endereco, aluguel, iptu, condominio, tipo, descricao){
            this._id = id;
            this._endereco = endereco;
            this._aluguel = aluguel;
            this._iptu = iptu;
            this._condominio = condominio;
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
    
        set setTotal(){
            this._total = this.getAluguel + this.getIptu + this.getCondominio;
        }
        get getTotal(){
            return this._total;
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