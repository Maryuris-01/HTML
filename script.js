document.getElementById("boton").addEventListener("click", function(event) {

    event.preventDefault(); // Evita que el formulario se envíe

     
    alert("Formulario enviado correctamente");
});


//document llamamos al documento HTML, 
// getElementById es un método que nos permite acceder a un elemento específico 
// del documento utilizando su ID, en este caso "boton". Luego
// addEventListener es un método que nos permite escuchar eventos en un elemento
// en este caso, estamos escuchando el evento "click" en el botón. 
// function(event) es una función anónima que se ejecutará cuando se haga clic en el botón.
// event.preventDefault() es un método que evita que el comportamiento predeterminado del evento ocurra, en este caso, evita que el formulario se envíe cuando se hace clic en el botón. 
// alert("Formulario enviado correctamente") muestra una alerta en la pantalla con el mensaje "Formulario enviado correctamente" cuando se hace clic en el botón.