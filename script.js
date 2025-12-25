// MENU HAMBURGUER
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    // Usa a classe 'active' definida no CSS de responsividade
    navLinks.classList.toggle("active");
});

// DETECTA O TIPO DE DISPOSITIVO (Pode manter o restante do seu código JS)
function detectDevice() {
}

// FUNÇÃO PARA ABRIR IMAGEM NO MODAL
document.querySelectorAll('.imagens img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('imgModal');

        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// FECHAR MODAL
function fecharImagem() {
    document.getElementById('modal').style.display = "none";
}

// Fechar clicando fora da imagem
window.addEventListener('click', function(e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
