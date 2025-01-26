$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
})

$(document).ready(function() {
    $('#tarefasForm').submit(function(event) {
        event.preventDefault();
        var taskText = $('#tarefaInput').val().trim();
        if (taskText !== "") {
            $('#listaTarefas').append('<li>' + taskText + '</li>');
            $('#tarefaInput').val("");
        }
    });

    $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('done');
    });
});