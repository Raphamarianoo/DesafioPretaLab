const medalhas = {};

while (true) {
    const pais = prompt("Digite o nome do país (ou 'sair' para encerrar):");
    if (pais.toLowerCase() === "sair") {
        break;
    }

    const ouro = parseInt(prompt(`Quantas medalhas de ouro ${pais} ganhou?`), 10);
    const prata = parseInt(prompt(`Quantas medalhas de prata ${pais} ganhou?`), 10);
    const bronze = parseInt(prompt(`Quantas medalhas de bronze ${pais} ganhou?`), 10);

    if (!isNaN(ouro) && !isNaN(prata) && !isNaN(bronze)) {
        const total = ouro + prata + bronze;
        medalhas[pais] = total;
    } else {
        alert("Por favor, insira apenas números para as medalhas.");
    }
}

console.log("#Ranking de medalhas:");
Object.entries(medalhas)
    .sort((a, b) => b[1] - a[1])
    .forEach(([pais, total]) => {
        console.log(`${pais}: ${total} medalhas`);
    });
