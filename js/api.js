window.onkeypress = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
        if(document.getElementById('cep').value !== ""){
            var cep  = document.getElementById('cep').value;        
            autoComplete(cep);
        }
               
    }
};

function autoComplete(cep){
    $.ajax({
        
        url: 'http://api.postmon.com.br/v1/cep/'+cep,
    
        success:function(data){
            $('input[name="logradouro"]').val(data.logradouro);
            $('input[name="bairro"]').val(data.bairro);
            $('input[name="cidade"]').val(data.cidade);
            
        },
        error:function(){
            alert("Algo deu errado...tente novamente");
        }
    });
    
}
