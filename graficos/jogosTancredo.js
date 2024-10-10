import { pegarCSS } from "./comum.js";

async function graficosMarcas() {
    const url = 'https://script.google.com/macros/u/1/s/AKfycbztxm4OzqueSi-Jimakmld06SaI5QM3tyKEx27LtkMlQxxef_cBSYF609QyaBb0apBc/exec'; 
    const res = await fetch(url);
    const dados = await res.json();

    const marcasUsadas = dados.map(marca => marca.marca);

    const contagemMarcas = marcasUsadas.reduce((acc, marca) => {
        acc[marca] = (acc[marca] || 0) + 1;
        return acc;
    }, {});

    const valores = Object.values(contagemMarcas);
    const etiquetas = Object.keys(contagemMarcas);

    const data = [
        {
            values: valores,
            labels: etiquetas,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];

    const layout = {
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    };

    const pesquisaTitulo = document.createElement('h3');
    pesquisaTitulo.classList.add('caixa-grafico__titulo');
    pesquisaTitulo.innerHTML = `As marcas de roupas mais usadas no mundo em <span>2023</span>`;

    const grafico = document.createElement('div');
    grafico.className = 'grafico-disco';
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo);
    document.getElementById('caixa-grafico').appendChild(grafico);

    const config = {
        responsive: true,
        displayModeBar: false
    };
    Plotly.newPlot(grafico, data, layout, config);

    const caixa = document.getElementById('caixa-grafico');
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = `Nota-se que a marca mais usada no mundo em <span>2023</span> foi <span>Nike</span>, com mais de 300 milhões de usuários. No entanto, marcas como <span>Adidas</span> e <span>Zara</span> também tiveram destaque, ficando em segundo e terceiro lugar respectivamente.`;
    caixa.appendChild(paragrafo);
}

graficosMarcas();
