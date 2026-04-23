 const btnTema = document.getElementById('btn-tema');
let oscuro = false;

btnTema.addEventListener('click', () => {
    oscuro = !oscuro;
    
    if (oscuro) {
        document.body.style.backgroundColor = '#2C2C2A';
        document.body.style.color = 'white';
        btnTema.textContent = 'Modo claro';
    } else {
        document.body.style.backgroundColor = '#f2d4c8';
        document.body.style.color = 'black';
        btnTema.textContent = 'Modo oscuro';
    }
});