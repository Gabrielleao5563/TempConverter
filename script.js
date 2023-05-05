//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//VARIAVEIS

var extrascale1 = 0;
var extrascale2 = 0;

var extrascale1name = "";
var extrascale2name = "";

var extrascale1fusion = 0;
var extrascale2fusion = 0;

var extrascale1boiling = 0;
var extrascale2boiling = 0;

var scale1chosed = 0;
var scale1chosed = 0;

var basedividida = 0;

var base1total = 0;
var base2total = 0;

var resultado = 0;

var quemexterno = 0;

var solicitado = 0;

var esc1nome = "";
var esc2nome = "";

var esc1fusion = 0;
var esc2fusion = 0;

var esc1boiling = 0;
var esc2boiling = 0;

var div = document.getElementById("selectablediv");

//CRIAÇÃO DE ESCALAS PERSONALIZADAS

function create_scale(){

    switch(extrascale1){

        case 0:

            extrascale1name = window.prompt("Qual o nome da escala?");
            extrascale1fusion = window.prompt("Qual a temperatura de fusão da escala?");
            extrascale1boiling = window.prompt("Qual a temperatura de hebulição da escala?");
            extrascale1 = 1;
            break;  

        case 1:

            switch(extrascale2){
            
                case 0:

                    extrascale2name = window.prompt("Qual o nome da escala?");
                    extrascale2fusion = window.prompt("Qual a temperatura de fusão da escala?");
                    extrascale2boiling = window.prompt("Qual a temperatura de hebulição da escala?");
                    extrascale2 = 1;
                    break;
                
                case 1:
                    
                    window.alert("Você não pode criar mais do que duas escalas personalizadas!");
                    break;
            }

            break;
    }

}

//ABRIR ABA DE SELEÇÃO DE ESCALA

function chose_scale(quem){

    div.style.left="50%";

    var option1 = document.getElementById("option4");
    var option2 = document.getElementById("option5");

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

    quemexterno = quem;
}

//SELECIONAR AS ESCALAS

function select(qual){

    var valornome = "";
    var valorfusion = 0;
    var valorboiling = 0;

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

    if(quemexterno == 1){
        esc1nome = valornome;
        esc1fusion = valorfusion;
        esc1boiling = valorboiling;
    }else{
        esc2nome = valornome;
        esc2fusion = valorfusion;
        esc2boiling = valorboiling;
    }

    div.style.left="-500%";

    var btn = document.getElementById(String("input" + quemexterno));

    btn.innerHTML=valornome;

    if(quemexterno == 1){
        scale1chosed = 1;
    }else{
        scale2chosed = 1;
    }

    convert();

}

//CONVERTER

function convert(){

    if(scale1chosed == 0){
        return;
    }

    if(scale2chosed == 0){
        return;
    }

    var filtro = document.getElementById("settemperature");

    var solicitado = filtro.value;

    solicitado = solicitado - esc1fusion;

    base1total = esc1boiling - esc1fusion;
    base2total = esc2boiling - esc2fusion;

    if(esc2fusion <= esc1fusion){
        basedividida = base2total / base1total;
    }else{
        basedividida = base2total / base1total;
    }

    resultado = Math.floor((solicitado * basedividida) + esc2fusion);

    console.log("Base: " + base1total + "/" + base2total + " Resultado: " + resultado);

    showresult(solicitado, esc1nome, esc2nome, resultado);
}

//MOSTRAR O RESULTADO

function showresult(starting, name1, name2, product){

    var texto = document.getElementById("resultado");

    texto.innerHTML=String("Aproximadamente " + Math.trunc(product) + "º em " + name2 + "!");
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-