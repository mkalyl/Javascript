let valores = [8, 1, 7, 4, 2, 9]
num.push(1)
valores.sort()
console.log(num)
console.log(`O vetor tem ${num.lenght} posições`)
console.log(`O primeiro valor do vetor é ${num [0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} 
console.log(`O valor 4 está na posição ${pos}`)

/*
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

