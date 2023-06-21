function adicionarTarefa(){
    var tarefa = document.getElementById('tarefa').value;
    var tarefas = document.getElementById('lista-tarefas');

    tarefas.value = tarefas.value + tarefa + '\n'; 
}