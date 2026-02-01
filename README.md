# WEB-Cypress-MasterClass

## Descrição do Projeto

Este é um projeto de exemplo para uma masterclass em testes end-to-end (E2E) utilizando o framework Cypress. O projeto demonstra boas práticas para testes automatizados de aplicações web, incluindo testes de login e cadastro de usuários, com foco em cenários positivos e negativos. Utiliza dados fictícios gerados dinamicamente com a biblioteca Faker.js e testes responsivos em múltiplas viewports.

O site de teste utilizado é o [Automation Practice](https://www.automationpratice.com.br), uma plataforma gratuita para prática de automação de testes.

## Tecnologias Utilizadas

- **Cypress**: Framework principal para testes E2E
- **Node.js**: Ambiente de execução
- **@faker-js/faker**: Biblioteca para geração de dados fictícios
- **JavaScript**: Linguagem de programação

## Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gerenciador de pacotes)
- Um navegador compatível com Cypress (Chrome, Firefox, Edge, etc.)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/web-cypress-masterclass.git
   cd web-cypress-masterclass
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

O projeto já vem configurado com as seguintes definições no `cypress.config.js`:

- **baseUrl**: `https://www.automationpratice.com.br`
- Configurações padrão do Cypress para testes E2E

Caso precise alterar a URL base ou outras configurações, edite o arquivo `cypress.config.js`.

## Executando os Testes

### Modo Interativo (Cypress Test Runner)

Para executar os testes no modo interativo, onde você pode ver os testes rodando em tempo real:

```bash
npx cypress open
```

Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes individualmente.

### Modo Headless (Linha de Comando)

Para executar todos os testes em modo headless (sem interface gráfica), ideal para CI/CD:

```bash
npx cypress run
```

#### Opções Específicas

- Executar apenas um arquivo específico:
  ```bash
  npx cypress run --spec "cypress/e2e/login.cy.js"
  ```

- Executar em um navegador específico:
  ```bash
  npx cypress run --browser chrome
  ```

- Executar com vídeo de gravação:
  ```bash
  npx cypress run --record --key <your-record-key>
  ```

## Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── cadastro_usuario.cy.js    # Testes de cadastro de usuário
│   └── login.cy.js               # Testes de login
├── fixtures/
│   └── example.json              # Dados de exemplo para mocks
└── support/
    ├── cadastro_usuario_commands.js  # Comandos customizados para cadastro
    ├── login_comands.js              # Comandos customizados para login
    └── e2e.js                        # Arquivo de configuração do suporte
cypress.config.js                    # Configuração principal do Cypress
package.json                         # Dependências e scripts
```

## Comandos Customizados

O projeto utiliza comandos customizados do Cypress para melhorar a reutilização e legibilidade dos testes:

### Comandos de Login (`login_comands.js`)

- `cy.preencheEmailLogin(email)`: Preenche o campo de email no formulário de login
- `cy.preencheSenha(senha)`: Preenche o campo de senha no formulário de login
- `cy.btnLogin()`: Clica no botão de login
- `cy.validaLoginSucesso(email)`: Valida se o login foi bem-sucedido
- `cy.validaErroLogin(mensagem)`: Valida mensagens de erro no login

### Comandos de Cadastro (`cadastro_usuario_commands.js`)

- `cy.preencheNome(nome)`: Preenche o campo de nome no formulário de cadastro
- `cy.preencheEmail(email)`: Preenche o campo de email no formulário de cadastro
- `cy.preencheSenha(senha)`: Preenche o campo de senha no formulário de cadastro
- `cy.btnCadastro()`: Clica no botão de cadastro
- `cy.validaCadastroSucesso(nome)`: Valida se o cadastro foi bem-sucedido
- `cy.validaErroCadastro(mensagem)`: Valida mensagens de erro no cadastro
- `cy.fluxoCadastroSucesso(nome, email, senha)`: Executa o fluxo completo de cadastro com sucesso

## Cenários de Teste

### Testes de Login

- Login com sucesso em diferentes viewports (Samsung S10, iPhone X, iPad 2, MacBook 16)
- Tentativa de login com email vazio
- Tentativa de login com senha vazia
- Tentativa de login com senha inválida (menos de 6 caracteres)

### Testes de Cadastro

- Cadastro de usuário com sucesso
- Tentativa de cadastro sem nome
- Tentativa de cadastro sem email
- Tentativa de cadastro sem senha
- Tentativa de cadastro com email inválido
- Tentativa de cadastro com senha inválida (menos de 6 caracteres)

## Boas Práticas Implementadas

1. **Testes Independentes**: Cada teste é independente e não depende do estado de outros testes
2. **Dados Dinâmicos**: Uso de Faker.js para gerar dados únicos em cada execução
3. **Testes Responsivos**: Execução em múltiplas viewports para garantir compatibilidade mobile
4. **Comandos Customizados**: Reutilização de código através de comandos customizados
5. **Validações Adequadas**: Verificação tanto de elementos visuais quanto de conteúdo
6. **Estrutura Organizada**: Separação clara entre testes, comandos e configurações
7. **Nomenclatura Clara**: Nomes descritivos para testes e comandos
