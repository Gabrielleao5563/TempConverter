var SecaoMenu = document.getElementById("menu");
var SecaoInform = document.getElementById("inform");
var SecaoResult = document.getElementById("result");

function StartInterface(){
    SecaoMenu.style.display="none";
    SecaoInform.style.display="flex";
}

var escala1 = 0;
var escala2 = 0;

//----"Celsius = 1 / Farenheit = 2 / Kelvin = 3 / Generated1 = 4 / Generated2 = 5";

function CollectInfo(){
    var input1 = document.getElementById("FirstScale");
    var input2 = document.getElementById("SecondScale");
    var input3 = document.getElementById("Degrees");
    var filtro1 = input1.value.toUpperCase();
    var filtro2 = input2.value.toUpperCase();
    var filtro3 = input3.value;

    var erro1 = document.getElementById("error1");
    var erro2 = document.getElementById("error2");
    var erro3 = document.getElementById("error3");

    switch (filtro1){
        case "":
            erro1.style.display="block";
            erro1.innerHTML="INSIRA UMA ESCALA DE TEMPERATURA!";
            break;
        case "CELSIUS":
            erro1.style.display="none";
            break;
        case "KELVIN":
            erro1.style.display="none";
            break;
        case "FARENHEIT":
            erro1.style.display="none";
            break;
        case String(AdditionalScale1.toUpperCase()):
            erro1.style.display="none";
            break;
        case String(AdditionalScale2.toUpperCase()):
            erro1.style.display="none";
            break;
        default:
            erro1.style.display="block";
            erro1.innerHTML="ESCALA INVÁLIDA INSERIDA!";
            break;
    }

    switch (filtro2){
        case "":
            erro2.style.display="block";
            erro2.innerHTML="INSIRA UMA ESCALA DE TEMPERATURA!";
            break;
        case "CELSIUS":
            erro2.style.display="none";
            break;
        case "KELVIN":
            erro2.style.display="none";
            break;
        case "FARENHEIT":
            erro2.style.display="none";
            break;
        case String(AdditionalScale1.toUpperCase()):
            erro2.style.display="none";
            break;
        case String(AdditionalScale2.toUpperCase()):
            erro2.style.display="none";
            break;
        default:
            erro2.style.display="block";
            erro2.innerHTML="ESCALA INVÁLIDA INSERIDA!";
            break;
    }

    switch (filtro3){
        case "":
            erro3.style.display="block";
            erro3.innerHTML="INSIRA UM NÚMERO!";
            break;
        default:
            erro3.style.display="none";
            break;
    }

    //----------------------------CALCULO------------CALCULO-----------------

    var escala_1_fusao = 0;
    var escala_2_fusao = 0;

    var escala_1_ebulicao = 0;
    var escala_2_ebulicao = 0;

    var escala_1_nome = "";
    var escala_2_nome = "";

    switch (filtro1){
        case "CELSIUS":
            escala_1_nome = "CELSIUS";
            escala_1_fusao = 0;
            escala_1_ebulicao = 100;
            break;
        case "KELVIN":
            escala_1_nome = "KELVIN";
            escala_1_fusao = 273;
            escala_1_ebulicao = 373;
            break;
        case "FARENHEIT":
            escala_1_nome = "FARENHEIT";
            escala_1_fusao = 32;
            escala_1_ebulicao = 212;
            break;
        case String(AdditionalScale1.toUpperCase()):
            escala_1_nome = AdditionalScale1.toUpperCase();
            escala_1_fusao = AdditionalScale1Fusion;
            escala_1_ebulicao = AdditionalScale1Fervure;
            break;
        case String(AdditionalScale2.toUpperCase()):
            escala_1_nome = AdditionalScale2.toUpperCase();
            escala_1_fusao = AdditionalScale2Fusion;
            escala_1_ebulicao = AdditionalScale2Fervure;
            break;
    }

    switch (filtro2){
        case "CELSIUS":
            escala_2_nome = "CELSIUS";
            escala_2_fusao = 0;
            escala_2_ebulicao = 100;
            break;
        case "KELVIN":
            escala_2_nome = "KELVIN";
            escala_2_fusao = 273;
            escala_2_ebulicao = 373;
            break;
        case "FARENHEIT":
            escala_2_nome = "FARENHEIT";
            escala_2_fusao = 32;
            escala_2_ebulicao = 212;
            break;
        case String(AdditionalScale1.toUpperCase()):
            escala_2_nome = AdditionalScale1.toUpperCase();
            escala_2_fusao = AdditionalScale1Fusion;
            escala_2_ebulicao = AdditionalScale1Fervure;
            break;
        case String(AdditionalScale2.toUpperCase()):
            escala_2_nome = AdditionalScale2.toUpperCase();
            escala_2_fusao = AdditionalScale2Fusion;
            escala_2_ebulicao = AdditionalScale2Fervure;
            break;
    }

    //----------------------------CALCULO-----------CALCULO------------------

    var escala_1_final = escala_1_ebulicao - escala_1_fusao;
    var escala_2_final = escala_2_ebulicao - escala_2_fusao;

    var fracaosimples = simplify();

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

    var solicitacao = filtro3 - escala_1_fusao;

    var parte1 = 0;
    var parte2 = 0;

    read(fracaosimples);

    function read(str){
        const numbers = str.split('/');
        parte1 = numbers[0];
        parte2 = numbers[1];
    }

    fracaosimplesdivisivel = parte1 / parte2;
    var resultado = solicitacao / fracaosimplesdivisivel;

    if(escala_2_fusao > escala_1_fusao){
        resultado = resultado + escala_2_fusao;
    }

    window.alert(fracaosimplesdivisivel);

    showresult(resultado, filtro3, escala_1_nome, escala_2_nome);

    //----------------------------FINAL--------------FINAL-------------------
}

function showresult(content, solicitado, nome1, nome2){
    var info = document.getElementById("inform");
    var results = document.getElementById("result");
    var texto1 = document.getElementById("result_names");
    var texto2 = document.getElementById("result_numbers");

    info.style.display="none";
    results.style.display="flex";

    texto1.innerHTML=nome1 + " => " + nome2;
    texto2.innerHTML=solicitado + "º " + nome1 + " equivalem á aproximadamente " + Math.trunc(content) + "º " + nome2 + "!";
}

var Scale1Created = 0;
var AdditionalScale1 = "";
var AdditionalScale1Fusion = 0;
var AdditionalScale1Fervure = 0;
var Scale2Created = 0;
var AdditionalScale2 = "";
var AdditionalScale2Fusion = 0;
var AdditionalScale2Fervure = 0;

function CreateNewScale(){
    if(Scale1Created == 0){
        Scale1Created = 1;
        AdditionalScale1 = window.prompt("Qual o nome da Escala?");
        AdditionalScale1Fusion = window.prompt("Qual o ponto de fusão da escala?");
        AdditionalScale1Fervure = window.prompt("Qual o ponto de ebulição da escala?");

        var datalist = document.getElementById("Samples");
        var option = document.createElement('option');
        option.value = AdditionalScale1.toUpperCase();
        datalist.appendChild(option);
    }else{
        if(Scale2Created == 0){
            Scale2Created = 1;
            AdditionalScale2 = window.prompt("Qual o nome da Escala?");
            AdditionalScale2Fusion = window.prompt("Qual o ponto de fusão da escala?");
            AdditionalScale2Fervure = window.prompt("Qual o ponto de ebulição da escala?");

            var datalist = document.getElementById("Samples");
            var option = document.createElement('option');
            option.value = AdditionalScale2.toUpperCase();
            datalist.appendChild(option);
        }else{
            window.alert("Você não pode criar mais do que duas Escalas Personalizadas!");
        }
    }
}