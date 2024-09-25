var tarefa = [];

function adicionartarefa(){
    const input = document.getElementById("tarefa-text");
    const TarefaTexto = input.value.trim();

    if (TarefaTexto === ""){
        alert("Voce tentou adicionar uma tarefa sem texto!!");
        return;
    }

    const novatarefa = {
        id: Math.floor(Math.random() * 100000),
        text: TarefaTexto,
        completed: false
    }

    tarefa.push(novatarefa);
    render();
    input.value = "";
    input.focus();
}

function render() {
    const listatarefas = document.getElementById("lista-tarefa");
    listatarefas.innerHTML = "";

    for (var i = 0; i < tarefa.length; i++){
        const li = document.createElement("li");
        if (tarefa[i].completed === true){
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tarefa[i].text;
    
        const concluir = document.createElement("button");
        concluir.textContent = tarefa[i].completed ? "Desmarcar" : "Concluir";
        concluir.classList.add("concluir");
    
        const editar = document.createElement("button");
        editar.textContent = "editar";
        editar.classList.add("editar");

        const excluir = document.createElement("button");
        excluir.textContent = "excluir";
        excluir.classList.add("excluir");

        const div = document.createElement("div");

        div.appendChild (concluir);
        div.appendChild(editar);
        div.appendChild(excluir);

        li.appendChild(span);
        li.appendChild(div);

        listatarefas.appendChild(li);
    }
}