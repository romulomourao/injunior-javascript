var botao = document.getElementById('add-item');

function remove(){
    this.parentNode.remove(parent);
}

function edit(){
    var divTexto = this.parentNode.childNodes[0];
    var textoAtual = divTexto.innerHTML;
    var novoTexto = prompt("Editar tarefa:",textoAtual);
    divTexto.innerHTML = novoTexto;

}

function add(){
    
    var inputText = document.getElementById('task');
    if(inputText.value){
        var item = document.createElement("li");
        var divTexto = document.createElement("div");
        divTexto.className = 'lista-texto';
        var divEditar = document.createElement("div");
        divEditar.className = 'bt-options bt-edit';
        var divExcluir = document.createElement("div");
        divExcluir.className = 'bt-options bt-remove';
       
        var texto = document.createTextNode(inputText.value);
        divTexto.appendChild(texto);
        
        item.appendChild(divTexto);
        item.appendChild(divEditar);
        item.appendChild(divExcluir);
        divExcluir.addEventListener('click',remove,false);
        divEditar.addEventListener('click',edit,false);
        var lista = document.getElementById("lista");
        lista.appendChild(item);
       
        inputText.value = "";
    }
    
}


botao.addEventListener('click', add, false);

window.onkeypress = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
        add();
    }
};