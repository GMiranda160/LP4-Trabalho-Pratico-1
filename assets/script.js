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
        <a href="produto.html" style="text-decoration: none;">
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
        </a>
    `;

    grid.innerHTML = card.repeat(quantidade);
}

// DADOS DE CLIENTES CADASTRADOS (EXEMPLO HARDCODED - SEM CADASTROS REAIS AINDA)
const clientesExemplo = [
    {
        nome: "João",
        sobrenome: "da Silva",
        cpf: "123.456.789-00",
        nascimento: "1990-03-12",
        telefone: "(11) 98765-4321",
        email: "joao.silva@exemplo.com"
    }
];

// FUNÇÃO DE RENDERIZAR O GRID DE CLIENTES NO HTML
// Recebe a lista de clientes como parâmetro. Chamar com: <script>renderGridClientes(clientes);</script>
function renderGridClientes(clientes) {
    const grid = document.querySelector('.grid-layout--clientes');
    if (!grid) return;

    grid.innerHTML = clientes.map((cliente) => {
        const nomeCompleto = `${cliente.nome} ${cliente.sobrenome}`;
        const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(nomeCompleto)}&size=256&rounded=true&background=random&color=fff`;
        const nascimento = formatarData(cliente.nascimento);

        return `
            <div class="card-cliente">
                <img src="${avatar}" alt="Foto de ${nomeCompleto}">
                <p class="card-nome-cliente">${nomeCompleto}</p>
                <div class="card-info-cliente">
                    <h4>CPF:</h4><p>${cliente.cpf}</p>
                    <h4>Telefone:</h4><p>${cliente.telefone}</p>
                    <h4>Email:</h4><p>${cliente.email}</p>
                    <h4>Nascimento:</h4><p>${nascimento}</p>
                </div>
            </div>
        `;
    }).join('');
}

// FUNÇÃO QUE CONVERTE DATA ISO (aaaa-mm-dd) PARA O FORMATO BRASILEIRO (dd/mm/aaaa)
function formatarData(iso) {
    const partes = iso.split('-');
    return partes.length === 3 ? `${partes[2]}/${partes[1]}/${partes[0]}` : iso;
}

// DADOS DE FUNCIONÁRIOS CADASTRADOS (EXEMPLO HARDCODED)
const funcionariosExemplo = [
    {
        nome: "Maria",
        sobrenome: "Oliveira",
        cpf: "987.654.321-00",
        nascimento: "1988-07-21",
        telefone: "(21) 91234-5678",
        cargo: "Vendedor(a)",
        salario: 4500,
        email: "maria.oliveira@exemplo.com"
    }
];

// FUNÇÃO DE RENDERIZAR O GRID DE FUNCIONÁRIOS NO HTML
// Recebe a lista de funcionários como parâmetro. Chamar com: <script>renderGridFuncionarios(funcionarios);</script>
function renderGridFuncionarios(funcionarios) {
    const grid = document.querySelector('.grid-layout--funcionarios');
    if (!grid) return;

    grid.innerHTML = funcionarios.map((funcionario) => {
        const nomeCompleto = `${funcionario.nome} ${funcionario.sobrenome}`;
        const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(nomeCompleto)}&size=256&rounded=true&background=random&color=fff`;
        const nascimento = formatarData(funcionario.nascimento);
        const salario = formatarMoeda(funcionario.salario);

        return `
            <div class="card-funcionario">
                <img src="${avatar}" alt="Foto de ${nomeCompleto}">
                <p class="card-nome-funcionario">${nomeCompleto}</p>
                <div class="card-info-funcionario">
                    <h4>Cargo:</h4><p>${funcionario.cargo}</p>
                    <h4>Salário:</h4><p>${salario}</p>
                    <h4>CPF:</h4><p>${funcionario.cpf}</p>
                    <h4>Telefone:</h4><p>${funcionario.telefone}</p>
                    <h4>Email:</h4><p>${funcionario.email}</p>
                    <h4>Nascimento:</h4><p>${nascimento}</p>
                </div>
            </div>
        `;
    }).join('');
}

// DADOS DE LOJAS CADASTRADAS (EXEMPLO HARDCODED)
const lojasExemplo = [
    {
        nome: "Camisaria Xhopii",
        cnpj: "12.345.678/0001-90",
        email: "contato@xhopii.com",
        telefone: "(11) 4002-8922",
        cep: "01234-567",
        logradouro: "Rua das Flores",
        numero: "123",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP"
    }
];

// FUNÇÃO DE RENDERIZAR O GRID DE LOJAS NO HTML
// Recebe a lista de lojas como parâmetro. Chamar com: <script>renderGridLojas(lojas);</script>
function renderGridLojas(lojas) {
    const grid = document.querySelector('.grid-layout--lojas');
    if (!grid) return;

    grid.innerHTML = lojas.map((loja) => {
        const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(loja.nome)}&size=256&rounded=true&background=random&color=fff`;
        const endereco = `${loja.logradouro}, ${loja.numero} - ${loja.bairro}, ${loja.cidade}/${loja.estado}`;

        return `
            <div class="card-loja">
                <img src="${avatar}" alt="Foto de ${loja.nome}">
                <p class="card-nome-loja">${loja.nome}</p>
                <div class="card-info-loja">
                    <h4>CNPJ:</h4><p>${loja.cnpj}</p>
                    <h4>Email:</h4><p>${loja.email}</p>
                    <h4>Telefone:</h4><p>${loja.telefone}</p>
                    <h4>CEP:</h4><p>${loja.cep}</p>
                    <h4>Endereço:</h4><p>${endereco}</p>
                </div>
            </div>
        `;
    }).join('');
}

// FUNÇÃO QUE FORMATA UM VALOR NUMÉRICO COMO MOEDA BRASILEIRA
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

// DADOS DE CUPONS DE DESCONTO CADASTRADOS (EXEMPLO HARDCODED)
const cuponsExemplo = [
    {
        codigo: "PRIMAVERA10",
        percentual: 10,
        validade: "2026-12-31",
        descricao: "10% de desconto em toda a linha de camisetas durante a estação."
    }
];

// FUNÇÃO DE RENDERIZAR O GRID DE CUPONS DE DESCONTO NO HTML
// Recebe a lista de cupons como parâmetro. Chamar com: <script>renderGridCupons(cupons);</script>
function renderGridCupons(cupons) {
    const grid = document.querySelector('.grid-layout--cupons');
    if (!grid) return;

    grid.innerHTML = cupons.map((cupom) => {
        const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(cupom.codigo)}&size=256&rounded=true&background=random&color=fff`;
        const validade = formatarData(cupom.validade);

        return `
            <div class="card-cupom">
                <img src="${avatar}" alt="Cupom ${cupom.codigo}">
                <p class="card-nome-cupom">${cupom.codigo}</p>
                <div class="card-info-cupom">
                    <h4>Percentual:</h4><p>${cupom.percentual}%</p>
                    <h4>Validade:</h4><p>${validade}</p>
                    <h4>Descrição:</h4><p>${cupom.descricao}</p>
                </div>
            </div>
        `;
    }).join('');
}

function selecionarImagem(imagem) {

    // Troca a imagem principal
    document.getElementById("imagemPrincipal").src = imagem.src;

    // Remove a seleção das outras imagens
    const miniaturas = document.querySelectorAll(".miniatura");

    miniaturas.forEach(function(item) {
        item.classList.remove("selecionada");
    });

    // Marca a imagem clicada
    imagem.classList.add("selecionada");
}


function selecionarCor(botao) {

    const botoes = botao.parentElement.querySelectorAll("button");

    botoes.forEach(function(item) {
        item.classList.remove("selecionado");
    });

    botao.classList.add("selecionado");

    const cores = {
        "Preto": "preto",
        "Azul": "azul",
        "Verde": "verde",
        "Cinza": "cinza",
        "Rosa": "rosa"
    };

    const cor = cores[botao.textContent.trim()];
    if (!cor) return;

    const miniatura = Array.from(document.querySelectorAll(".miniatura"))
        .find(function(item) {
            return item.src.toLowerCase().includes(`/${cor}.jpeg`);
        });

    if (miniatura) selecionarImagem(miniatura);
}


function selecionarTamanho(botao) {

    const botoes = botao.parentElement.querySelectorAll("button");

    botoes.forEach(function(item) {
        item.classList.remove("selecionado");
    });

    botao.classList.add("selecionado");

    document.getElementById("tamanhoSelecionado").textContent =
        "Tamanho Selecionado: " + botao.textContent;
}

let indexBannerAtual = 0;

const indexBanners = [
    "assets/img/banner1.png",
    "assets/img/banner2.png",
    "assets/img/banner3.png"
];


function indexTrocarBanner(direcao) {

    indexBannerAtual += direcao;

    if (indexBannerAtual >= indexBanners.length) {
        indexBannerAtual = 0;
    }

    if (indexBannerAtual < 0) {
        indexBannerAtual = indexBanners.length - 1;
    }

    document.getElementById("index-banner").src =
        indexBanners[indexBannerAtual];
}

function abrirProduto() {
    window.location.href = "view/produto.html";
}