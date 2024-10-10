import { pegarCSS, configuraEixo } from "./comum.js";

async function criarGraficoBarra() {
    const url = 'https://raw.githubusercontent.com/kauanivitoria/json/refs/heads/main/grafico_barra.json'; 
    const res = await fetch(url);
    const dados = await res.json();
    const marcas = Object.keys(dados);
    const usuarios = Object.values(dados);

    const data = [
        {
            x: marcas,
            y: usuarios,
            type: 'bar',
            marker: {
                color: pegarCSS('--cinza')
            }
        }
    ];

    const layout = {
        plot_bgcolor: pegarCSS('--branco'),
        paper_bgcolor: pegarCSS('--laranja'),
        title: {
            text: 'As marcas de roupas mais usadas no mundo',
            font: {
                color: pegarCSS('--branco'),
                family: pegarCSS('--fonte-titulo'),
                size: 31
            }
        },
        xaxis: {
            tickfont: configuraEixo,
            tickangle: 45
        },
        yaxis: {
            tickfont: configuraEixo
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criarGraficoBarra();
