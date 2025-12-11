function deletarTarefa(taskId) {
    const task = document.querySelector(`.${taskId}`); // seleciona o elemento pela classe CSS, que no caso serão as divs com as classe t1, 2, ... 
    if (task) {
        task.remove(); // remove o elemento e todos os seus filho
    }
}

/*EXPLICAÇÃO DO PORQUE USAR querySelector E NÃO getElementByid
o getElementByid obviamente iria precisar que o elemento pai tivesse o id com o valor da tarefa, 
e como os elementos inputs já tinham esse id para que funcionassem os labels, 
usar o querySelector e selecionar pela classe foi uma alternativa. */

var inputBusca = document.getElementById("search-input");
var listaTarefas = document.querySelectorAll('.tarefa');

inputBusca.addEventListener('input', function () {

    // pega o valor digitado e convertemos para minúsculas
    const termoBusca = inputBusca.value.toLowerCase();

    // Loop por todos os itens da lista
    listaTarefas.forEach(item => {
        const textoItem = item.textContent.toLowerCase();

        // Verificamos se o texto do item contém o termo digitado
        if (textoItem.includes(termoBusca)) {
            // Se contém, removemos a classe que esconde (mostra o item)
            item.classList.remove('hide');
        } else {
            // Se não contém, adicionamos a classe que esconde
            item.classList.add('hide');
        }
    });
});
