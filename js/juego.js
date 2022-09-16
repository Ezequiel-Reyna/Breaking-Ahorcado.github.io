
var tp = document.querySelector("#tp");
var teq = document.querySelector("#teq");
var logo = document.querySelector("#logo");
var botonIniciar = document.querySelector("#iniciar");
var mostrarPalabra = document.querySelector("#mostrarPalabra");
var palabraSecreta = document.querySelector("#palabraSecreta");
var ingresarPalabra = document.querySelector("#ingresarPalabra");
var palabraDescifrada = document.querySelector("#palabraDescifrada");
var botonIncluir = document.querySelector("#btnanhadir");
var botonGuardarPalabra = document.querySelector("#botonGuardarPalabra");
var botonCancelar = document.querySelector("#botonCancelar");
var botonMostrarLista = document.querySelector("#botonMostrarLista");
var ingresarLetra = document.querySelector("#ingresarLetra");
var botonIngresarLetra = document.querySelector("#botonIngresarLetra");
var botonDesistir = document.querySelector("#botonDesistir");
var listaPalabras = ["ACTINIO", "ALUMINIO", "AMERICIO", "ANTIMONIO", "ARGON", "ARSENICO","ASTATO", "AZUFRE", "BARIO", "BERILIO","BERKELIO","BISMUTO","BOHRIO","BORO","BROMO","CADMIO","CALCIO","CALIFORNIO","CARBONO","CERIO","CESIO","CLORO","COBALTO","COBRE","COPERNICIO","CROMO","CURIO","DARMSTATIO","DISPROSIO","DUBNIO","EINSTENIO","ERBIO","ESCANDIO","ESTAÑO","ESTRONCIO","EUROPIO","FERMIO","FLEROVIO","FLUOR","FOSFORO","FRANCIO","GADOLINIO","GALIO","GERMANIO","HAFNIO","HASSIO","HELIO","HIDROGENO","HIERRO","HOLMIO","INDIO","IRIDIO","ITERBIO","ITRIO","KRIPTON","LANTANO","LAURENCIO","LITIO","LIVERMORIO","LUTECIO","MAGNESIO","MANGANESO","MEITNERIO","MENDELEVIO","MERCURIO","MOLIBDENO","MOSCOVIO","NEODIMIO","NEON","NEPTUNIO","NIHONIO","NIOBIO","NIQUEL","NITROGENO","NOBELIO","OGANESON","ORO","OSMIO","OXIGENO","PALADIO","PLATA","PLATINO","PLOMO","PLUTONIO","POLONIO","POTASIO","PRASEODIMIO","PROMETIO","PROTACTINIO","RADIO","RADON","RENIO", "RODIO", "ROENTGENIO", "RUBIDIO", "RUTENIO", "RUTHERFORDIO", "SAMARIO", "SEABORGIO", "SELENIO", "SILICIO", "SODIO", "TALIO", "TANTALIO", "TECNECIO","TELURO","TENESO","TERBIO","TITANIO","TORIO","TULIO","URANIO","VANADIO","WOLFRAMIO","XENON","YODO","ZINC","ZIRCORNIO"];
var letrasErradas = document.querySelector("#letrasErradas");
var verdugo = document.querySelector("#verdugo");
var faseVerdugo = ["", "images/base.png", "images/a.png", "images/ah.png", "images/aho.png", "images/ahor.png", "images/ahorc.png", "images/ahorca.png", "images/ahorcad.png", "images/perdiste.png"];
var faseNumero= 0;
    tp.style.display = "none";
    teq.style.display = "none";
    logo.style.display = "";
    ingresarPalabra.style.display = "none";
    botonGuardarPalabra.style.display = "none";
    botonCancelar.style.display = "none";
    document.querySelector("#notificacion").style.display = "none";

    palabraSecreta.style.display = "none";
    botonIncluir.style.display = "";
    botonMostrarLista.style.display = "none";
    ingresarLetra.style.display = "none";
    botonIngresarLetra.style.display = "none";
    botonDesistir.style.display = "none";
    letrasErradas.style.display = "none";
    verdugo.style.display = "none";
    document.querySelector("#horca").style.display = "none";



    botonIniciar.addEventListener("click", function() {
        teq.style.display = "none";
        logo.style.display = "none";
        botonIniciar.style.display = "none";
    botonIncluir.style.display = "none";

    ingresarPalabra.style.display = "none";
    botonGuardarPalabra.style.display = "none";
    botonCancelar.style.display = "none";
    document.querySelector("#notificacion").style.display = "none";

    palabraSecreta.style.display = "";
    
    botonMostrarLista.style.display = "";
    ingresarLetra.style.display = "";
    botonIngresarLetra.style.display = "";
    botonDesistir.style.display = "";
    letrasErradas.style.display = "";
    verdugo.style.display = "";
    document.querySelector("#horca").style.display = "";

    let palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    ingresarLetra.value = "";
    letrasErradas.innerHTML = "";  
    palabraSecreta.innerHTML = ""; 
    mostrarPalabra.innerHTML = palabra;
    faseNumero = 0;
    verdugo.src = faseVerdugo[0];
    ingresarLetra.focus();
    let palabraAsterisco = "";
    for (let i = 0; i < palabra.length; i++) {
        palabraAsterisco += "*";
    }
    palabraSecreta.innerHTML = palabraAsterisco;

});

ingresarPalabra.style.display = "none";
botonGuardarPalabra.style.display = "none";
botonCancelar.style.display = "none";
document.querySelector("#notificacion").style.display = "none";

botonIncluir.addEventListener("click", function() {
    tp.style.display = "";
    teq.style.display = "";
    logo.style.display = "none";
    botonIniciar.style.display = "none";
    ingresarPalabra.value = "";    
    ingresarPalabra.style.display = "";
    ingresarPalabra.focus();
    botonGuardarPalabra.style.display = "";
    botonCancelar.style.display = "";
    document.querySelector("#notificacion").style.display = "";

    palabraSecreta.style.display = "none";
    botonIncluir.style.display = "none";
    botonMostrarLista.style.display = "none";
    ingresarLetra.style.display = "none";
    botonIngresarLetra.style.display = "none";
    botonDesistir.style.display = "none";
    letrasErradas.style.display = "none";
    verdugo.style.display = "none";
    document.querySelector("#horca").style.display = "none";

});

botonGuardarPalabra.addEventListener("click", function() {
    
    let palabraNueva = ingresarPalabra.value.toUpperCase();
    let duplicado = listaPalabras.indexOf(palabraNueva);
    console.log(duplicado);
    if (duplicado > -1) {
        alert("Palabra ya existe.");  
    } else if (palabraNueva == "") {
        alert("No ingreso una palabra.")
    } else {
        listaPalabras.push(palabraNueva); 
    }
    
    tp.style.display = "none";
    logo.style.display = "none";
    teq.style.display = "none";
    ingresarPalabra.style.display = "none";
    botonGuardarPalabra.style.display = "none";
    botonCancelar.style.display = "none";
    document.querySelector("#notificacion").style.display = "none";
    botonIncluir.style.display = "none";

    palabraSecreta.style.display = "";
    botonMostrarLista.style.display = "";
    ingresarLetra.style.display = "";
    botonIngresarLetra.style.display = "";
    botonDesistir.style.display = "";
    letrasErradas.style.display = "";
    verdugo.style.display = "";
    document.querySelector("#horca").style.display = "";

    let palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    ingresarLetra.value = "";
    letrasErradas.innerHTML = "";  
    palabraSecreta.innerHTML = ""; 
    mostrarPalabra.innerHTML = palabra;
    faseNumero = 0;
    verdugo.src = faseVerdugo[0];
    ingresarLetra.focus();
    let palabraAsterisco = "";
    for (let i = 0; i < palabra.length; i++) {
        palabraAsterisco += "*";
    }
    palabraSecreta.innerHTML = palabraAsterisco;

    console.log(listaPalabras);


});



botonCancelar.addEventListener("click", function() {
    console.log(listaPalabras);
    tp.style.display = "none";
    logo.style.display = "";
    botonIniciar.style.display = "";
    botonIncluir.style.display = "";
    ingresarPalabra.style.display = "none";
    botonGuardarPalabra.style.display = "none";
    botonCancelar.style.display = "none";
    document.querySelector("#notificacion").style.display = "none";
    teq.style.display = "none";
    palabraSecreta.style.display = "none";
    botonMostrarLista.style.display = "none";
    ingresarLetra.style.display = "none";
    botonIngresarLetra.style.display = "none";
    botonDesistir.style.display = "none";
    letrasErradas.style.display = "none";
    verdugo.style.display = "none";
    document.querySelector("#horca").style.display = "none";
    
    var btniniciar = document.querySelector("#iniciar")
    btniniciar.addEventListener("click", playOrPause)
    var reproduciendose = 0;
    var audio = new Audio("sound/game.mp3");
    function playOrPause() {
    reproduciendose = reproduciendose + 1;
    if (reproduciendose == 1) {
    audio.play();
    audio.loop=true;
    } else {
    audio.pause();
    reproduciendose = 0;
    }
    return(reproduciendose);
    }
    });




botonMostrarLista.addEventListener("click", function() {

    ingresarLetra.style.display = "";
    botonIngresarLetra.style.display = "";
    botonIncluir.style.display = "none";

    let palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    ingresarLetra.value = "";
    letrasErradas.innerHTML = "";  
    palabraSecreta.innerHTML = ""; 
    mostrarPalabra.innerHTML = palabra;
    faseNumero = 0;
    verdugo.src = faseVerdugo[0];
    ingresarLetra.focus();
    let palabraAsterisco = "";
    for (let i = 0; i < palabra.length; i++) {
        palabraAsterisco += "*";
    }
    palabraSecreta.innerHTML = palabraAsterisco;
    
});



botonIngresarLetra.addEventListener("click", function() {
    var btniniciar = document.querySelector("#botonIngresarLetra")
    btniniciar.addEventListener("click", playOrPause)
    var reproduciendose = 0;
    var audio = new Audio("sound/game.mp3");
    function playOrPause() {
    reproduciendose = reproduciendose + 1;
    if (reproduciendose == 1) {
    audio.play();
    audio.loop=true;
    } else {
    audio.pause();
    reproduciendose = 0;
    }
    return(reproduciendose);
    }
    
    let palabraElegida = mostrarPalabra.innerHTML;  
    console.log(palabraElegida);
    
    ingresarLetra.focus();

    let letraIngresada = ingresarLetra.value.toUpperCase();
    console.log(letraIngresada);
    
    let secretWordEntrada = palabraSecreta.innerHTML;
    console.log(secretWordEntrada);

    let letrasInvalidas = letrasErradas.innerHTML;
    console.log(letrasInvalidas);

    let secretWordSalida = "";

    let existe = 0;
    let repetida = 0;

    for (let i = 0; i < letrasInvalidas.length; i++) {
        if (letraIngresada == letrasInvalidas[i]) {
            repetida++;    
        }        
    }
   
    for (let i = 0; i < palabraElegida.length; i++) {
        if (palabraElegida[i] == letraIngresada) {
            secretWordSalida += letraIngresada;
            existe++;
        } else if (secretWordEntrada[i] != "*") {
            secretWordSalida += secretWordEntrada[i];
        } else {
            secretWordSalida += "*";
        }        
    }

    if (existe == 0) {
        if (repetida != 0) {
            alert("Ya ingreso esta letra, intente de nuevo.");
            console.log("Letra repetida");
        } else {
            letrasInvalidas += letraIngresada;
            faseNumero++;
            verdugo.src = faseVerdugo[faseNumero];
            console.log(faseNumero);    
        }        
    }

    if (palabraElegida == secretWordSalida) {
        console.log("ganaste");
        ingresarLetra.style.display = "none";
        botonIngresarLetra.style.display = "none";
        verdugo.src = "images/ganaste.png";
    }
    
    if (faseNumero == 9) {
        console.log("perdiste");
        ingresarLetra.style.display = "none";
        botonIngresarLetra.style.display = "none";
        verdugo.src = "images/perdiste.png";
    }    
        

    palabraSecreta.innerHTML = secretWordSalida;
    letrasErradas.innerHTML = letrasInvalidas;

    ingresarLetra.value = "";

});

botonDesistir.addEventListener("click", function() {
    console.log(listaPalabras);

    botonIniciar.style.display = "";
    botonIncluir.style.display = "";

    ingresarPalabra.style.display = "none";
    botonGuardarPalabra.style.display = "none";
    document.querySelector("#botonCancelar").style.display = "none";
    document.querySelector("#notificacion").style.display = "none";

    palabraSecreta.style.display = "none";
    botonMostrarLista.style.display = "none";
    ingresarLetra.style.display = "none";
    botonIngresarLetra.style.display = "none";
    botonDesistir.style.display = "none";
    letrasErradas.style.display = "none";
    verdugo.style.display = "none";
    document.querySelector("#horca").style.display = "none";
});
