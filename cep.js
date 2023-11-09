function buscaCep(){
    let Cep = document.getElementById("txtCep").value;
        if(Cep !== ""){
            let url = "https://brasilapi.com.br/api/cep/v1/" + Cep;
           
            let req = new XMLHttpRequest();
            //aqui estou abrindo meu GET para ver minha requisição.
            req.open("GET", url);
            // aqui estou chamando minha url.
            req.send();
            //tratar a resposta da requisição:
            req.onload = function(){
                if(req.status === 200);
                let endereco = JSON.parse(req.response);
                document.getElementById("txtStreet").value = endereco.street;
                document.getElementById("txtNeighborhood").value = endereco.neighborhood;
                document.getElementById("txtCity").value = endereco.city;
                document.getElementById("txtState").value = endereco.state;
             }
        
        }
        else if(req.status === 404){
            alert("Cep inválido!");

        }
        else{
            alert("Erro ao fazer a requisição!");
        }
}

window.onload = function(){
    let txtCep = document.getElementById("txtCep");
    txtCep.addEventListener("blur", buscaCep);

}
