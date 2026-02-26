# Angular

## Definição

Angular é um framework de desenvolvimento web de código aberto mantido pelo Google. Ele é usado para criar aplicações web de página única (SPA) e é conhecido por sua estrutura robusta, modularidade e suporte a TypeScript.

**Features principais:**

- **Interface e Componentes:** Angular utiliza uma abordagem baseada em componentes para construir interfaces de usuário, permitindo a reutilização de código e a organização modular.
- **Roteamento:** Angular possui um sistema de roteamento integrado que facilita a navegação entre diferentes partes da aplicação.
- **Comunicação com API:** Angular oferece suporte para comunicação com APIs RESTful, facilitando a integração com backends e serviços externos.
- **Formulários:** Angular oferece suporte avançado para formulários, incluindo validação e manipulação de dados.
- **Injeção de Dependência:** Angular possui um sistema de injeção de dependência que facilita a gestão de serviços e componentes, promovendo a modularidade e a testabilidade do código.
- **CLI (Command Line Interface):** Angular CLI é uma ferramenta de linha de comando que facilita a criação, desenvolvimento e manutenção de projetos Angular, automatizando tarefas comuns como geração de componentes, serviços e testes.

## Ecossistema

### React

React é uma biblioteca JavaScript para construção de interfaces de usuário, mantida pelo Facebook. Ele é focado na criação de componentes reutilizáveis e na renderização eficiente da interface.

**Features principais:**

- **Componentes:** React utiliza uma abordagem baseada em componentes para construir interfaces de usuário, permitindo a reutilização de código e a organização modular.
- **Renderização Virtual:** React utiliza um DOM virtual para otimizar a renderização da interface, melhorando o desempenho da aplicação.

### Frameworks vs Bibliotecas

- **Frameworks:** Fornecem uma estrutura completa para o desenvolvimento de aplicações, incluindo regras e diretrizes a serem seguidas. Exemplo: Angular.
- **Bibliotecas:** Oferecem funcionalidades específicas que podem ser usadas em conjunto com outras bibliotecas ou frameworks. Exemplo: React.

## Angular e TypeScript

Angular é construído usando TypeScript, uma linguagem de programação que é um superconjunto de JavaScript. TypeScript adiciona recursos como tipagem estática, classes e interfaces, o que ajuda a melhorar a qualidade do código e a facilitar a manutenção de grandes aplicações.

**Principais especificações do TypeScript:**

- **Tipagem Forte:** TypeScript permite definir tipos para variáveis, funções e objetos, o que ajuda a detectar erros em tempo de compilação.
- **Classes e Interfaces:** TypeScript suporta a definição de classes e interfaces, facilitando a organização e a estruturação do código.
- **Detecta Erros em Tempo de Compilação:** TypeScript verifica o código durante a compilação, ajudando a identificar erros antes que o código seja executado.
- **Maior escalabilidade:** TypeScript é especialmente útil para projetos grandes, pois ajuda a manter o código organizado e fácil de entender.

## Angular CLI

Angular CLI é uma ferramenta de linha de comando que facilita a criação, desenvolvimento e manutenção de projetos Angular. Ele automatiza tarefas comuns como geração de componentes, serviços e testes, além de fornecer comandos para iniciar o servidor de desenvolvimento, construir a aplicação para produção e executar testes.

**Utilidades do Angular CLI:**

- **Criar novo projeto:** `ng new nome-do-projeto`
- **Gerar componente:** `ng generate component nome-do-componente`
- **Gerar serviço:** `ng generate service nome-do-servico`
- **Iniciar servidor de desenvolvimento:** `ng serve`
- **Construir aplicação para produção:** `ng build --prod`
- **Executar localmente:** `ng serve --open`
- **Executar testes:** `ng test`
- **Executar testes de end-to-end:** `ng e2e`

### Por que usar Angular CLI?

- **Automatização de tarefas:** Angular CLI automatiza tarefas comuns, economizando tempo e esforço dos desenvolvedores.
- **Padronização:** Angular CLI ajuda a manter uma estrutura de projeto consistente, facilitando a colaboração entre desenvolvedores.
- **Facilidade de uso:** Angular CLI é fácil de usar e oferece uma interface de linha de comando intuitiva, tornando o processo de desenvolvimento mais eficiente.
- **Suporte a melhores práticas:** Angular CLI segue as melhores práticas de desenvolvimento Angular, ajudando os desenvolvedores a escrever código de alta qualidade e fácil de manter.

### Instalação do Angular CLI

Para instalar o Angular CLI, siga os passos abaixo:

```bash
npm install -g @angular/cli

// Verificar a instalação
ng version
```

### Iniciando um novo projeto Angular

Para iniciar um novo projeto Angular, use o comando:

```bash
ng new nome-do-projeto
```

Siga as instruções para configurar o projeto, escolhendo as opções desejadas:

- **Would you like to add Angular routing?** Sim
- **Which stylesheet format would you like to use?** CSS

Esse comando criará uma nova pasta com o nome do projeto, contendo a estrutura básica de um aplicativo Angular.

### Executando a aplicação Angular

Para executar a aplicação Angular, use o comando:

```bash
cd meu-projeto
ng serve --open
```

Esse comando compila a aplicação e inicia um servidor de desenvolvimento. A opção `--open` (ou `-o`) faz com que o navegador seja aberto automaticamente na URL onde a aplicação está sendo servida, geralmente em `http://localhost:4200/`. A partir daí, você pode começar a desenvolver sua aplicação Angular, editando os arquivos na pasta `src/app` e vendo as mudanças refletidas em tempo real no navegador.
