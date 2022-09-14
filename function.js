    /**********BOTON ENCRIPTAR**********/
    var btn_encriptar = document.getElementById("encriptar");
    btn_encriptar.addEventListener('click', encriptar);

    function encriptar() {
        var texto = document.getElementById('input-texto').value;
        if(texto==""){
            mostrarMensaje("Debe ingresar el texto a encriptar");
            return;    
        }
        
        var texto_encriptado = texto;
        var arr = texto.toLowerCase().split('');
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] == 'a' ? 'ai' : arr[i];
            arr[i] = arr[i] == 'e' ? 'enter' : arr[i];
            arr[i] = arr[i] == 'i' ? 'imes' : arr[i];
            arr[i] = arr[i] == 'o' ? 'ober' : arr[i];
            arr[i] = arr[i] == 'u' ? 'ufat' : arr[i];
        }
        texto_encriptado=arr.join('');

        document.getElementById("solucion-inicial").style.display = 'none';
        document.getElementById("solucion-final").removeAttribute('style');

        document.getElementById('input-resultado').value = texto_encriptado;
        document.getElementById('solucion-final').scrollIntoView();
    }
    /**********BOTON DESENCRIPTAR**********/
    var btn_desencriptar = document.getElementById("desencriptar");
    btn_desencriptar.addEventListener('click', desencriptar);
    
    function desencriptar() {
        var texto = document.getElementById('input-texto').value;
        if(texto==""){
            mostrarMensaje("Debe ingresar el texto a desencriptar");
            return;    
        }
        var texto_encriptado = '';
        /*****/
        texto_encriptado = texto;
        texto_encriptado = texto_encriptado.replaceAll('ai','a');
        texto_encriptado = texto_encriptado.replaceAll('enter','e');
        texto_encriptado = texto_encriptado.replaceAll('imes','i');
        texto_encriptado = texto_encriptado.replaceAll('ober','o');
        texto_encriptado = texto_encriptado.replaceAll('ufat','u');
        /*****/
        document.getElementById("solucion-inicial").style.display = 'none';
        document.getElementById("solucion-final").removeAttribute('style');
        document.getElementById('input-resultado').value = texto_encriptado;
        document.getElementById('solucion-final').scrollIntoView();
    }
    /**********BOTON COPIAR**********/
    var btn_copiar = document.getElementById("copiar");
    btn_copiar.addEventListener('click', copiar);
    function copiar() {

        var texto = document.getElementById('input-resultado').value;

        navigator.clipboard.writeText(texto);

        mostrarMensaje("Texto copiado al portapapeles");
    }
    /*****************************************/
    function mostrarMensaje(mensaje){
        var x = document.getElementById("snackbar");
        x.innerHTML=mensaje;
        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", "");x.innerHTML=""; }, 3000);
    }
