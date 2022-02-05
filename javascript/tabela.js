let tabela = document.getElementById('tabela_1')

/* Imagem para exibir INFORMAÇÕES DO IMÓVEL */
let imagem = document.createElement('img')
imagem.setAttribute('src', 'imagens/info2.png');
imagem.setAttribute('alt', 'informacao');

/* Cria uma Linha */
let linha = document.createElement('tr');
linha.setAttribute("class", "dados");

let descricao = document.createElement('abbr');
descricao.setAttribute("style", "text-decoration: none; cursor: copy;" )
descricao.setAttribute("title", "02 quartos com garagem");

/* Coluna INFORMAÇÃO */
let col_0 = document.createElement('td');
descricao.appendChild(imagem);
col_0.appendChild(descricao)
linha.appendChild(col_0);

/* Coluna ENDEREÇO */
let col_1 = document.createElement('td');
col_1.setAttribute("class", "end");
col_1.innerText = 'Rua Paula Lima, nº 175/102';
linha.appendChild(col_1);

/* Coluna ALUGUEL */
let col_2 = document.createElement('td');
col_2.setAttribute("class", "valor");
col_2.innerHTML = '1.200,00';

/* Coluna IPTU */
let col_3 = document.createElement('td');
col_3.setAttribute("class", "valor");
col_3.innerHTML = '100,00';

/* Coluna CONDOMÍNIO */
let col_4 = document.createElement('td');
col_4.setAttribute("class", "valor");
col_4.innerHTML = '130,00';

/* Coluna TOTAL */
let col_5 = document.createElement('td');
col_5.setAttribute("class", "valor");
col_5.setAttribute("style", "font-size: 12px;");
col_5.innerHTML = '1.330,00';

/* Adiciona as Colunas na linha */
linha.appendChild(col_1);
linha.appendChild(col_2);
linha.appendChild(col_3);
linha.appendChild(col_4);
linha.appendChild(col_5);

/* Adiciona a Linha na Tabela*/
tabela.appendChild(linha);