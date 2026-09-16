# 🛒 Xhopii - Front-End E-Commerce

## Tecnologias e Regras

* **HTML5 Semântico** (Obrigatório)
* **CSS3**: Uso obrigatório de **Flexbox** e **CSS Grid** (Estilização própria).
* **Bootstrap**: Permitido **exclusivamente** para o componente de Carrossel.
* **JavaScript**: Para comportamentos e redirecionamentos.
* **Git & GitHub**: Controle de versão obrigatório.

> ⚠️ **ATENÇÃO**: O Bootstrap só pode ser utilizado para o efeito Carrossel. Não utilize classes do Bootstrap para grids, botões ou formulários. Toda a estilização deve ser feita com CSS puro (Flexbox e CSS Grid).

---

## Estrutura de Pastas

Mantenha rigorosamente a estrutura abaixo para evitar conflitos no Git ao subir os arquivos:

```text
XHOPII/
├── assets/
│   ├── img/
│   │   └── logo.png
│   ├── script.js
│   └── style.css
├── view/
│   ├── cadastro-cliente.html
│   ├── cadastro-funcionario.html
│   ├── cadastro-produto.html
│   ├── cadastro-cupom.html
│   ├── cadastro-loja.html
│   ├── redefinir-senha.html
│   ├── ver-clientes.html
│   ├── ver-funcionarios.html
│   ├── ver-produtos.html
│   ├── ver-lojas.html
│   ├── ver-cupons.html
│   └── produto.html
├── index.html
└── README.md
```

**Dica (Caminhos Relativos)**: Como o projeto tem a pasta `view/`, ao criar os arquivos dentro dela, os links para o CSS e JS devem voltar um nível.
* No `index.html` (raiz): `<link rel="stylesheet" href="assets/style.css">`
* No `view/cadastro-cliente.html`: `<link rel="stylesheet" href="../assets/style.css">`

Isso evita que o CSS não carregue nas páginas internas.

---

## Divisão do Trabalho (Grupo de 3)

Para otimizar o desenvolvimento via **Git** sem sobrepor códigos de outros membros, as telas e responsabilidades foram decompostas em 3 módulos:

### Desenvolvedor 1: Autenticação & Home Core
**Foco**: Estruturação inicial, layout principal da loja e navegação do usuário.

* **Telas / Arquivos**:
  * `index.html` (Home Page + Carrossel Bootstrap + Produtos "Descobertas do Dia")
  * `view/login.html` (Interface de Login)
  * `view/redefinir-senha.html` (Interface de Redefinição de Senha)
  * `view/produto.html` (Visualizar produto específico)
* **Tarefas de JS/CSS**:
  * Configurar e estilizar o **Cabeçalho (Header/Navbar)** e **Rodapé (Footer)** padrão (para reaproveitamento).
  * Implementar o carrossel na Home usando Bootstrap.
  * Lógica de redirecionamento: *Login ➔ Home*, *Esqueci a Senha ➔ Redefinir Senha*, *Redefinir Senha ➔ Login/Home*.

---

### Desenvolvedor 2: Módulo de Cadastros (Formulários)
**Foco**: Criação e alinhamento de formulários complexos com HTML semântico, Grid e Flexbox.

* **Telas / Arquivos**:
  * `view/cadastro-cliente.html`
  * `view/cadastro-funcionario.html`
  * `view/cadastro-produto.html`
  * `view/cadastro-cupom.html`
  * `view/cadastro-loja.html`
* **Tarefas de JS/CSS**:
  * Padronização visual dos formulários (inputs, botões, campos de upload de imagem).
  * Validações básicas de formulário em JavaScript (campos obrigatórios, máscaras simples se necessário).

---

### Desenvolvedor 3: Módulo de Listagem e Visualização (Dashboard/Admin)
**Foco**: Organização de layouts em Grid/Flexbox para exibição de cards, tabelas e listagens.

* **Telas / Arquivos**:
  * `view/ver-clientes.html`
  * `view/ver-funcionarios.html`
  * `view/ver-produtos.html`
  * `view/ver-cupons.html`
  * `view/ver-lojas.html`
* **Tarefas de JS/CSS**:
  * Estilização das listas/grids de exibição de itens/produtos com alta fidelidade ao layout.
  * Navegação entre a listagem de produtos e a tela de detalhe (`produto.html`).

---

## Fluxo de Trabalho e Regras do Git

### Dicas para trabalhar em 3 com um arquivo de CSS único
Como o PDF pede apenas um `style.css` na pasta `assets`, dividam o `style.css` internamente utilizando comentários para evitar editar as mesmas linhas simultaneamente:

```css
/* ==========================================
   1. ESTILOS GERAIS, HEADER E FOOTER (DEV 1)
   ========================================== */

/* ==========================================
   2. FORMULÁRIOS DE CADASTRO (DEV 2)
   ========================================== */

/* ==========================================
   3. GRIDS E LISTAGENS DE VISUALIZAÇÃO (DEV 3)
   ========================================== */
```

### Guia Prático de Git e GitHub

Siga este fluxo obrigatoriamente para manter o repositório organizado e seguro.

**1. Configuração Inicial do Git (Fazer apenas uma vez na máquina)**
Configure seu nome de usuário e e-mail no Git local:
```bash
git config --global user.name "Seu Usuário no Github"
git config --global user.email "seu.email@exemplo.com"
```

**2. Clone o repositório**
Entre em uma pasta no Visual Studio Code e dê o comando:
```bash
git clone https://github.com/GMiranda160/LP4-Trabalho-Pratico-1.git
```

**3. Para manter sua branch atualizada com suas modificações**
```bash
# Verifique quais arquivos foram alterados
git status

# Adicione todos os arquivos alterados para a área de staging
git add .

# Registre um commit com uma mensagem explicativa do que foi feito
git commit -m "Mensagem do que foi alterado"

# Envie para o GitHub
git push -u origin NOME-DA-SUA-BRANCH
# Exemplo: git push -u origin feature/cadastros
```

**4. Quando terminar a base do seu projeto e quiser testar o todo (AVISE O GRUPO ANTES DE FAZER ESSE PASSO!)**
```bash
# 1. Volte para a branch main local
git checkout main

# 2. Baixe e aplique as atualizações do GitHub na sua main local
git pull origin main

# 3. Volte para a sua branch individual
git checkout NOME-DA-SUA-BRANCH

# 4. Sincronize/Junte as novidades da main na sua branch
git merge main
```

**Dica**: Caso ocorra um conflito de merge, não entrem em pânico. Abram o VS Code, resolvam os conflitos (geralmente nas linhas marcadas com `<<<<<<<`), salvem o arquivo e façam um novo commit.
