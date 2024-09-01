const faturamentoDiario = [
    {"dia": 1, "valor": 1600.0},
    {"dia": 2, "valor": 2100.0},
    {"dia": 3, "valor": 2500.0},
    {"dia": 4, "valor": 3300.0},
    {"dia": 5, "valor": 1500.0},
    {"dia": 6, "valor": 2700.0},
    {"dia": 7, "valor": 0.0},
];

const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);

const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;

console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média(R$${mediaFaturamento.toFixed(2)}): ${diasAcimaDaMedia} dias`);
