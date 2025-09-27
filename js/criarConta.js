// pegar o formulário, passar um listener para o submit
// pode pegar de duas formas, pelo form ou pelo id do form ('#xxxxxx')
// o código "alert" usa para mandar uma mensagem 
// Ex: alert('Estou na função, mas o form ainda está enviando')
// cancelar o submit (para não atualizar a pagina toda vez q clicar o botao) - passar o submit como parâmetro para dentro da função
// function(xxxx), xxxx -> nome para variavel evento, normalmente colocam e, event, evento
document.querySelector('#criarConta').addEventListener('submit', function(e){
    //cancelar o evento submit
    e.preventDefault();

    //pegando o tbody(corpo da tabela), ele será o elemento que receberá os dados da form
    //pode pegar pelo tbody ou pelo id
    const tbody = document.querySelector('#dadosConta');

    //tudo q vem do usuário vem como uma String
    if(document.querySelector('#tipoConta').value === '0'){
        alert('Selecione uma conta válida');
        document.querySelector('#tipoConta').focus();
        return;
    }

    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#senha'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ]
    
    //Criar uma tr
    const tr = document.createElement('tr');

    //Percorrer o Array para criar uma td para cada campo
    campos.forEach(campo =>{
        //criar um td
        const td = document.createElement('td');

        //if para ver se o campo é data
        if(campo.type === 'date'){
            const dataFormatada = campo.value;
            const data = new Date(dataFormatada + 'T12:00:00');
            td.textContent = data.toLocaleDateString('pt-BR');
        }

        //colocar na td o valor digitado
        td.textContent = campo.value;

        //colocar a td na tr
        tr.appendChild(td);
    });

    //inserir a tr na tbody
    tbody.appendChild(tr);

    //Limpar o formulario
    this.reset();

})