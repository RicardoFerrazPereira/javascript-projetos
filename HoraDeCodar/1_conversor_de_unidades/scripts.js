// Selecionar os elementos -> Obter referências aos elementos HTML

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

// Função para converter as unidades

const convert = () => {
    const fromValue = fromElement.value;
    const toValue = toElement.value; 

    // Verificar se as unidades de entrada e saída são iguais
    if(fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    }

    // Converter para metros - Pois vai ser nossa unidade padrão
    let metros;
    switch (fromValue) {
        case "m":
            metros = inputElement.value;
            break;
        case "km":
            metros = inputElement.value * 1000;
            break;
        case "cm":
            metros = inputElement.value / 100
            break;
        case "mm":
            metros = inputElement.value / 1000;
            break;
    }

    // Converter os metros para a unidade de saída
    let resultado;
    switch (toValue) {
        case "m":
            resultado = metros;
            break;
        case "km":
            resultado = metros / 1000;
            break;
        case "cm":
            resultado = metros * 100;
            break;
        case "mm":
            resultado = metros * 1000;
            break;
    }

    // Exibir o resultado na caixa de saída
    outputElement.value = resultado.toFixed(2);

    // Exibir a mensagem de conversão
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const message = `${inputElement.value} ${fromLabel} equivalem a ${resultado.toFixed(2)} ${toLabel}`;
    messageElement.textContent = message;
    return;
}

// Adicionar um ouvinte de eventos ao botão de conversão
convertButton.addEventListener("click", convert);