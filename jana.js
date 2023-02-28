document.getElementById("botoninfo1").onclick=function() {
   
    for (i = 0; i < 9; i++) {
        /*alert("tituloCV"+i);*/
        document.getElementById("tituloCV"+i).innerHTML = info0[i] ;
      }
}

document.getElementById("botoninfo2").onclick=function() {
   
    for (i = 0; i < 9; i++) {
        /*alert("tituloCV"+i);*/
        document.getElementById("tituloCV"+i).innerHTML = info20[i] ;
      }
}

document.getElementById("botoninfo3").onclick=function() {
   
    for (i = 0; i < 9; i++) {
        /*alert("tituloCV"+i);*/
        document.getElementById("tituloCV"+i).innerHTML = info30[i] ;
      }
}

document.getElementById("botoninfo4").onclick=function() {
   
    for (i = 0; i < 9; i++) {
        /*alert("tituloCV"+i);*/
        document.getElementById("tituloCV"+i).innerHTML = info40[i] ;
      }
}




document.getElementById("boton1").onclick=function(){
    analiza("1");
}
document.getElementById("boton2").onclick=function(){
    analiza("2");
}
document.getElementById("boton3").onclick=function(){
    analiza("3");
}
document.getElementById("boton4").onclick=function(){
    analiza("4");
}

function limpiaTEXTO(conte){
    document.getElementById("tituloCV1").innerHTML = conte;
    document.getElementById("tituloCV2").innerHTML = conte;
    document.getElementById("tituloCV3").innerHTML = conte;
    document.getElementById("tituloCV4").innerHTML = conte;
    document.getElementById("tituloCV5").innerHTML = conte;
    document.getElementById("tituloCV6").innerHTML = conte;
    document.getElementById("tituloCV7").innerHTML = conte;
    document.getElementById("tituloCV8").innerHTML = conte;




}



function analiza(datoa){
    if (datoa == 1){
        
        document.getElementById("tituloCV0").innerHTML = whasa;
        limpiaTEXTO("");
    }else if (datoa==2){
        /*alert(datoa);*/
        document.getElementById("tituloCV0").innerHTML = telefono;
        limpiaTEXTO("");
    }else if(datoa ==3){
        document.getElementById("tituloCV0").innerHTML = emilio;
        limpiaTEXTO("");
    }else if(datoa ==4){
        document.getElementById("tituloCV0").innerHTML = mensaje;
        window.open("https://www.youtube.com/watch?v=VLGwREBHvk8", "ventana1" , "toolbar=NO,Location=NO,width=620,height=400, toolbar=NO, resizable=NO, Location=NO, Menubar=NO,  Titlebar=No, Status=NO");}
        limpiaTEXTO("");
}

/* Informacion del CV*/


info0 = {"1": "", "2": "","3":"","4":"","5":"","6":"","7":"","8":""};
info0[0] = "NOMBRE COMPLETO : Piccoro Daimaku";
info0[1] = "NOMBRE REAL: Carlos Salvador de la Santa Trinidad Daimaku";
info0[2] = "DNI: 000000000187";
info0[3] = "EDAD: 138 capitulos";
info0[4] = "DIRECCION: Barrio El Patriarca 147845 - nro.6 PLANETA Namekusei";
info0[5] = "TELEFONO:  52 04871 15 15465";
info0[6] = "";
info0[7] = "";

info20 = {"1": "", "2": "","3":"","4":"","5":"","6":"","7":"","8":""};
info20[0] = "Serie DRAGON BALL -- Pequeña participación como Baby Piccolo";
info20[1] = "Serie DRAGON BALL Z -- Villano de temporada";
info20[2] = "Serie DRAGON BALL Z -- Niñera de GOHAN";
info20[3] = "Serie DRAGON BALL Z SAGA FREEZER -- Anti heroe";
info20[4] = "Serie DRAGON BALL Z , GT , etc. Heroe de Relleno";
info20[5] = "12 capitulos Gritando GOHANNNN!!!!!!!!";
info20[6] = "Aparición en comercial de pañales para bebes";
info20[7] = "Actualmente conduzco mi propio canal de YOUTUBE -- Suscribanse ";

info30 = {"1": "", "2": "","3":"","4":"","5":"","6":"","7":"","8":""};
info30[0] = "Academia de actuación SON GOKU - Titulo obtenido ACTOR DE REPARTO";
info30[1] = "Instituto de Artes Marciales YAKKIE CHANG - Titulo obtenido DAN MASTER";
info30[2] = "Escuela de Manualidades ELVIRA - Titulo obtenido Costurero Nivel1";
info30[3] = "Escuela de Manualidades ROYI - Titulo obtenido Creador de esferas del dragon nivel 1";
info30[4] = "Estudios primarios completos ESCUELA KAME SCHOOL";
info30[5] = "Estudios secundarios completos ESCUELA NAMEKUNDARIA HIGH SCHOOL of Palermo";
info30[6] = "";
info30[7] = "";

info40 = {"1": "", "2": "","3":"","4":"","5":"","6":"","7":"","8":""};
info40[0] = "Emprendedor nato";
info40[1] = "Actuación fluida GOHAAAANNNNNN !!!!!";
info40[2] = "Capacidad para extraer extremidades a voluntad";
info40[3] = "Posibilidad de crear Esferas del Dragon";
info40[4] = "Alcanzar objetos lejanos extendiendo el brazo";
info40[5] = "Excelente trato como niñera de Sayayines";
info40[6] = "Capacidad como PERSONAL TRAINNER en artes marciales ";
info40[7] = "Gran afinidad con los Krillins y Chamchas";


const telefono="Mi número de teléfono es:     52 04871 15 15465";
const whasa="Mi Whatsapp es:     Código internacional NAMEKUSEI (+3578) 52 04871 15 15465";
const emilio="Mi dirección de Email es:     carlosverdolaga@dragonmail.com";
const mensaje="Aqui les dejo unas curiosidades de mi padre... ";