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
    var filtro3 = input3.value.toUpperCase();

    switch (filtro1) {
        case "":
            break;
        case "CELSIUS":
            break;
        case "FARENHEIT":
            break;
        case "KELVIN":
            break;
        case String(AdditionalScale1.toUpperCase()):
            break;
        case String(AdditionalScale2.toUpperCase()):
            break;
    }
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
        option.value = AdditionalScale1;
        datalist.appendChild(option);
    }else{
        if(Scale2Created == 0){
            Scale2Created = 1;
            AdditionalScale2 = window.prompt("Qual o nome da Escala?");
            AdditionalScale2Fusion = window.prompt("Qual o ponto de fusão da escala?");
            AdditionalScale2Fervure = window.prompt("Qual o ponto de ebulição da escala?");

            var datalist = document.getElementById("Samples");
            var option = document.createElement('option');
            option.value = AdditionalScale2;
            datalist.appendChild(option);
        }else{
            window.alert("Você não pode criar mais do que duas Escalas Personalizadas!");
        }
    }
}