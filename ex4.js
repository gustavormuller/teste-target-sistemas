const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let totalFaturamento = 0;
for (const estado in faturamentoPorEstado) {
    totalFaturamento += faturamentoPorEstado[estado];
}

for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}% do faturamento total`);
}
