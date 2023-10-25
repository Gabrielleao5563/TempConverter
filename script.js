//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//VARIAVEIS

//variaveis das escalas personalizadas
var extrascale1 = 0, var extrascale2 = 0;

var extrascale1name = "", var extrascale2name = "";

var extrascale1fusion = 0, var extrascale2fusion = 0;

var extrascale1boiling = 0, var extrascale2boiling = 0;

//salvam a informação sobre se as escalas ja foram selecionadas
var scale1chosed = 0, var scale1chosed = 0;

//sobre as bases da equacoes
var basedividida = 0;

var base1total = 0, var base2total = 0;

//salva o resultado da converssao
var resultado = 0;

var quemexterno = 0;

//salva o valor inicial a se converter
var solicitado = 0;

//salva os metadados necessarios sobre as escalas para converter
var esc1nome = "", var esc2nome = "";

var esc1fusion = 0, var esc2fusion = 0;

var esc1boiling = 0, var esc2boiling = 0;

//salva o endereco da janela de selecao de escalas caso necessario
var div = document.getElementById("selectablediv");

//CRIAÇÃO DE ESCALAS PERSONALIZADAS

function create_scale(){

    //verificar existencia da escala personalizada 1
    switch(extrascale1){

        //caso nao tiver sido criada
        case 0:

            //criar a escala
            extrascale1name = window.prompt("Qual o nome da escala?");
            extrascale1fusion = window.prompt("Qual a temperatura de fusão da escala?");
            extrascale1boiling = window.prompt("Qual a temperatura de hebulição da escala?");
            extrascale1 = 1;
            break;  

        //caso ja estiver sido criada
        case 1:

            //verificar existencia da escala personalizada 2
            switch(extrascale2){
            
                //caso nao tiver sido criada
                case 0:

                    //criar a escala
                    extrascale2name = window.prompt("Qual o nome da escala?");
                    extrascale2fusion = window.prompt("Qual a temperatura de fusão da escala?");
                    extrascale2boiling = window.prompt("Qual a temperatura de hebulição da escala?");
                    extrascale2 = 1;
                    break;
                
                //caso ja estiver sido criada
                case 1:
                    
                    //mensagem de erro
                    window.alert("Você não pode criar mais do que duas escalas personalizadas!");
                    break;
            }

            break;
    }

}

//ABRIR ABA DE SELEÇÃO DE ESCALA

function chose_scale(quem){

    //abre a janela de selecao
    div.style.display="initial";

    var option1 = document.getElementById("option4");
    var option2 = document.getElementById("option5");

    //mostras botoes adicionais caso as escalas personalizadas teverem sido criadas
    if(extrascale1 == 1){
        option1.innerHTML=extrascale1name.toUpperCase();
        option1.style.display="block";
    }else{
        option1.style.display="none";
    }

    if(extrascale2 == 1){
        option2.innerHTML=extrascale2name.toUpperCase();
        option2.style.display="block";
    }else{
        option2.style.display="none";
    }

    //coleta o valor de qual input foi pressionado e torna o valor global
    quemexterno = quem;
}

//SELECIONAR AS ESCALAS

function select(qual){

    var valornome = "";
    var valorfusion = 0;
    var valorboiling = 0;

    //descobre qual escala foi escolhida e seleciona os metadados baseados nisso
    switch(qual){

        case 1:

            valornome = "CELSIUS";
            valorfusion = 0;
            valorboiling = 100;
            break;
        
        case 2:
            
            valornome = "FAHRENHEIT";
            valorfusion = 32;
            valorboiling = 212;
            break;
        
        case 3:

            valornome = "KELVIN";
            valorfusion = 273;
            valorboiling = 373;
            break;
        
        case 4:

            valornome = extrascale1name.toUpperCase();
            valorfusion = extrascale1fusion;
            valorboiling = extrascale1boiling;
            break;

        case 5:

            valornome = extrascale2name.toUpperCase();
            valorfusion = extrascale2fusion;
            valorboiling = extrascale2boiling;
            break;
    }

    //atribui os metadados a escala inicial ou final dependendo do input que foi selecionado anteriormente
    if(quemexterno == 1){
        esc1nome = valornome;
        esc1fusion = valorfusion;
        esc1boiling = valorboiling;
    }else{
        esc2nome = valornome;
        esc2fusion = valorfusion;
        esc2boiling = valorboiling;
    }

    //fecha a janela de selecao
    div.style.display="none";

    //pega o endereco do botao pressionado baseado na informação global passada anteriormente
    var btn = document.getElementById(String("input" + quemexterno));

    //muda o texto do botao para o nome da escala escolhida
    btn.innerHTML=valornome;

    //altera o status de escala escolhida/nao escolhida
    if(quemexterno == 1){
        scale1chosed = 1;
    }else{
        scale2chosed = 1;
    }

    //chama a funcao de converssao
    convert();

}

//CONVERTER

function convert(){

    //verifica se as escalas foram selecionadas / caso contrario encerra a funcao
    if(scale1chosed == 0){
        return;
    }

    if(scale2chosed == 0){
        return;
    }

    //coleta o endereco onde se digita o valor
    var filtro = document.getElementById("settemperature");

    //o valor solicitado passa a ser o que se digitou no input
    var solicitado = filtro.value;

    //subtrai o valor inicial pela temp de fusao da escala inicial
    solicitado = solicitado - esc1fusion;

    //pega as duas bases subtraindo a temp de hebulicao de cada escala pela temp de fusao das mesmas
    base1total = esc1boiling - esc1fusion;
    base2total = esc2boiling - esc2fusion;

    //a base absoluta passa a ser a base da escala final dividida pela base da escala inicial
    basedividida = base2total / base1total;

    //o resultado e o valor inserido multiplicado pela base absoluta adicionado a temp de fusao da escala final
    resultado = Math.floor((solicitado * basedividida) + esc2fusion);

    //registra os resultados no console de desenvolvedor
    console.log("Base: " + base1total + "/" + base2total + " Resultado: " + resultado);

    //chama a funcao para exibir o resultado na tela
    showresult(solicitado, esc1nome, esc2nome, resultado);
}

//MOSTRAR O RESULTADO

function showresult(starting, name1, name2, product){

    //coleta o endereco do texto que mostra o resultado
    var texto = document.getElementById("resultado");

    //o texto na tela passa a ser o resultado arredondado para o inteiro mais proximo adicionado a uma frase incluindo o nome da escala final
    texto.innerHTML=String("Aproximadamente " + Math.trunc(product) + "º em " + name2 + "!");
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
