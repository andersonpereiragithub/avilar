
 const arrayAnuncio = [
    {id:'apto01', logradouro: 'Rua Santo Antônio, nº 266/705', aluguel: 700.00, iptu: 114.00, condominio: 310.00, tipo: 'apartamento', descricao: 'Quarto e sala com armários - área 44m2', status: 'indisponivel'},
    {id:"apto02", logradouro: "Rua Chanceler Oswaldo Aranha, nº 180/402", aluguel: 1100.00, iptu: 155.56, condominio: 500.00, tipo: "apartamento", descricao: "03 quartos, garagem, com elevador - área 90m2", status: 'indisponivel'},
    {id:"apto03", logradouro: "Rua Gil Horta, 140", aluguel: 1200.00, iptu: 247.52, condominio: 220.00, tipo:"apartamen", descricao:"03 quartos, garagem, sem elevador - área 112m2", status: 'disponivel'},
    
    {id:"apto05", logradouro: "Rua Vila Vidal, 107 apto 04",	aluguel: 700.00,	iptu: 0.00, condominio: 0.00, tipo:"apartamento", descricao:"02 quartos pequenos, área fundos", status: 'disponivel'},
    {id:"apto06", logradouro: "Rua Vila Vidal, 107 apto 05",	aluguel: 700.00,	iptu: 0.00, condominio: 0.00, tipo:"apartamento", descricao:"02 quartos pequenos, área fundos", status: 'disponivel'},
    {id:"apto07", logradouro: "Rua Adelina Maria da Costa, 197 Apto 201", aluguel: 1000.00, iptu: 72.07, condominio: 0.00, tipo:"apartamento", descricao:"02 quartos, garagem e suíte - área 89m2}", status: 'disponivel'},
    {id:"apto08", logradouro: "Rua Adelina Maria da Costa, 197 Apto 301", aluguel: 1000.00, iptu: 76.08, condominio: 0.00, tipo:"apartamento", descricao:"02 quartos, garagem e suíte - área 88m2", status: 'disponivel'},
    {id:"apto09", logradouro: "Rua Adelina Maria da Costa, 197 Apto 401", aluguel: 1100.00, iptu: 134.80, condominio: 0.00, tipo:"apartamento", descricao:"03 quartos, garagem e Suíte - área 145m2", status: 'disponivel'},
    {id:"apto10", logradouro: "Rua Carlos Herculano Couto, nº 150 Apto 303", aluguel: 700.00,	iptu: 34.77, condominio: 218.00, tipo:"apartamento", descricao:"02 quartos, área, garagem descoberta - área 52m2", status: 'disponivel'},
    
    {id:"casa01", logradouro: "Av. Dos Andras, nº 43 Sobrado", aluguel: 5000.00, iptu: 535.46, condominio: 0.00, tipo:"comercial", descricao:"01 salão, 02 banheiros, cozinha, 02 quartinhos - 200m2", status: 'disponivel'},
    {id:"casa02", logradouro: "Rua Dom Silvério, nº 59 Sobrado", aluguel: 2500.00, iptu: 241.92, condominio: 0.00, tipo:"comercial", descricao:"01 salão, 01 escritório, 01 banheiro e cozinha - área 80m2", status: 'disponivel'},
    {id:"casa03", logradouro: "Rua Barão de São Marcelino, nº 385 Sobrado", aluguel: 3800.00, iptu: 378.52, condominio: 0.00, tipo:"comercial", descricao:"03 salas, 05 quartos, 03 banheiros - área 162m2", status: 'disponivel'},
    {id:"casa04", logradouro: "Rua Uruguaiana, nº 94 Sobrado", aluguel: 5000.00, iptu: 255.98, condominio: 0.00, tipo:"casa comercial",descricao:"07 quartos, 01 sala, 01 copa, 03 banheiros, vagas para 04 carros - área 159m2", status: 'disponivel'},

    {id:"loja01", logradouro: "Av. Presidente Costa e Silva, nº 1834",aluguel:  3700.00,iptu:  147.33, condominio: 0.00, tipo:"loja", descricao:"Loja com sobreloja, banheiro e área externa nos fundos - área 90m2", status: 'disponivel'},	
    {id:"loja02", logradouro: "Av. Br. do Rio Branco, 1829", aluguel: 4400.00, iptu: 238.63, condominio: 106.00, tipo:"loja", descricao:"Loja SEM mezanino - área 47m2", status: 'indisponivel'},
    {id:"loja03", logradouro: "Av. Br. do Rio Branco, 1833", aluguel: 4600.00, iptu: 238.35, condominio: 106.38, tipo:"loja", descricao:"Loja com mezanino em metal, banheiro - área 52m2", status: 'indisponivel'},
    {id:"loja04", logradouro: "Av. Br. do Rio Branco, 1835", aluguel: 5000.00, iptu: 282.85, condominio: 148.16, tipo:"loja", descricao:"Loja com mezanino em metal, banheiro - área 52m2", status: 'indisponivel'},
    {id:"loja05", logradouro: "Av. Br. do Rio Branco, 1837", aluguel: 5500.00, iptu: 287.79, condominio: 148.16, tipo:"loja", descricao:"Loja com sobreloja, banheiro - área 80m2", status: 'indisponivel'},
    {id:"loja06", logradouro: "Av. Br. do Rio Branco, 1839", aluguel: 4600.00, iptu: 264.25, condominio: 148.16, tipo:"loja", descricao:"Loja com mezanino em madeira e 01 banheiro - área 52m2", status: 'indisponivel'},
    {id:"loja07", logradouro: "Rua Afonso Pinto da Mota, nº 30 Lojas 13/14", aluguel: 2000.00, iptu: 276.71, condominio: 250.78, tipo:"loja", descricao:"Loja SEM mezanino - área 41m2", status: 'indisponivel'},
    {id:"loja08", logradouro: "Rua Batista de Oliveira, nº 401 Lojas 25 - Gal. Bellini", aluguel: 1800.00, iptu: 159.01, condominio: 260.00, tipo:"loja", descricao:"Loja com sobreloja, banheiro - área 50m2", status: 'indisponivel'},
    {id:"loja09", logradouro: "Santa Cruz Shopping, 1685 Loja 1352", aluguel: 1600.00, iptu: 288.37, condominio: 1037.80, tipo:"loja", descricao:"Loja com sobreloja - área 50m2", status: 'disponivel'},
    {id:"loja11", logradouro: "Rua José Lourenço, 1384 Loja 02", aluguel: 1000.00, iptu: 123.73, condominio: 0.00, tipo:"loja", descricao:"Loja SEM sobreloja, 02 banheiros - área 49m2", status: 'disponivel'},
    {id:"loja10", logradouro: "Mister Shoppig, 70 Loja 116", aluguel: 20000.00, iptu:  458.63, condominio: 2500.000, tipo:"loja", descricao:"Loja com sobreloja, banheiro - área 91m2", status: 'disponivel'},
    {id:"loja12", logradouro: "Av. Br. do Rio Branco, 2244 Apto 1003", aluguel: 650.00, iptu: 137.00, condominio: 340.00, tipo:"apartamento", descricao:"quarto e sala conjugado com 02 guarda-roupas, banheiro - área 49m2", status: 'disponivel'},

    {id:"sala29", logradouro: "Av. Br. do Rio Branco, 1843 sala 29", aluguel: 1500.00, iptu: 223.00, condominio: 211.00, tipo:"sala", descricao:"02 banheiros, área 60m2", status: 'disponivel'},
    {id:"sala26", logradouro: "Av. Br. do Rio Branco, 1843 sala 26", aluguel: 1200.00, iptu: 157.40, condominio: 193.43, tipo:"sala", descricao:"01 banheiro, área 30m2", status: 'disponivel'},
    {id:"sala25", logradouro: "Av. Br. do Rio Branco, 1843 sala 25", aluguel: 1000.00, iptu: 98.64, condominio: 148.16, tipo:"sala", descricao:"01 banheiro, área 30m2", status: 'disponivel'},
    {id:"sala24", logradouro: "Av. Br. do Rio Branco, 1843 sala 24", aluguel: 1000.00, iptu: 103.45, condominio: 148.16, tipo:"sala", descricao:"01 banheiro, área 32m2", status: 'disponivel'},
    {id:"sala23", logradouro: "Av. Br. do Rio Branco, 1843 sala 23", aluguel: 1000.00, iptu: 103.45, condominio: 148.16, tipo:"sala", descricao:"01 banheiro, área 32m2", status: 'disponivel'},
    {id:"sala15", logradouro: "Av. Br. do Rio Branco, 1843 sala 15", aluguel: 1000.00, iptu: 66.50, condominio: 106.38, tipo:"sala", descricao:"01 banheiro, área 26m2", status: 'disponivel'},
    {id:"sala13", logradouro: "Av. Br. do Rio Branco, 1843 sala 13", aluguel: 1000.00, iptu: 72.00, condominio: 106.38, tipo:"sala", descricao:"01 banheiro, área 32m2", status: 'disponivel'},
    {id:"sala07", logradouro: "Av. Br. do Rio Branco, 1843 sala 07", aluguel: 1000.00, iptu: 130.92, condominio: 175.84, tipo:"sala", descricao:"01 banheiro, área 32m2", status: 'disponivel'},

    {id:"apto04", logradouro: "Rua Luz Interior, 0",	aluguel: 5000.00, iptu: 550.00, condominio: 0.00, tipo:"terreno", descricao:"Terreno 644m2", status: 'indisponivel'}
]


function criaLista(){
    let tbody = document.getElementById( 'tbody');
    
    const insertTable = ({id, logradouro, aluguel, iptu, condominio, tipo, descricao, status}) =>{
               
        let tr = tbody.insertRow();

        let td_end = tr.insertCell() ;
        let td_aluguel = tr.insertCell();
        let td_iptu = tr.insertCell();
        let td_cond = tr.insertCell();
        let td_total = tr.insertCell();
        console.log(td_end.innerText)
        let tr_desc = tbody.insertRow();
        let somaTotal = aluguel + iptu + condominio

        td_end.innerText = logradouro
        td_aluguel.innerText = aluguel.toFixed(2).replace('.', ',');
        td_iptu.innerText = iptu.toFixed(2).replace('.', ',');
        td_cond.innerText = condominio.toFixed(2).replace('.', ',');
        td_total.innerText = somaTotal.toFixed(2).replace('.', ',');
        tr_desc.innerText = descricao
        
        tr.setAttribute('id', `${id}`);
        tr.setAttribute('class', 'dados');
        td_end.setAttribute('class', 'end');
        td_aluguel.setAttribute('class', 'valor');
        td_iptu.setAttribute('class', 'valor');
        td_cond.setAttribute('class', 'valor');
        td_total.setAttribute('class', 'tot');
        tr.setAttribute('onmouseover', 'showDesc(this.id)');
        tr.setAttribute('onmouseout', 'hiddenDesc(this.id)');
        tr_desc.setAttribute('id', `${id}_sub`);
        tr_desc.setAttribute('classe', 'dados');
        tr_desc.setAttribute('style', 'opacity: 0; width: 20px');

        const isUnavailable = status === 'indisponivel'
        console.log(isUnavailable)
        if(isUnavailable) {
            tr.style.backgroundColor = '#efffd5'
        }
    }
    arrayAnuncio.forEach(insertTable)
}

function showDesc(id){
    let showDesc = document.getElementById(id + '_sub');
    showDesc.style.opacity = "1";
    showDesc.style.color = "#1a5c37";
    showDesc.style.fontSize = "12px";
    showDesc.style.width = "800px";
    showDesc.style.height = "20px";
    showDesc.style.textAlign = "left";
}

function hiddenDesc(id){
    let showDesc = document.getElementById(id + '_sub');
    showDesc.style.opacity = "0";
}

const body = document.querySelector('body');

body.addEventListener('loadstart', criaLista());