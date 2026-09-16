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



// ==========================================
// 3. GRIDS E LISTAGENS DE VISUALIZAÇÃO (DEV 3)
// ==========================================


