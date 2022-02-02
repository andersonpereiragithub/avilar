let tabela = document.getElementById('tabela_1')
console.log(tabela);

let linha = document.createElement('tr');
linha.setAttribute("class", "dados");

let col_1 = document.createElement('td');
col_1.setAttribute("class", "end");

let imagem = document.createElement('img')
imagem.setAttribute('src', 'imagens/info2.png');
imagem.setAttribute('alt', 'informacao');

let descricao = document.createElement('abbr');
descricao.setAttribute("style", "text-decoration: none; cursor: copy;" )
descricao.setAttribute("title", "02 quartos com garagem");
descricao.setAttribute("class", "valor");

descricao.innerHTML = 'Rua Paula Lina, 175/102';

imagem.appendChild(descricao);

col_1.appendChild(descricao);

let col_2 = document.createElement('td');
col_2.setAttribute("class", "valor");
col_2.innerHTML = '1.200,00';

let col_3 = document.createElement('td');
col_3.setAttribute("class", "valor");
col_3.innerHTML = '100,00';

let col_4 = document.createElement('td');
col_4.setAttribute("class", "valor");
col_4.innerHTML = '130,00';

let col_5 = document.createElement('td');
col_5.setAttribute("class", "valor");
col_5.setAttribute("style", "font-size: 12px;");
col_5.innerHTML = '1.330,00';

linha.appendChild(col_1);
linha.appendChild(col_2);
linha.appendChild(col_3);
linha.appendChild(col_4);
linha.appendChild(col_5);

col_1.appendChild(descricao);

tabela.appendChild(linha);