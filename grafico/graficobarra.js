import { pegarCss, configuraEixo } from "./comum.js"

async function criarGraficoBarra() {
    const url = 'https://raw.githubusercontent.com/SNOWFORSE/json/refs/heads/main/grafico.json';
    const res = await fetch(url);
    const dados = await res.json();
    const celular = Object.keys(dados)
    const porcentagem = Object.values(dados)

    const data = [
        {
            x: celular,
            y: porcentagem,
            type: 'bar',
            marker:{
                color: pegarCss('--verde-escuro')
            }
        }
    ]

    const layout = {
        plot_bgcolor: pegarCss('--sage'),
        paper_bgcolor: pegarCss('--sage'),
        title:{
            text: 'Os Celulares Com Melhor Custo Beneficio',
            font: {
                color: pegarCss('--verde-musgo'),
                family: pegarCss('--fonte-titulo'),
                size: 50
            }
        },
        xaxis: {
            tickfont: configuraEixo,
            tickangle: 20        },
        yaxis: {
            tickfont: configuraEixo
        }
    }
    
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);
    Plotly.newPlot(grafico, data,layout);
}

criarGraficoBarra();
