const form = document.getElementById('form-atividade');
const pessoas = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputTelefonePessoa = document.getElementById('telefone-pessoa');
    pessoas.push(inputNomePessoa.value);
    telefones.push(parseFloat(inputTelefonePessoa.value));

    let linha = '<tr>';
    linha += `<td>${inputNomePessoa.value}</td>`;
    linha += `<td>${inputTelefonePessoa.value}</td>`;
    linha += '<tr>';

    linhas += linha;
    
    inputNomePessoa.value= '';
    inputTelefonePessoa.value= '';
}



function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

