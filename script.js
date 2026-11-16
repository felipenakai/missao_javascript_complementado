const questoesPorNivel = [
    {
        nome: "Nível básico",
        categoria: "RECONHECIMENTO DE CONCEITOS",
        questoes: [
            {
                pergunta: "Qual operador verifica se dois valores são iguais e também possuem o mesmo tipo?",
                alternativas: ["=", "==", "===", "!="],
                correta: 2,
                explicacao: "O operador === compara o valor e o tipo dos dados. Por isso, é chamado de igualdade estrita."
            },
            {
                pergunta: "Qual palavra-chave cria uma variável cujo valor pode ser alterado?",
                alternativas: ["const", "let", "function", "return"],
                correta: 1,
                explicacao: "let declara uma variável que pode receber outro valor durante a execução do programa."
            },
            {
                pergunta: "Qual destes valores representa um dado booleano verdadeiro?",
                alternativas: ['"true"', "0", "true", '"false"'],
                correta: 2,
                explicacao: "true, sem aspas, é um valor do tipo boolean. Com aspas, seria um texto (string)."
            },
            {
                pergunta: "Qual comando é usado para mostrar uma mensagem no console do navegador?",
                alternativas: ["print()", "console.log()", "alert.log()", "document.writeLog()"],
                correta: 1,
                explicacao: "console.log() envia informações para o console, muito usado para testar e acompanhar o código."
            }
        ]
    },
    {
        nome: "Nível intermediário",
        categoria: "APLICAÇÃO DO CONHECIMENTO",
        questoes: [
            {
                pergunta: "Observe o código: let idade = 16; if (idade >= 18) { console.log('Maior'); } else { console.log('Menor'); }. O que será exibido?",
                alternativas: ["Maior", "Menor", "16", "Nada será exibido"],
                correta: 1,
                explicacao: "Como 16 não é maior nem igual a 18, a condição é falsa e o bloco else é executado."
            },
            {
                pergunta: "Qual será a saída deste código? let pontos = 7; if (pontos > 5) { console.log('Passou'); } else { console.log('Tente novamente'); }",
                alternativas: ["Tente novamente", "7", "Passou", "Erro de sintaxe"],
                correta: 2,
                explicacao: "A condição 7 > 5 é verdadeira. Portanto, o programa executa o primeiro bloco e mostra 'Passou'."
            },
            {
                pergunta: "Uma loja dá frete grátis para compras de R$ 100 ou mais. Qual condição representa corretamente essa regra?",
                alternativas: ["if (total < 100)", "if (total === 100)", "if (total >= 100)", "if (total != 100)"],
                correta: 2,
                explicacao: "O operador >= inclui tanto valores iguais a 100 quanto valores maiores que 100."
            },
            {
                pergunta: "Considere: let temperatura = 28; if (temperatura > 30) { console.log('Quente'); } else { console.log('Agradável'); }. Qual mensagem aparece?",
                alternativas: ["Quente", "Agradável", "28", "As duas mensagens"],
                correta: 1,
                explicacao: "28 não é maior que 30. Assim, a condição é falsa e o bloco else mostra 'Agradável'."
            }
        ]
    },
    {
        nome: "Nível avançado",
        categoria: "ANÁLISE E IDENTIFICAÇÃO DE ERROS",
        questoes: [
            {
                pergunta: "Analise: let numero = 1; while (numero <= 5) { if (numero === 3) { console.log('Três'); } numero++; }. Quantas vezes o laço é executado?",
                alternativas: ["3 vezes", "4 vezes", "5 vezes", "6 vezes"],
                correta: 2,
                explicacao: "O while executa com numero igual a 1, 2, 3, 4 e 5. O if só altera o que é exibido, não interrompe o laço."
            },
            {
                pergunta: "Um programador escreveu: let n = 1; while (n <= 4) { console.log(n); }. Qual é o principal problema desse código?",
                alternativas: ["A variável n não foi declarada", "A condição nunca pode ser verdadeira", "Falta atualizar n dentro do laço", "console.log não funciona em while"],
                correta: 2,
                explicacao: "Como n nunca é incrementado, continua valendo 1 e a condição n <= 4 permanece verdadeira. O laço não termina."
            },
            {
                pergunta: "Observe: for (let i = 1; i <= 5; i++) { if (i % 2 === 0) { console.log(i); } }. Quais valores são exibidos?",
                alternativas: ["1, 3 e 5", "2 e 4", "1, 2, 3, 4 e 5", "Nenhum valor"],
                correta: 1,
                explicacao: "O operador % calcula o resto da divisão. Números pares têm resto 0 na divisão por 2, então aparecem 2 e 4."
            },
            {
                pergunta: "Um código deve mostrar 'Aprovado' quando a nota for pelo menos 7. Qual alternativa corrige a condição escrita incorretamente como if (nota < 7)?",
                alternativas: ["if (nota <= 7)", "if (nota === 7)", "if (nota >= 7)", "if (nota != 7)"],
                correta: 2,
                explicacao: "Pelo menos 7 inclui 7 e todos os valores maiores. O operador >= representa exatamente essa condição."
            }
        ]
    }
];

const nomesConquistas = [
    { nome: "Primeiros Passos", descricao: "Nível básico concluído", simbolo: "✦" },
    { nome: "Explorador do Conhecimento", descricao: "Nível intermediário concluído", simbolo: "✧" },
    { nome: "Missão Cumprida", descricao: "Nível avançado concluído", simbolo: "🏆" }
];

// Conteúdos de reforço vinculados a cada questão original.
const reforcos = {
    "0-0": { tema: "Operadores de comparação", dica: "Use === quando precisar comparar valor e tipo ao mesmo tempo. Diferencie = (atribuição), == (igualdade com conversão) e === (igualdade estrita).", pergunta: "Qual é o resultado de (5 === \"5\")?", opcoes: ["true", "false"], correta: 1, explicacao: "É false porque um valor é number e o outro é string." },
    "0-1": { tema: "Declaração de variáveis", dica: "let permite reatribuir um valor. const impede reatribuição. Escolha a palavra-chave conforme a necessidade de mudar o valor.", pergunta: "Qual declaração permite trocar o valor depois?", opcoes: ["const total = 10", "let total = 10"], correta: 1, explicacao: "let permite atribuir um novo valor à variável." },
    "0-2": { tema: "Tipo boolean", dica: "Boolean possui somente true e false. Sem aspas são valores lógicos; entre aspas são textos (strings).", pergunta: "Qual alternativa é um boolean verdadeiro?", opcoes: ["\"true\"", "true"], correta: 1, explicacao: "Sem aspas, true é um boolean." },
    "0-3": { tema: "Saída no console", dica: "console.log() mostra valores no console do navegador. Abra as ferramentas do desenvolvedor (F12) e selecione Console para visualizar.", pergunta: "Como exibir a variável nome no console?", opcoes: ["console.log(nome)", "print(nome)"], correta: 0, explicacao: "console.log() é o método usado no JavaScript para registrar a saída no console." },
    "1-0": { tema: "Condições if/else e comparação", dica: "Avalie primeiro a expressão dentro dos parênteses. Se for true, executa o bloco if; se for false, executa o else.", pergunta: "Com let idade = 20, idade >= 18 é...", opcoes: ["true", "false"], correta: 0, explicacao: "20 é maior que 18, então a condição é verdadeira." },
    "1-1": { tema: "Previsão de saída do if/else", dica: "Substitua as variáveis pelos valores e resolva a comparação antes de decidir qual bloco será executado.", pergunta: "Se pontos = 3, pontos > 5 é...", opcoes: ["true", "false"], correta: 1, explicacao: "3 não é maior que 5." },
    "1-2": { tema: "Operadores >= e <=", dica: ">= significa maior ou igual; <= significa menor ou igual. A igualdade também está incluída.", pergunta: "Qual condição aceita valores iguais ou maiores que 10?", opcoes: ["valor > 10", "valor >= 10"], correta: 1, explicacao: ">= inclui o próprio 10 e todos os valores acima dele." },
    "1-3": { tema: "Condições e limites", dica: "Leia com atenção se a condição usa > ou >=. O primeiro não inclui igualdade; o segundo inclui.", pergunta: "Com temperatura = 30, temperatura > 30 é...", opcoes: ["true", "false"], correta: 1, explicacao: "30 não é maior que 30; é igual. Portanto, false." },
    "2-0": { tema: "Funcionamento do while", dica: "O while repete enquanto a condição for verdadeira. A atualização da variável pode fazer a condição se tornar falsa e encerrar o laço.", pergunta: "Se x começa em 1 e recebe x++ a cada volta, ele aumenta?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "x++ incrementa a variável em uma unidade." },
    "2-1": { tema: "Laços infinitos", dica: "Confira se alguma instrução dentro do while altera a variável usada na condição. Sem atualização, a condição pode permanecer verdadeira para sempre.", pergunta: "O que evita um while infinito quando n <= 4?", opcoes: ["Atualizar n dentro do laço", "Retirar o console.log"], correta: 0, explicacao: "Atualizar n permite que a condição eventualmente se torne falsa." },
    "2-2": { tema: "Operador módulo (%) e laço for", dica: "% retorna o resto da divisão. Para testar se um número é par, use numero % 2 === 0. O for reúne inicialização, condição e atualização.", pergunta: "Quanto vale 7 % 2?", opcoes: ["0", "1"], correta: 1, explicacao: "7 dividido por 2 deixa resto 1." },
    "2-3": { tema: "Operadores relacionais", dica: "A expressão 'pelo menos 7' inclui o 7. Traduza expressões: pelo menos = >=; no máximo = <=.", pergunta: "'No mínimo 5' pode ser escrito como...", opcoes: ["nota >= 5", "nota < 5"], correta: 0, explicacao: ">= representa 5 ou qualquer valor maior." }
};

const telaLogin = document.getElementById("tela-login");
const telaInicial = document.getElementById("tela-inicial");
const telaJogo = document.getElementById("tela-jogo");
const telaResultado = document.getElementById("tela-resultado");
const nomeNivel = document.getElementById("nome-nivel");
const progresso = document.getElementById("progresso");
const barra = document.getElementById("barra");
const pontuacao = document.getElementById("pontuacao");
const acertosElemento = document.getElementById("acertos");
const categoria = document.getElementById("categoria");
const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const feedback = document.getElementById("feedback");
const btnProxima = document.getElementById("btn-proxima");
const listaConquistas = document.getElementById("lista-conquistas");
const reforcoElemento = document.getElementById("reforco");
const CHAVE_RANKING = "missaoJavaScriptRanking_v1";
let jogadorAtual = localStorage.getItem("missaoJavaScriptJogador_v1") || "";

let nivelAtual = 0;
let indiceQuestao = 0;
let acertosNoNivel = 0;
let pontosTotais = 0;
let pontosDaTentativa = 0;
let respondeu = false;
let conquistas = [];

document.getElementById("form-login").addEventListener("submit", entrarComoJogador);
document.getElementById("btn-trocar-jogador").addEventListener("click", () => { mostrarTela(telaLogin); atualizarRanking(); });
document.getElementById("btn-iniciar").addEventListener("click", iniciarJogo);
document.getElementById("btn-reiniciar").addEventListener("click", reiniciarJogo);
btnProxima.addEventListener("click", avancarQuestao);

function mostrarTela(tela) {
    telaLogin.classList.add("escondido");
    telaInicial.classList.add("escondido");
    telaJogo.classList.add("escondido");
    telaResultado.classList.add("escondido");
    tela.classList.remove("escondido");
}

function entrarComoJogador(evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome-jogador").value.trim().replace(/\s+/g, " ");
    if (nome.length < 2) { alert("Digite um nome com pelo menos 2 caracteres."); return; }
    jogadorAtual = nome.slice(0, 18);
    localStorage.setItem("missaoJavaScriptJogador_v1", jogadorAtual);
    document.getElementById("jogador-atual").textContent = jogadorAtual;
    atualizarRanking();
    mostrarTela(telaInicial);
}

function lerRanking() {
    try { return JSON.parse(localStorage.getItem(CHAVE_RANKING)) || []; }
    catch { return []; }
}

function atualizarRanking() {
    const ranking = lerRanking().sort((a, b) => b.pontos - a.pontos || a.data - b.data).slice(0, 10);
    ["ranking-login", "ranking-home", "ranking-final"].forEach(id => {
        const lista = document.getElementById(id);
        if (!lista) return;
        lista.innerHTML = "";
        if (!ranking.length) { const li = document.createElement("li"); li.textContent = "Ainda não há pontuações registradas."; lista.appendChild(li); return; }
        ranking.forEach((item, indice) => {
            const li = document.createElement("li");
            li.textContent = `${indice + 1}º — ${item.nome}: ${item.pontos} pontos`;
            lista.appendChild(li);
        });
    });
}

function salvarPontuacao() {
    const ranking = lerRanking();
    ranking.push({ nome: jogadorAtual || "Jogador", pontos: pontosTotais, data: Date.now() });
    ranking.sort((a, b) => b.pontos - a.pontos || a.data - b.data);
    localStorage.setItem(CHAVE_RANKING, JSON.stringify(ranking.slice(0, 50)));
    atualizarRanking();
    document.getElementById("mensagem-recorde").textContent = `Pontuação de ${jogadorAtual} registrada no ranking local!`;
}

function iniciarJogo() {
    nivelAtual = 0;
    pontosTotais = 0;
    conquistas = [];
    prepararNivel();
    atualizarConquistas();
    mostrarTela(telaJogo);
}

function prepararNivel() {
    indiceQuestao = 0;
    acertosNoNivel = 0;
    pontosDaTentativa = 0;
    mostrarQuestao();
}

function mostrarQuestao() {
    const nivel = questoesPorNivel[nivelAtual];
    const questaoAtual = nivel.questoes[indiceQuestao];

    respondeu = false;
    nomeNivel.textContent = nivel.nome;
    progresso.textContent = `Questão ${indiceQuestao + 1} de 4`;
    categoria.textContent = nivel.categoria;
    pergunta.textContent = questaoAtual.pergunta;
    pontuacao.textContent = pontosTotais;
    acertosElemento.textContent = acertosNoNivel;
    barra.style.width = `${(indiceQuestao / 4) * 100}%`;

    alternativas.innerHTML = "";
    feedback.className = "feedback escondido";
    feedback.textContent = "";
    reforcoElemento.className = "reforco escondido";
    reforcoElemento.innerHTML = "";
    btnProxima.classList.add("escondido");

    questaoAtual.alternativas.forEach((texto, indice) => {
        const botao = document.createElement("button");
        botao.className = "alternativa";
        botao.type = "button";
        botao.textContent = `${String.fromCharCode(65 + indice)}) ${texto}`;
        botao.addEventListener("click", () => responder(indice));
        alternativas.appendChild(botao);
    });
}

function responder(indiceEscolhido) {
    if (respondeu) return;
    respondeu = true;

    const questaoAtual = questoesPorNivel[nivelAtual].questoes[indiceQuestao];
    const botoes = alternativas.querySelectorAll("button");
    const acertou = indiceEscolhido === questaoAtual.correta;

    botoes.forEach((botao, indice) => {
        botao.disabled = true;
        if (indice === questaoAtual.correta) botao.classList.add("correta");
        if (indice === indiceEscolhido && !acertou) botao.classList.add("errada");
    });

    if (acertou) {
        acertosNoNivel++;
        pontosDaTentativa += 10;
        feedback.className = "feedback acertou";
        feedback.innerHTML = `<strong>✓ Resposta correta! +10 pontos</strong>${questaoAtual.explicacao}`;
    } else {
        feedback.className = "feedback errou";
        const respostaCorreta = questaoAtual.alternativas[questaoAtual.correta];
        feedback.innerHTML = `<strong>✕ Não foi dessa vez. A resposta correta é: ${String.fromCharCode(65 + questaoAtual.correta)}) ${respostaCorreta}</strong>${questaoAtual.explicacao}`;
        mostrarReforco();
    }

    acertosElemento.textContent = acertosNoNivel;
    btnProxima.textContent = indiceQuestao === 3 ? "Ver resultado do nível" : "Próxima questão";
    btnProxima.classList.remove("escondido");
}

function mostrarReforco() {
    const chave = `${nivelAtual}-${indiceQuestao}`;
    const item = reforcos[chave];
    if (!item) return;
    reforcoElemento.className = "reforco";
    reforcoElemento.innerHTML = `<h3>📚 Vamos reforçar: ${item.tema}</h3><p><strong>Dica de estudo:</strong> ${item.dica}</p><p class="pratica-pergunta">Desafio rápido: ${item.pergunta}</p><div id="opcoes-pratica"></div><p id="resultado-pratica" class="resultado-pratica" aria-live="polite"></p>`;
    const opcoes = document.getElementById("opcoes-pratica");
    item.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.type = "button"; botao.textContent = opcao;
        botao.addEventListener("click", () => {
            if (opcoes.dataset.respondido) return;
            opcoes.dataset.respondido = "true";
            document.getElementById("resultado-pratica").textContent = indice === item.correta ? `Muito bem! ${item.explicacao}` : `Quase! ${item.explicacao}`;
            [...opcoes.querySelectorAll("button")].forEach(b => b.disabled = true);
        });
        opcoes.appendChild(botao);
    });
}

function avancarQuestao() {
    if (!respondeu) return;

    if (indiceQuestao < 3) {
        indiceQuestao++;
        mostrarQuestao();
        return;
    }

    finalizarNivel();
}

function finalizarNivel() {
    if (acertosNoNivel >= 3) {
        pontosTotais += pontosDaTentativa;
        conquistas.push(nivelAtual);
        atualizarConquistas();

        if (nivelAtual === 2) {
            mostrarResultado();
            return;
        }

        const proximoNivel = questoesPorNivel[nivelAtual + 1].nome;
        window.alert(
            `Nível concluído com ${acertosNoNivel} acertos! Você ganhou o selo "${nomesConquistas[nivelAtual].nome}" e desbloqueou o ${proximoNivel}.`
        );

        nivelAtual++;
        prepararNivel();
    } else {
        window.alert(
            `Você acertou ${acertosNoNivel} de 4. É necessário acertar pelo menos 3 para avançar. Os pontos desta tentativa foram descartados. Tente novamente!`
        );
        prepararNivel();
    }
}

function atualizarConquistas() {
    listaConquistas.innerHTML = "";

    nomesConquistas.forEach((conquista, indice) => {
        const liberada = conquistas.includes(indice);
        const item = document.createElement("div");
        item.className = `conquista ${liberada ? "liberada" : "bloqueada"}`;
        item.innerHTML = `
            <span>${conquista.simbolo}</span>
            <div>
                <strong>${conquista.nome}</strong>
                <small>${liberada ? conquista.descricao : "Conclua o nível correspondente"}</small>
            </div>
        `;
        listaConquistas.appendChild(item);
    });

    pontuacao.textContent = pontosTotais;
}

function mostrarResultado() {
    salvarPontuacao();
    document.getElementById("pontuacao-final").textContent = pontosTotais;
    const finais = document.getElementById("conquistas-finais");
    finais.innerHTML = "";

    nomesConquistas.forEach((conquista) => {
        const selo = document.createElement("span");
        selo.textContent = `${conquista.simbolo} ${conquista.nome}`;
        finais.appendChild(selo);
    });

    mostrarTela(telaResultado);
}

function reiniciarJogo() {
    nivelAtual = 0;
    indiceQuestao = 0;
    acertosNoNivel = 0;
    pontosTotais = 0;
    pontosDaTentativa = 0;
    conquistas = [];
    respondeu = false;
    mostrarTela(telaInicial);
    document.getElementById("jogador-atual").textContent = jogadorAtual;
    atualizarConquistas();
}


// Inicialização: exige identificação local antes de iniciar uma missão.
if (jogadorAtual) {
    document.getElementById("nome-jogador").value = jogadorAtual;
    document.getElementById("jogador-atual").textContent = jogadorAtual;
    atualizarRanking();
    mostrarTela(telaInicial);
} else {
    atualizarRanking();
    mostrarTela(telaLogin);
}
