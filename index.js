function main() {

    var a = [
        prompt("Digite o primeiro nome"),
        prompt("Digite o segundo nome"),
        prompt("Digite o terceiro nome")
    ];

    var invertedNames = invert(a);

    // Exibir nomes invertidos na tela
    invertedNames.forEach(function (element) {
        document.write(element + "<br>");
    });

    var nome = prompt("Digite o nome do aluno:");
    var notas = [];

    for (var i = 1; i <= 3; i++) {
        var nota = parseFloat(prompt("Digite a nota " + i + " do aluno:"));
        notas.push(nota);
    }

    var media = mean(notas);
    var aprovado = media >= 7 ? "aprovado" : "reprovado";

    document.write("Nome do aluno: " + nome + "<br>");
    document.write("Média: " + media.toFixed(2) + "<br>");
    console.log("Situação: " + aprovado);

    isApproved(10);
    
    document.write(wide("03/03/2022"));
}

/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){

    var invertedArray = people.reverse();
    
    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.

    return  invertedArray;
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){

    var soma = 0;
    for (var i = 0; i < grades.length; i++) {
        soma += grades[i];
    }


    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    return soma / grades.length;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

    var situacao = mean >= 7 ? "aprovado" : "reprovado";

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    return "Você foi " + situacao + "!";
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){

    var partes = strDate.split("/");
    var dia = partes[0];
    var mes = partes[1];
    var ano = partes[2];

    var meses = [
        "janeiro", "fevereiro", "março",
        "abril", "maio", "junho",
        "julho", "agosto", "setembro",
        "outubro", "novembro", "dezembro"
    ];

    var mesExtenso = meses[parseInt(mes) - 1];

    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.

    return dia + " de " + mesExtenso + " de " + ano;
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}