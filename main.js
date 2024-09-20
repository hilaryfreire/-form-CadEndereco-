'use strict'; // Modo restrito
// Este modo faz como que o JavaScript apere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API - https://viacep.com.br/ */

// Função para limpar formulário
const limparFormulario = () =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
}

//  criar regra de expressão regular (regex) para testar valor inicial informado pelo usuario
const eNumero = (numero) => /^[0-9]=$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);


