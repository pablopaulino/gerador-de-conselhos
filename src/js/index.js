const botao = document.getElementById('botaoConselho'); 
const areaConselho = document.getElementById('conselho'); 

async function pegarConselho() {
    try {
        const resposta = await fetch('https://api.adviceslip.com/advice');
        const dados = await resposta.json();
        const conselho = dados.slip.advice;
        areaConselho.innerText = conselho;
    } catch (erro) {
        areaConselho.innerText = 'Erro ao buscar conselho. Tente novamente.'; 
    }
}

botao.addEventListener('click', pegarConselho);
