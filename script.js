let nome = prompt("Digite seu nome:");

let renda = Number(prompt("Digite sua renda mensal:"));

while (isNaN(renda)) {
    renda = Number(prompt("Digite uma renda válida:"));
}

let quantidadeDespesas = Number(
    prompt("Quantas despesas você deseja informar? (1 a 5)")
);

while (isNaN(quantidadeDespesas)) {
    quantidadeDespesas = Number(
        prompt("Digite um número válido de despesas:")
    );
}

if (quantidadeDespesas < 1) {
    quantidadeDespesas = 1;
}

if (quantidadeDespesas > 5) {
    quantidadeDespesas = 5;
}

let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {

    let despesa = Number(
        prompt(`Digite o valor da Despesa ${i}:`)
    );

    while (isNaN(despesa)) {
        despesa = Number(
            prompt(`Digite um valor válido para a Despesa ${i}:`)
        );
    }

    totalDespesas += despesa;
}

let sobra = renda - totalDespesas;
let mensagem;

if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * 0.30) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let resultado = `
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}

${mensagem}
`;

alert(resultado);

console.log(resultado);