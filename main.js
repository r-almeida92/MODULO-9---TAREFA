$(document).ready(function() { // Aguarda o DOM ser carregado completamente
    $('header button').click(function() { // Ao clicar no botão do cabeçalho
        $('form').slideDown(); // Exibe o formulário com um efeito de deslizamento
    });

    $('#botao-cancelar').click(function() { // Ao clicar no botão "Cancelar"
        $('form').slideUp(); // Esconde o formulário com um efeito de deslizamento
    });
});

$(document).ready(function() { // Aguarda o DOM ser carregado completamente
    $('#tarefasForm').submit(function(event) { // Ao enviar o formulário
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página
        var taskText = $('#tarefaInput').val().trim(); // Obtém e remove espaços extras do valor do campo de texto
        if (taskText !== "") { // Verifica se o texto não está vazio
            $('#listaTarefas').append('<li>' + taskText + '</li>'); // Adiciona a nova tarefa à lista
            $('#tarefaInput').val(""); // Limpa o campo de texto
        }
    });

    $('#listaTarefas').on('click', 'li', function() { // Ao clicar em um item da lista
        $(this).toggleClass('done'); // Alterna a classe 'done', que risca o texto
    });
});