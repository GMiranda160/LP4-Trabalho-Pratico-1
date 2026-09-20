// ==========================================
// 1. LÓGICA GERAL, HEADER E FOOTER (DEV 1)
// ==========================================

// FUNÇÃO DE RENDERIZAR O HEADER NO HTML > Basta chamar com: <script>renderNavbar();</script>
function renderHeader(naRaiz = true) {
    const header = document.querySelector('header');
    if (!header) return;

    const base = naRaiz ? '' : '../';
    const view = naRaiz ? 'view/' : '';

    header.innerHTML = `
        <div class="topbar">
            <img class="logo" src="${base}assets/img/logo.png" alt="Xhopii">
            <a class="btn-sair" href="${view}login.html">Sair</a>
        </div>
        <nav class="navbar">
            <a href="${base}index.html">Home</a>
            <a href="${view}cadastro-cliente.html">Cadastro Cliente</a>
            <a href="${view}cadastro-funcionario.html">Cadastro Funcionário</a>
            <a href="${view}cadastro-produto.html">Cadastro Produto</a>
            <a href="${view}ver-clientes.html">Ver Clientes</a>
            <a href="${view}ver-funcionarios.html">Ver Funcionários</a>
            <a href="${view}ver-produtos.html">Ver Produtos</a>
        </nav>
    `;
}

// FUNÇÃO DE RENDERIZAR O FOOTER NO HTML > Basta chamar com: <script>renderFooter();</script>
function renderFooter(naRaiz = true) {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const base = naRaiz ? '' : '../';

    footer.innerHTML = `
        <div class="footer-xhopii">
        <div class="footer-rows">
            <div class="col-atendimento">
                <h3>ATENDIMENTO AO CLIENTE</h3>
                <div class="col-links">
                    <a>Central de Ajuda</a>
                    <a>Como Comprar</a>
                    <a>Métodos de Pagamento</a>
                    <a>Garantia Xhopii</a>
                    <a>Devolução e Reembolso</a>
                    <a>Fale Conosco</a>
                    <a>Ouvidoria</a>
                </div>
            </div>
            <div class="col-sobre">
                <h3>SOBRE A XHOPII</h3>
                <div class="col-links">
                    <a>Sobre Nós</a>
                    <a>Políticas Xhopii</a>
                    <a>Política de Privacidade</a>
                    <a>Programa de Afiliados da Xhopii</a>
                    <a>Seja um Entregador Xhopii</a>
                    <a>Ofertas Relâmpago</a>
                    <a>Xhopii Blog</a>
                    <a>Empresa</a>
                </div>
            </div>
            <div class="col-pagamento">
                <h3>PAGAMENTO</h3>
                <div class="col-pagamento-grid">
                    <img src="${base}assets/img/formas_pagamento/pix.jpg">
                    <img src="${base}assets/img/formas_pagamento/boleto.jpg">
                    <img src="${base}assets/img/formas_pagamento/american_express.png">
                    <img src="${base}assets/img/formas_pagamento/visa.svg">
                    <img src="${base}assets/img/formas_pagamento/mastercard.svg">
                    <img src="${base}assets/img/formas_pagamento/hipercard.svg">
                    <img src="${base}assets/img/formas_pagamento/elo.png">
                </div>
            </div>
            <div class="col-siga-nos">
                <h3>SIGA-NOS</h3>
                <div>
                    <a><img src="${base}assets/img/redes_sociais/instagram.png">Instagram</a>
                    <a><img src="${base}assets/img/redes_sociais/twitter.png">Twitter</a>
                    <a><img src="${base}assets/img/redes_sociais/facebook.png">Facebook</a>
                    <a><img src="${base}assets/img/redes_sociais/youtube.svg">Youtube</a>
                    <a><img src="${base}assets/img/redes_sociais/linkedin.svg">LinkedIn</a>
                </div>
            </div>
            <div class="col-app">
                <h3>BAIXE O APP</h3>
                <img src="${base}assets/img/links/qr_code.png">
                <a><img src="${base}assets/img/links/playstore.png"></a>
                <a><img src="${base}assets/img/links/applestore.png"></a>
            </div>
        </div>
        <hr class="linha-horizontal"></hr>
        <div class="trademark">© 2023 Xhopii. Todos os direitos acadêmicos reservados</div>
        </div>
    `;
}

// ==========================================
// 2. FORMULÁRIOS DE CADASTRO (DEV 2)
// ==========================================

// FUNÇÃO QUE EXIBE O NOME DO ARQUIVO SELECIONADO NO SELETOR DE FOTO
document.querySelectorAll('.input-arquivo').forEach((input) => {
    input.addEventListener('change', () => {
        const nome = input.files.length ? input.files[0].name : 'Nenhum arquivo escolhido';
        const alvo = input.closest('.campo-foto').querySelector('.arquivo-nome');
        if (alvo) alvo.textContent = nome;
    });
});



// ==========================================
// 3. GRIDS E LISTAGENS DE VISUALIZAÇÃO (DEV 3)
// ==========================================

// FUNÇÃO DE RENDERIZAR O GRID DE PRODUTOS NO HTML
// Chamar com: <script>renderGridProdutos(10);</script>
function renderGridProdutos(quantidade) {
    const grid = document.querySelector('.grid-layout');
    if (!grid) return;

    const card = `
        <div class="card-produto">
            <img src="../assets/img/camisa/camisa_preta.png">
            <p class="card-nome-produto">Camisa Desenvolvedor Front-End</p>
            <div class="card-descricao-produto">
                <h4>Fabricante:</h4><p>Eletiva Uniformes</p>
                <h4>Descrição:</h4><p>Uma camisa ideal para progamar por mais de 12 horas.</p>
            </div>
            <div class="card-preco-produto">
                <h4>R$ 59,90</h4><p>171 disponíveis</p>
            </div>
        </div>
    `;

    grid.innerHTML = card.repeat(quantidade);
}
