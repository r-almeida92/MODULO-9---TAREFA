$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
})

const form = document.getElementById('form-tarefas');
const tarefa = [];

let linhas = '';

form.addEventListener('submit', function (e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela;
})

function adicionaLinha(){
    const inputTarefa = document.getElementById('nome-tarefa');

    tarefa.push(inputTarefa.value);

    let linha = '<tr>';
    linha += `<td>${inputTarefa.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputTarefa.value = '';
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = Linhas;
}