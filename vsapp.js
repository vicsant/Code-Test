function Validacion(a){
   var vacio = "vacio"
  if(a.value == "")

       document.getElementById(vacio).style.display='';
   else
        document.getElementById(vacio).style.display='none';
 
}




function Validacion1(b){
   var v1 = "vacio1"  ;
  if(b.value == "")

       document.getElementById(v1).style.display='';
   else
        document.getElementById(v1).style.display='none';
 
}




function Validacion2(c){
   var v2 = "vacio2"  ;
  if(c.value == "")

       document.getElementById(v2).style.display='';
   else
        document.getElementById(v2).style.display='none';
 
}






function Validacion3(d){
   var v3 = "vacio3"  ;
  if(d.value == "")

       document.getElementById(v3).style.display='';
   else
        document.getElementById(v3).style.display='none';
 
}









//Esta funcion se encarga de mostrar con espacios cada letra del texto ingresado.
function Espacios() {

document.getElementById('textoutput').innerHTML=document.getElementById('textinput').value.split('').join(' ');;  
    
    }
    


//Esta funcion se encarga de mostrar en forma reversa el texto ingresado.

function Reverso() {



    document.getElementById('lastoutput').innerHTML=document.getElementById('lastinput').value.split('').reverse().join('');;

}


//Funcion encargada de llamar a otra funcion por medio de ID. En este caso llama a la Funcion ComidaFavorita.

function MostrarComida(){

      

    var mostrar = document.getElementById('comidainput');
    var comidainput = document.getElementById('comidaoutput');
    comidaoutput.value = Comidafavorita(mostrar.value);
}
    
//Funcion encargada de realizar el procedimiento de convertir los caracteres ingresados a codigo ASCII.     
function Comidafavorita(comida) {

    var a = (comida), b = a.length, charsa = [], mas = 0;

for (var i = 0; i < b; i++) {

    var caracter = a.charCodeAt(i);
    charsa.push(caracter);
    mas += caracter;

};

if(charsa.length < 1){

    return '';

}

     var llamarr = charsa.sort(),
     contarr = llamarr.length,
     numarray  = [],
     cuentarray = [],
     mostrar;


for (var i = 0; i < contarr; i++) {

    var array = llamarr[i];
        

if(array !== mostrar){

    numarray.push(array);
    cuentarray.push(1);

}

else

{
     cuentarray[cuentarray.length - 1]++;
}

     mostrar = array;

};

     charsa = [];

     var numdearray = numarray.length;

//Proceso el cual multiplica el numero de caracteres repetidos y los muesta en uno solo.
for (var i = 0; i < numdearray; i++) {

    var cadenarray = null,
        numing = numarray[i],
        vecesarray = cuentarray[i];

if(vecesarray > 1) {
    cadenarray = ['(',numing,' x ',vecesarray,')'].join('');

}

else

{

    cadenarray = numing;

}

     charsa.push(cadenarray);

};
//Resultado
     charsa = [charsa.join(' + '), ' = ', mas];

     return charsa.join('');

}


//Esta es la funcion que permite que no se ingrese ni un caracter al menos que sea numero la utiliza Numero Favorito.
function SoloNumero(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


//Funcion encargada de llamar a otra funcion por medio de ID. En este caso llama a la Funcion Factor.

function MostrarNumero(){

    var mostrar = document.getElementById('n1input');
    var n1input = document.getElementById('n2output');
    n2output.value = Factor(mostrar.value);
}


//Funcion encargada de realiza el procedimiento de mostar el factor del numero ingresado.

function Factor (numero) {

    var fact = parseInt(numero, 10);


if(isNaN(fact)){

    return '';

    }

    var facrray = [];

for (var i = 1; i < fact; i++) {

if(fact % i === 0){

    facrray.push(i);

    }

};

    return facrray.pop();
}


//Funcion encargada de llamar a otra funcion por medio de ID. En este caso llama a la Funcion DiaFavorito.

function MostrarDia(){

    var mostrar = document.getElementById('d1input');
    var d1input = document.getElementById('d2output');
    d2output.value = Diafavorito(mostrar.value);
}

//Funcion encargada de realizar el procedimiento de mostrar las 6 proximas fechas del dia elegido.

function Diafavorito (dia) {

    var dias = parseInt(dia, 10);

if(isNaN(dias)){

        return '';
}

    var fecha = new Date(),
        fecharray = [];

for (var i = 6; i > 0; i--) {
    var factor = dias - fecha.getDay() < 1 ? 7 : 0,
    fechadia = new Date(fecha.getTime() + (((factor + dias) - fecha.getDay()) * 86400000));
    fecharray.push(fechadia.toLocaleDateString('en-US', {

        day: 'numeric',
        month: 'numeric',
        year: '2-digit'

}));
        
    fecha = fechadia;

};

    return fecharray.join(', ');

}


//Funcion encargada de llamar a otra funcion por medio de ID. En este caso llama a la Funcion ColorFavorito.

function MostrarColor(){

    var mostrar = document.getElementById('c1input');
    var c1input = document.getElementById('c2output');
    c2output.value = ColorFavorito(mostrar.value);

}

//Funcion encargada de realizar el procedimiento de mostrar el valor hex y el color elegido de la lista de colores.

function hex (hexx) {
    return (Math.round(parseFloat(hexx)) + 0x10000).toString(16).substring(3).toUpperCase();
}


function ColorFavorito (colores) {
    var cuadro = document.getElementById('cuadrodecolor'),
        color1 = null,
        hexarray = ['#'];

    cuadro.style.backgroundColor = colores !== '' ? colores : 'white';
    cuadro.style.borderColor = colores !== '' ? colores: 'black';

    if(colores !== ''){
        color1 = window.getComputedStyle(cuadro).backgroundColor;

        color1  = color1.replace('rgb(', '').replace(')', '').split(', ');

        for (var i = 0; i < 3; i++) {
            hexarray.push( hex(color1[i]) );
        };

        return hexarray.join('');
    }else{
        return '';
    }
}
