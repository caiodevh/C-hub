// Função para converter Celsius para Fahrenheit
function convertToFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("temperature-result").innerHTML = "Temperatura em Fahrenheit: " + fahrenheit + "°F";
}

// Função para calcular a área do círculo
function calculateCircleArea() {
    var radius = document.getElementById("radius").value;
    var area = Math.PI * Math.pow(radius, 2);
    document.getElementById("circle-result").innerHTML = "Área do Círculo: " + area.toFixed(2) + " unidades²";
}

// Função para verificar anos bissextos
function checkLeapYear() {
    var year = document.getElementById("year").value;
    var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    var result = isLeapYear ? "O ano " + year + " é bissexto." : "O ano " + year + " não é bissexto.";
    document.getElementById("leapYear-result").innerHTML = result;
}

// Função para calcular o fatorial de um número
function calculateFactorial() {
    var number = document.getElementById("number").value;
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("factorial-result").innerHTML = "Fatorial de " + number + " é: " + factorial;
}

// Função para a Roleta Russa

function desligou(){
    window.open('https://pa1.aminoapps.com/6719/7e0b062665b85dba7a9c9de95ca63a652dd38440_00.gif');

}

function playRoulette() {
    var guess = parseInt(document.getElementById("guess").value);
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var resultElement = document.getElementById("roulette-result");
    
    if (guess === randomNumber) {
        resultElement.innerHTML = "Acertou! Bye Bye";
        
        // Simula a execução do atalho
        setTimeout(desligou, 250);
    } else {
        resultElement.innerHTML = "Errou! O número sorteado era " + randomNumber + ".";
    }
}

// Adiciona event listeners para os formulários
document.getElementById("temperatureForm").addEventListener("submit", function(event) {
    event.preventDefault();
    convertToFahrenheit();
});

document.getElementById("circleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateCircleArea();
});

document.getElementById("leapYearForm").addEventListener("submit", function(event) {
    event.preventDefault();
    checkLeapYear();
});

document.getElementById("factorialForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateFactorial();
});

document.getElementById("rouletteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    playRoulette();
});





// Função para converter Celsius para Fahrenheit
function convertToFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("temperature-result").innerHTML = "Temperatura em Fahrenheit: " + fahrenheit + "°F";
}

// Função para calcular a área do círculo
function calculateCircleArea() {
    var radius = document.getElementById("radius").value;
    var area = Math.PI * Math.pow(radius, 2);
    document.getElementById("circle-result").innerHTML = "Área do Círculo: " + area.toFixed(2) + " unidades²";
}

// Função para verificar anos bissextos
function checkLeapYear() {
    var year = document.getElementById("year").value;
    var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    var result = isLeapYear ? "O ano " + year + " é bissexto." : "O ano " + year + " não é bissexto.";
    document.getElementById("leapYear-result").innerHTML = result;
}

// Função para calcular o fatorial de um número
function calculateFactorial() {
    var number = document.getElementById("number").value;
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("factorial-result").innerHTML = "Fatorial de " + number + " é: " + factorial;
}

// Função para a Roleta Russa
// Roleta Russa com sistema proporcional de chances
let maxChances = 6;
let remainingChances = maxChances;
const chancesCounter = document.getElementById("chances-counter");

function updateChancesDisplay() {
    chancesCounter.textContent = `Chances restantes: ${remainingChances}`;
    chancesCounter.style.color = remainingChances > 3 ? "#4CAF50" : 
                                remainingChances > 1 ? "#FFC107" : "#F44336";
}

function gameOver() {
    window.open('https://pa1.aminoapps.com/6719/7e0b062665b85dba7a9c9de95ca63a652dd38440_00.gif');
}

function resetGame() {
    remainingChances = maxChances;
    updateChancesDisplay();
    document.getElementById("roulette-result").textContent = "";
}

document.getElementById("rouletteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (remainingChances <= 0) {
        document.getElementById("roulette-result").textContent = 
            "Suas chances acabaram! Recarregue a página para jogar novamente.";
        return;
    }

    const guess = parseInt(document.getElementById("guess").value);
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const resultElement = document.getElementById("roulette-result");

    if (guess === randomNumber) {
        resultElement.textContent = "💀 BOOM! Você perdeu!";
        resultElement.style.color = "#f44336";
        remainingChances = 0;
        updateChancesDisplay();
        setTimeout(gameOver, 500);
    } else {
        remainingChances--;
        resultElement.style.color = "#ffffff";
        resultElement.textContent = `Você sobreviveu! O número era ${randomNumber}.`;
        
        if (remainingChances === 0) {
            resultElement.textContent += "\n🎉 Parabéns! Você sobreviveu à roleta russa!";
            resultElement.style.color = "#4CAF50";
        }
        
        updateChancesDisplay();
    }
    
    document.getElementById("guess").value = "";
});

// Inicializa o contador
updateChancesDisplay();

// Adiciona event listeners para os formulários
document.getElementById("temperatureForm").addEventListener("submit", function(event) {
    event.preventDefault();
    convertToFahrenheit();
});

document.getElementById("circleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateCircleArea();
});

document.getElementById("leapYearForm").addEventListener("submit", function(event) {
    event.preventDefault();
    checkLeapYear();
});

document.getElementById("factorialForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateFactorial();
});

document.getElementById("rouletteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    playRoulette();
});
