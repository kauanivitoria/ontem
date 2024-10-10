const url = 'https://raw.githubusercontent.com/kauanivitoria/json/refs/heads/main/dados.json'; 

async function vizualizarInformacoes() {
    const res = await fetch(url);
    const dados = await res.json();

    const marcaMaisUsada = dados[0].marca;
    const numeroDeUsuarios = (dados[0].usuarios) / 1e6;
    const paises = dados[0].paises;

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = `De acordo com várias pesquisas em 2023, a marca de roupas mais usada foi <span>${marcaMaisUsada}</span>, com aproximadamente <span>${numeroDeUsuarios} milhões</span> de usuários espalhados pelos seguintes países: <span>${paises}</span>.`;

    const caixa = document.getElementById('caixa-grafico');
    caixa.appendChild(paragrafo);
}

vizualizarInformacoes();
