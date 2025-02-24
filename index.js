import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somaDoisNumeros(a, b) {
    return a + b;
}

function input(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

while (true) {
    const num1 = await input('Digite o primeiro número: ');
    const num2 = await input('Digite o segundo número: ');
    const resultado = somaDoisNumeros(parseFloat(num1), parseFloat(num2));
    console.log(`A soma dos dois números é: ${resultado}`);
    const continuar = await input('Deseja somar outros números? (s/n): ');
    if (continuar.toLowerCase() !== 's') {
        break;
    }
}

rl.close();