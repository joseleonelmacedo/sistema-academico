# Sistema Acadêmico

## Alunos:
- João Felipe Alves Marinho
- Jose Leonel Macedo de Andrade

## Descrição do Projeto

Este projeto é um **sistema acadêmico básico**, desenvolvido com práticas ágeis de programação. Ele simula o lançamento de notas, cálculo de médias e determinação do status do aluno com base na média. O projeto foca na colaboração em equipe utilizando **TDD (Test-Driven Development)**, **Code Review** e **Integração Contínua (CI)** com **GitHub Actions**.

---

## Estrutura do Projeto

O sistema possui três módulos principais:

1. **Módulo de Lançamento de Notas (`lancamentoNotas.js`)**  
   Permite que professores insiram as notas do aluno, garantindo validação.  

2. **Módulo de Cálculo de Média (`calcularMedia.js`)**  
   Calcula a média do aluno com base nas notas inseridas.  

3. **Módulo de Status do Aluno (`exibirStatus.js`)**  
   Determina o status do aluno (Aprovado, Reprovado ou Aguardando final) com base na média calculada.  

### Estrutura de Diretórios:

```
sistema-academico/
├── .github/
│   └── workflows/
│       └── pipetest.yml      # Arquivo de pipeline de CI com GitHub Actions
├── src/
│   ├── lancamentoNotas.js    # Módulo de lançamento de notas
│   ├── calcularMedia.js      # Módulo de cálculo de médias
│   └── exibirStatus.js       # Módulo de status do aluno
├── tests/
│   ├── testLancamentoNotas.js  # Testes do módulo 1
│   ├── testCalcularMedia.js    # Testes do módulo 2
│   └── testExibirStatus.js     # Testes do módulo 3
├── package.json               # Configurações do projeto e dependências
├── README.md                  # Documentação do projeto
```

## Configuração do Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sistema-academico.git
   cd sistema-academico
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

---

## Como Executar os Testes

Os testes foram desenvolvidos com o framework **Jest** para garantir a qualidade e conformidade do sistema. Para executar os testes:

```bash
npm test
```

### Casos de Teste Cobertos

- **Lançamento de notas:** Validação de entradas, formatos incorretos e limites de intervalo.  
- **Cálculo de média:** Cálculo correto com base nas notas validadas.  
- **Exibição de status:** Determinação correta do status do aluno com base na média.  

---
