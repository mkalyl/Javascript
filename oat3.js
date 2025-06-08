// Função principal para identificar vilões do Batman com base em uma descrição
function identificarVilao(descricao) {
    descricao = descricao.toLowerCase(); 
    if (descricao.includes("charada") || descricao.includes("enigmas")) {
        console.log("O vilão é o Charada!");
    } else if (descricao.includes("coringa") || descricao.includes("palhaço")) {
        console.log("O vilão é o Coringa!");
    } else if (descricao.includes("pinguim") || descricao.includes("umbrella")) {
        console.log("O vilão é o Pinguim!");
    } else if (descricao.includes("bainha") || descricao.includes("veneno") || descricao.includes("hera")) {
        console.log("A vilã é a Hera Venenosa!");
    } else if (descricao.includes("forte") || descricao.includes("quebra") || descricao.includes("máscara")) {
        console.log("O vilão é o Bane!");
    } else if (descricao.includes("gatos") || descricao.includes("selina")) {
        console.log("A vilã é a Mulher-Gato!");
    } else {
        console.log("Vilão não identificado! Talvez seja um novo inimigo.");
    }
}

// Teste do programa com diferentes entradas
console.log("Teste 1:");
identificarVilao("Um criminoso que adora charadas e enigmas."); 
// Saída esperada: O vilão é o Charada!

console.log("Teste 2:");
identificarVilao("Um palhaço perigoso e imprevisível."); 
// Saída esperada: O vilão é o Coringa!

console.log("Teste 3:");
identificarVilao("Um homem pequeno que usa guarda-chuvas como arma."); 
// Saída esperada: O vilão é o Pinguim!

console.log("Teste 4:");
identificarVilao("Uma mulher que controla plantas e usa venenos."); 
// Saída esperada: A vilã é a Hera Venenosa!

console.log("Teste 5:");
identificarVilao("Um vilão forte que usa uma máscara e quase quebrou o Batman."); 
// Saída esperada: O vilão é o Bane!

console.log("Teste 6:");
identificarVilao("Uma ladra que adora gatos e é chamada de Selina."); 
// Saída esperada: A vilã é a Mulher-Gato!

console.log("Teste 7:");
identificarVilao("Um vilão desconhecido que controla o tempo."); 
// Saída esperada: Vilão não identificado! Talvez seja um novo inimigo.
