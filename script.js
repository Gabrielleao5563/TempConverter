//Variaveis globais

var escala1 = 0;
var escala2 = 0;

//Saber se as escalas foram selecionadas
var scale1chosed = 0;
var scale2chosed = 0;

//Nomes das escalas personalizadas
var scale1name = "";
var scale2name = "";

//Temperaturas das escalas personalizadas
var scale1fusiontemp = 0;
var scale2fusiontemp = 0;

var scale1boilingtemp = 0;
var scale2boilingtemp = 0;

//Funcao para criar escalas personalizadas
function createscale(){

    //Verificar se ja ouve algunha escala criada
    switch (escala1){
        case 0:
            //Caso não estiver sido criada

            //Coleta da Informação
            scale1name = window.prompt("Nome:");
            scale1fusiontemp = window.prompt("Fusão:");
            scale1boilingtemp = window.prompt("Hebulição:");

            //Cadastrar como criada
            escala1 = 1;

            break;
        case 1:
            //Caso ja estiver sido criada

            //Repetir o processo com a outra vaga
            switch (escala2){
                case 0:
                    //Caso não estiver sido criada
        
                    //Coleta da Informação
                    scale2name = window.prompt("Nome:");
                    scale2fusiontemp = window.prompt("Fusão:");
                    scale2boilingtemp = window.prompt("Hebulição:");
        
                    //Cadastrar como criada
                    escala2 = 1;
        
                    break;
                case 1:
                    //Caso ja estiver sido criada
        
                    //Aviso de que o numero limite de escalas foi excedido
                    window.alert("Você não pode criar mais que duas escalas personalizadas!");

                    break;
            }

            break;
    }
}

//Controle sobre a div de selecionar escala e suas opcoes
var selectablediv = document.getElementById("selectablediv");
var opcao1 = document.getElementById("option4");
var opcao2 = document.getElementById("option5");

var inicialoufinal = 0;

//Variaveis das escalas na converssão
var escala_1_nome = "";
var escala_1_fusao = 0;
var escala_1_ebulicao = 0;

var escala_2_nome = "";
var escala_2_fusao = 0;
var escala_2_ebulicao = 0;

//Selecionar as escalas
function chosescale(quem){

    //Exibir o botao das escalar adicionais caso exisitirem
    if(escala1 == 1){
        opcao1.style.display="block";
        opcao1.innerHTML=String(scale1name.toUpperCase());
    }else{
        opcao1.style.display="none";
    }

    //Repetindo para a outra escala
    if(escala2 == 1){
        opcao2.style.display="block";
        opcao2.innerHTML=String(scale2name.toUpperCase());
    }else{
        opcao2.style.display="none";
    }

    selectablediv.style.left="50%";

    inicialoufinal = quem;
}
//Escala selecionada
function select(qual){

    //Descubrir se é a escala inicial ou a final
    switch (inicialoufinal){
        case 1:

            //Definindo Valores
            switch (qual){
                case 1:
                    escala_1_nome = "CELSIUS";
                    escala_1_fusao = 0;
                    escala_1_ebulicao = 100;

                    break;
                case 2:
                    escala_1_nome = "FAHRENHEIT";
                    escala_1_fusao = 32;
                    escala_1_ebulicao = 212;

                    break;
                case 3:
                    escala_1_nome = "KELVIN";
                    escala_1_fusao = 273;
                    escala_1_ebulicao = 373;

                    break;
                case 4:
                    escala_1_nome = String(scale1name.toUpperCase());
                    escala_1_fusao = scale1fusiontemp;
                    escala_1_ebulicao = scale1boilingtemp;

                    break;
                case 5:
                    escala_1_nome = String(scale2name.toUpperCase());
                    escala_1_fusao = scale2fusiontemp;
                    escala_1_ebulicao = scale2boilingtemp;

                    break;
            }

            break;
        case 2:

            //Repetindo a definição de valores
            switch (qual){
                case 1:
                    escala_2_nome = "CELSIUS";
                    escala_2_fusao = 0;
                    escala_2_ebulicao = 100;

                    break;
                case 2:
                    escala_2_nome = "FAHRENHEIT";
                    escala_2_fusao = 32;
                    escala_2_ebulicao = 212;

                    break;
                case 3:
                    escala_2_nome = "KELVIN";
                    escala_2_fusao = 273;
                    escala_2_ebulicao = 373;

                    break;
                case 4:
                    escala_2_nome = String(scale1name.toUpperCase());
                    escala_2_fusao = scale1fusiontemp;
                    escala_2_ebulicao = scale1boilingtemp;

                    break;
                case 5:
                    escala_2_nome = String(scale2name.toUpperCase());
                    escala_2_fusao = scale2fusiontemp;
                    escala_2_ebulicao = scale2boilingtemp;

                    break;
            }

            break;
    }

    selectablediv.style.left="-500%";

    //Inserir o nome da escala escolhida no botão
    var tomodify = document.getElementById(String("input" + inicialoufinal));
    if(inicialoufinal == 1){
        tomodify.innerHTML=escala_1_nome;
    }else{
        tomodify.innerHTML=escala_2_nome;
    }

    if(inicialoufinal == 1){
        scale1chosed = 1;
    }else if(inicialoufinal == 2){
        scale2chosed = 1;
    }
}

var intervalo1 = setInterval(check, 100);

//Verificar se é possivel converter
function check(){
    if(scale1chosed == 1){
        if(scale2chosed == 1){
            convert();
        }
    }
}

//Converter a Temperatura
function convert(){

    var input3 = document.getElementById("settemperature");
    var filtro3 = input3.value;

    //Temperatura de Ebulição subtraida pela de fusão
    var escala_1_final = escala_1_ebulicao - escala_1_fusao;
    var escala_2_final = escala_2_ebulicao - escala_2_fusao;
    
    //Simplificar a fração
    var fracaosimples = simplify();

    //Função para simplificar a fração
    function simplify() {
        var result = '',
        numOne = escala_1_final,
        numTwo = escala_2_final;
        for (var i = Math.max(numOne, numTwo); i > 1; i--) {
        if ((numOne % i == 0) && (numTwo % i == 0)) {
            numOne /= i;
            numTwo /= i;
        }
        }
        if (numTwo === 1) {
            result = numOne.toString()
        } else {
        result = numOne.toString() + '/' + numTwo.toString()
        }
        return result
    }

    //Valor a se converter subtraido pela temperatura de fusão da escala inicial
    var solicitacao = filtro3 - escala_1_fusao;

    var parte1 = 0;
    var parte2 = 0;

    //Ler a fraçãosimplificada
    read(fracaosimples);

    //Função de leitura da fração simplificada
    function read(str){
        const numbers = str.split('/');
        parte1 = numbers[0];
        parte2 = numbers[1];
    }

    //Dividir uma base da fração pela outra
    fracaosimplesdivisivel = parte1 / parte2;
    
    //Valor a se converter subtraido pelo resultado das bases divididas entre si
    var resultado = solicitacao / fracaosimplesdivisivel;

    //Caso o valor de algunha das bases não seja um número válido, o resultado é o valor a se converter dividido pela fracao simplificada
    if(parte1 == undefined){
        resultado = solicitacao / fracaosimples;
    }
    if(parte2 == undefined){
        resultado = solicitacao / fracaosimples;
    }

    //Resultado adicionado a temperatura de fusão da escala final
    resultado = resultado + escala_2_fusao;

    //Registro dos dados no console do sistema
    console.log("Fração simples: " + fracaosimples);
    console.log("Solicitação: " + solicitacao);
    console.log("Parte1: " + parte1);
    console.log("Parte2: " + parte2);
    console.log("F simples divisivel: " + fracaosimplesdivisivel);
    console.log("Resultado: " + resultado);

    //Chamar a função de mostrar resultados
    showresult(resultado, filtro3, escala_1_nome, escala_2_nome);
}

//Função para mostrar o resultado
function showresult(content, solicitado, nome1, nome2){
    var texto = document.getElementById("resultado");

    texto.innerHTML=String(solvebug1() + "º em " + nome1 + " equivalem á " + Math.trunc(content) + "º em " + nome2 + "!");

    //Correcao do bug de não aparecer nenhum numero
    function solvebug1(){
        if(solicitado == ""){
            return "0";
        }else{
            return solicitado
        }
    }

}