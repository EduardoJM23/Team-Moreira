// CARDÁPIO HAMBÚRGUER
constante botão de menu = documento.obterElementoPorID("menuBtn");
constante links de navegação = documento.obterElementoPorID("navLinks");

botão de menu.adicionar ouvinte de eventos("clique", () => {
    // Usa a classe 'active' definida no CSS de responsividade
    links de navegação.lista de classes.alternar("ativo");
});

// DETECTA O TIPO DE DISPOSITIVO (Pode manter o restante do seu código JS)
função detectar dispositivo() {
}

// FUNÇÃO PARA ABRIR IMAGEM NO MODAL
documento.querySelectorAll('.imagens img').para cada(imagem => {
    imagem.adicionar ouvinte de eventos('clique', () => {
        constante modal = documento.obterElementoPorID('modal');
        constante modalImg = documento.obterElementoPorID('imgModal');

        modal.estilo.mostrar = "bloquear";
        modalImg.src = imagem.src;
    });
});

// MODAL FECHAR
função fecharImagem() {
    documento.obterElementoPorID('modal').estilo.mostrar = "nenhum";
}

// Fechar clicando fora da imagem
janela.adicionar ouvinte de eventos('clique', função(e) {
    constante modal = documento.obterElementoPorID('modal');
    se (e.alvo === modal) {
        modal.estilo.mostrar = "nenhum";
    }
});
