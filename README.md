# 🚀 Cypress API Automation

Projeto desenvolvido como parte de um desafio técnico de automação de testes de API.  
O foco principal é demonstrar **boas práticas de organização, clareza e reuso de código** utilizando **Cypress**.

A estrutura segue o padrão de **Service Objects**, que centraliza as chamadas de API e facilita a manutenção dos testes.

---

## 🧩 Objetivo do Projeto

O conjunto de testes cobre quatro cenários principais do DummyJSON:

1. **Listagem de usuários (`GET /users`)**  
   - Validação de campos obrigatórios  
   - Paginação máxima de 30 usuários  

2. **Autenticação (`POST /auth/login`)**  
   - Validação de status code (`200` ou `201`)  
   - Validação dos campos do corpo da resposta  
   - Armazenamento do token para uso posterior  

3. **Criação de produto (`POST /auth/products/add`)**  
   - Envio de payload dinâmico  
   - Utilização de token de autenticação  
   - Validação dos dados de retorno  

4. **Consulta de usuário por ID (`GET /users/:id`)**  
   - Verificação da completude e precisão dos dados  
   - Validação de campos aninhados (ex: `hair`, `address`, `company`, `crypto`)  

---

## ⚙️ Como Executar o Projeto

### 1. Pré-requisitos

- **Node.js** versão 18 ou superior  
- **npm** instalado globalmente  

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar testes em modo headless (com relatório)

```bash
npm test
```

### 4. Gerar relatório HTML

```bash
npm run report:merge
npm run report:generate
```

### 5. Rodar interativamente com a interface do Cypress

```bash
npm run open
```

---

## 📁 Estrutura do Projeto

```
cypress-qa-api-automation/
├── cypress/
│   ├── e2e/                  # Casos de teste organizados por endpoint
│   ├── fixtures/             # Dados de entrada (ex: credenciais e payloads)
│   ├── support/
│   │   ├── commands.js       # Comandos customizados (login, hash MD5, etc.)
│   │   ├── services/         # Camada de Services (Users, Auth, Products)
│   │   └── e2e.js            # Configuração global dos testes
├── .github/workflows/        # Pipeline CI (GitHub Actions)
├── cypress.config.js         # Configurações principais do Cypress
├── package.json              # Dependências e scripts
└── README.md
```

---

## 🔐 Autenticação e Segurança

- O login é automatizado via comando `cy.login()`, que armazena o token em `Cypress.env("token")`.  
- A hash MD5 é gerada com `cy.generateMD5(text)` para cenários que necessitam manipulação dinâmica de credenciais.  
- **Não versionar** o arquivo `cypress.env.json` — utilize-o apenas localmente para variáveis sensíveis.  

---

## 🧠 Boas Práticas Adotadas

- Testes com **asserts detalhados** e cobertura de **campos obrigatórios**  
- **Comandos customizados** para reaproveitar lógica de autenticação  
- **Resiliência de status code** (`[200, 201]`) para evitar falsos negativos  
- Estrutura limpa e de fácil leitura  
- **Relatórios automáticos** gerados com Mochawesome  
- **Integração contínua** via GitHub Actions  

---

## 💡 Observações

- Os testes são escritos em formato **BDD** com `describe` e `it`, utilizando descrições claras e objetivas.  
- Os `services` encapsulam toda a lógica de requisição, mantendo os testes enxutos e expressivos.  
- Pequenas variações de resposta da API do DummyJSON são tratadas para garantir **robustez e estabilidade**.  

---

## 📊 Relatórios

Após a execução dos testes, o relatório em HTML será gerado automaticamente em:

```
/mochawesome-report/mochawesome.html
```

Abra esse arquivo no navegador para visualizar os resultados.

---

## 🤝 Contribuição

Sinta-se à vontade para sugerir melhorias, ajustes de código ou novas abordagens de teste.  
O projeto foi desenvolvido com foco em legibilidade, escalabilidade e boas práticas de automação.

---

🧾 **Autor:** Eduardo L. Saraiva - QA Engineer 
📅 **Propósito:** Desafio técnico — Automação de Testes de API com Cypress  
📦 **Tecnologias:** Cypress, Mochawesome, Node.js  

---

