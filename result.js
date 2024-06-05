function pergunta(){
var idade = document.getElementById('idade').value;
var resultado = (idade / 2) + 7;
var resultM = (idade - 7) * 2 + 1;

if (resultado % 2 != 0){
    resultado = Math.floor(resultado);
}
if (idade < 13){
    document.getElementById('resultadoS').innerHTML = "Você não pode namorar!";
}
    else{
    document.getElementById('resultadoS').innerHTML = `Você só pode namorar alguém a partir dos: ${resultado} até ${resultM}`;
}
}


function NamoroPermitido(){
    var idade1 = document.getElementById('idade1').value;
    var idade2 = document.getElementById('idade2').value;

idade1 = Math.min(idade1, idade2);
idade2 = Math.max(idade1, idade2);

    var min_par1 = (idade1 / 2) + 7;
    var max_par1 = (idade1 - 7) * 2;
    var min_par2 = (idade2 / 2) + 7;
    var max_par2 = (idade2 - 7) * 2;

if (min_par1 % 2 != 0){
    min_par1 = Math.floor(min_par1);
}
if (min_par2 % 2 != 0){
    min_par2 = Math.floor(min_par2);
}
if (max_par1 % 2 != 0){
    max_par1 = Math.round(max_par1);
}
if (max_par2 % 2 != 0){
    max_par2 = Math.round(max_par2);
}
if(idade1 > 100 || idade2 > 100){
    document.getElementById('resultadoC').innerHTML = "Não pode namorar, procure a funeraria!";
}
if (idade1 < 13 || idade2 < 13){
    document.getElementById('resultadoC').innerHTML = "Não pode namorar, vai comer barro!";
}
else if(idade1 >= min_par2){
    document.getElementById('resultadoC').innerHTML = "Pode namorar, façam BBs!";
}else{
    document.getElementById('resultadoC').innerHTML = "Não podem namorar, encontre outra pessoa rapaz!";
}
} 


function namoroTrisal(){
     var tri1 = document.getElementById('tri1').value;
     var tri2 = document.getElementById('tri2').value;
     var tri3 = document.getElementById('tri3').value;
     
    var idades = [tri1, tri2, tri3];
    idades.sort((a, b) => a - b);
    tri1 = idades[0];
    tri2 = idades[1];
    tri3 = idades[2];

    var min_tri1 = (tri1/ 2) + 7;
    var max_tri1 = (tri1 - 7) * 2;
    var min_tri2 = (tri2 / 2) + 7;
    var max_tri2 = (tri2 - 7) * 2;
    var min_tri3 = (tri3 / 2) + 7;
    var max_tri3 = (tri3 - 7) * 2;

if (min_tri1 % 2 != 0){
    min_tri1 = Math.floor(min_tri1);
}
if (min_tri2 % 2 != 0){
    min_tri2 = Math.floor(min_tri2);
}
if (min_tri3 % 2 != 0){
    min_tri3 = Math.floor(min_tri3);
}
if (max_tri1 % 2 != 0){
    max_tri1 = Math.round(max_tri1);
}
if (max_tri2 % 2 != 0){
    max_tri2 = Math.round(max_tri2);
}
if (max_tri3 % 2 != 0){
    max_tri3 = Math.round(max_tri3);
}
if (tri1 > 100 || tri2 > 100 || tri3 > 100){
    document.getElementById('resultadoT').innerHTML = "Não podem namorar, procure a funeraria!";
}
else if (tri1 < 13 || tri2 < 13 || tri3 < 13){
    document.getElementById('resultadoT').innerHTML = "Não pode namorar";
}
else if (tri1 >= min_tri2 && tri2 >= min_tri3 && tri3 >= min_tri1){
    document.getElementById('resultadoT').innerHTML = "Pode namorar, faça BBs!";
}else{
    document.getElementById('resultadoT').innerHTML = "Não podem namorar!";
}
}
