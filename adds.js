// Función para abrir la página con retardo
function abrirPagina() {
    // URL de la página a abrir
    const url = 'https://midgerelativelyhoax.com/k65ptt8jsv?key=e50b0feb3642cf1cfd11d3b3bcb6cab7';
    
    // Retardo de 5 segundos
    setTimeout(() => {
      // Abrir la página en una ventana nueva
      window.open(url, '_blank');
    }, 3000); // 10000 milisegundos = 10 segundos
  }
  
  // Agregar evento click a todos los elementos con clase "clcikAds"
  document.querySelectorAll('.clcikAds').forEach(elemento => {
    elemento.addEventListener('click', abrirPagina);
  });