  /* CADASTRO PARA INSERIR DADOS PELO FORMULÁRIO  */

  class Anuncio{
  constructor(){
      this._id = 1;
      this._end = '';
      this._aluguel = 0.00;
      this._iptu = 0.00;
      this._condominio = 0.00;
      this._tipo = '';
      this.arrayAnuncios = [];
  }

  lerDadosXXX(){
      let anuncio = {}

      anuncio._id = this._id;
      anuncio._end = document.getElementById('id_end').value;
      anuncio._aluguel = document.getElementById('id_aluguel').value;
      anuncio._iptu = document.getElementById('id_iptu').value;
      anuncio._condominio = document.getElementById('id_cond').value;
      anuncio._tipo = document.getElementById('id_tipo').value;

      return anuncio;
  }

  validaCampos(anuncio){
      let msg = '';

      if(anuncio._end == ''){
          msg += '- Informe o Endereço do anúncio \n';
      }
      
      if(anuncio._aluguel == ''){
          msg += '- Informe o Valor do Aluguel \n';
      }

      if(msg != ''){
          alert(msg);
          return false;
      }

      return true;
  }

  listaTabela(){
      console.log('teste');
      let tbody = document.getElementById('tbody');
      tbody.innerText = '';

      for(let i = 0; i < this.arrayAnuncios.length; i++){
          let tr = tbody.insertRow();

          let td_id = tr.insertCell();
          let td_end = tr.insertCell();
          let td_aluguel = tr.insertCell();
          let td_iptu = tr.insertCell();
          let td_condominio = tr.insertCell();
          let td_tipo = tr.insertCell();
      
          td_id.innerText = this.arrayAnuncios[i]._id;
          td_end.innerText = this.arrayAnuncios[i]._end;
          td_aluguel.innerText = this.arrayAnuncios[i]._aluguel.replace('.', ',');
          td_iptu.innerText = this.arrayAnuncios[i]._iptu.replace('.', ',');
          td_condominio.innerText = this.arrayAnuncios[i]._condominio.replace('.', ',');
          td_tipo.innerText = this.arrayAnuncios[i]._tipo;
      }
  }
  calculataTotal(){
      var soma = this._aluguel + this._iptu + this._condominio;
      return soma;
  }


  adicionar(anuncio){
      this.arrayAnuncios.push(anuncio);
      this._id++;
  }

  salvar(){
      let anuncio = this.lerDados();
      
      if(this.validaCampos(anuncio)){
          this.adicionar(anuncio);
      }
      
      this.listaTabela();
  }

  cancelar(){
      alert("Deletou!")
  }


  }
  var anuncio = new Anuncio();