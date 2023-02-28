document.getElementById("botoninfo1").onclick=function() {
   
    for (i = 0; i < 9; i++) {
        document.getElementById("tituloCV"+i).innerHTML = info0[i] ;
      }
}

document.getElementById("botoninfo2").onclick=function() {
   
    for (i = 0; i < 9; i++) {
        document.getElementById("tituloCV"+i).innerHTML = info20[i] ;
      }
}

document.getElementById("botoninfo3").onclick=function() {
   
    for (i = 0; i < 9; i++) {
        document.getElementById("tituloCV"+i).innerHTML = info30[i] ;
      }
}

document.getElementById("botoninfo4").onclick=function() {
   
    for (i = 0; i < 9; i++) {
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
        limpiaTEXTO("");}
}

/* Informacion del CV*/


info0 = {"1": "", "2": "","3":"","4":"","5":"","6":"","7":"","8":""};
info0[0] = "NOMBRE COMPLETO : Carlos Salvador de la Santa Trinidad";
info0[1] = "FECHA DE NACIMIENTO :  05/10/1997";
info0[2] = "DNI: 000000000187";
info0[3] = "EDAD: 28 años";
info0[4] = "DIRECCION: Barrio El Palomar 147845 - nro.6 ";
info0[5] = "LOCALIDAD: San Justo";
info0[6] = "TELEFONO:  52 04871 15 15465";
info0[7] = "";

info20 = {"1": "", "2": "","3":"","4":"","5":"","6":"","7":"","8":""};
info20[0] = "2016-2017 Fruteria LOS AMIGOS - Encargado del deposito";
info20[1] = "2017-2018 SUPERMERCADO CORTO - Repositor";
info20[2] = "2020-2021 REMISERIA CACHO - Recepcionista";
info20[3] = "2021-2022 KIOSKO NIKO - Atención al público";
info20[4] = "2022-2023 Empresa de transporte UKELELE - empleado administrativo";
info20[5] = "";
info20[6] = "";
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
info40[1] = "Gran desempeño en acarreo de materiales";
info40[2] = "Capacidad para resolver situaciones";
info40[3] = "Fluidez en atención al público";
info40[4] = "Manejo del ingles";
info40[5] = "Excelente trato";
info40[6] = "";
info40[7] = "";


const telefono="Mi número de teléfono es:     52 04871 15 15465";
const whasa="Mi Whatsapp es:     Código internacional (+3578) 52 04871 15 15465";
const emilio="Mi dirección de Email es:     carlosverdolaga@dragonmail.com";
const mensaje="Mi dirección de Facebook es: https://www.facebook.com/carlossalvador34565";