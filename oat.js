const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100

function pedirPalpite() {
    rl.question('Adivinhe o número entre 1 e 100: ', (input) => {
        let palpite = parseInt(input);

        if (isNaN(palpite)) {
            console.log('Por favor, insira um número válido.');
            pedirPalpite(); // Se não for um número válido, pede novamente
        } else if (palpite === numeroAleatorio) {
            console.log('Você acertou!');
            rl.close();
        } else if (palpite < numeroAleatorio) {
            console.log('O número é maior. Tente novamente.');
            pedirPalpite(); // Se o palpite for menor, pede novamente
        } else {
            console.log('O número é menor. Tente novamente.');
            pedirPalpite(); // Se o palpite for maior, pede novamente
        }
    });
}

pedirPalpite(); // Inicia o jogo


