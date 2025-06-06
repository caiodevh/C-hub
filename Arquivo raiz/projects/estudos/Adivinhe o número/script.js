// Variáveis do jogo
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const palpites = document.querySelector(".palpites");
const ultimoResultado = document.querySelector(".ultimoResultado");
const baixoOuAlto = document.querySelector(".baixoOuAlto");
const envioPalpite = document.querySelector(".envioPalpite");
const campoPalpite = document.querySelector(".campoPalpite");
let contagemPalpites = 1;
let botaoReinicio;

// Event Listener para o botão
envioPalpite.addEventListener('click', conferirPalpite);

// Função principal do jogo
function conferirPalpite() {
    // Verifica se o campo está vazio
    if (campoPalpite.value === "") {
        ultimoResultado.textContent = "Por favor, digite um número!";
        ultimoResultado.style.backgroundColor = "red";
        return;
    }

    const palpiteUsuario = Number(campoPalpite.value);
    
    // Validação do palpite
    if (isNaN(palpiteUsuario)) {
        ultimoResultado.textContent = "Isso não é um número válido!";
        ultimoResultado.style.backgroundColor = "red";
        return;
    }

    if (palpiteUsuario < 1 || palpiteUsuario > 100) {
        ultimoResultado.textContent = "Por favor, insira um número entre 1 e 100!";
        ultimoResultado.style.backgroundColor = "red";
        return;
    }

    // Registra os palpites
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }
    palpites.textContent += palpiteUsuario + " ";

    // Verifica o palpite
    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você acertou em " + contagemPalpites + " tentativas!";
        ultimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "FIM DE JOGO! O número era " + numeroAleatorio;
        ultimoResultado.style.backgroundColor = "purple";
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = "Errado!";
        ultimoResultado.style.backgroundColor = "red";
        baixoOuAlto.textContent = palpiteUsuario < numeroAleatorio ? 
            "Seu palpite está muito baixo!" : "Seu palpite está muito alto!";
    }

    contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
}

// Configura o fim do jogo
function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    
    botaoReinicio = document.createElement("button");
    botaoReinicio.textContent = "Novo Jogo";
    botaoReinicio.classList.add("botao-reinicio");
    document.querySelector(".container").appendChild(botaoReinicio);
    botaoReinicio.addEventListener("click", reiniciarJogo);
}

// Reinicia o jogo
function reiniciarJogo() {
    contagemPalpites = 1;
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    // Limpa os resultados
    palpites.textContent = "";
    ultimoResultado.textContent = "";
    baixoOuAlto.textContent = "";
    ultimoResultado.style.backgroundColor = "transparent";
    
    // Remove o botão de reinício
    if (botaoReinicio) {
        botaoReinicio.parentNode.removeChild(botaoReinicio);
    }
    
    // Reativa os controles
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();
}