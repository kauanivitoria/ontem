import { pegarCSS } from "./comum.js";

async function criaGraficoPizza() {
    const url = 'https://raw.githubusercontent.com/kauanivitoria/json/refs/heads/main/graficoPizza'; 
    const res = await fetch(url);
    const dados = await res.json();
    const marcas = Object.keys(dados);
    const usuarios = Object.values(dados);

    const data = [
        {
            values: usuarios,
            labels: marcas,
            type: 'pie',
            textinfo: 'label + percent'
        }
    ];

    const layout = {
        height: 400,
        width: 600,
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    };

    const marcasTitulo = document.createElement('h3');
    marcasTitulo.classList.add('caixa-grafico__titulo');
    marcasTitulo.innerHTML = `As <span>marcas de roupas</span> mais usadas em 2023`;

    const grafico = document.createElement('div');
    grafico.className = 'grafico-disco';
    document.getElementById('caixa-grafico').appendChild(marcasTitulo);
    document.getElementById('caixa-grafico').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criaGraficoPizza();
