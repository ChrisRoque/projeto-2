const form = document.getElementById("form-lista");
let nome = [];
let numero = [];
let listas = "";

    form.addEventListener("submit", function(e){
        e.preventDefault();
        adicioneContato();
        validaTabela();

});

    function adicioneContato(){
        const addNome = document.getElementById("add-nome");
        const addNumero = document.getElementById("add-numero");

        if (nome.includes(addNome.value)){
            alert(`O contato ${addNome.value} já foi inserido!`);
        } else{
            nome.push(addNome.value);
        numero.push(parseInt(addNumero.value));

        let linha = `<tr>`;
        linha +=`<td>${addNome.value}`;
        linha +=`<td>${addNumero.value}`;
        linha +=`</tr>`;

        listas += linha;
        }
        

        addNome.value = "";
        addNumero.value = "";
    };

    function validaTabela(){
        const corpoTabela = document.querySelector("tbody");
            corpoTabela.innerHTML = listas;
    };