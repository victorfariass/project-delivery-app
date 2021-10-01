# Boas vindas ao repositório do projeto App de Delivery!

Último projeto realizado para o módulo de Back-End, no curso de Desenvolvimento de Software da TRYBE!

Projeto realizado em grupo com os integrantes:

- [Gabriel Gonçalves](https://github.com/Gabriel-Goncalves)
- [Tiago Bovolin](https://github.com/tiagaoalb)
- [Victor Felipe](https://github.com/VictorFelipeOliveiraRosa)

Tecnologias utilizadas:

 - NodeJs
 - MySQL
 - Sequelize
 - JavaScript
 - React
 - Redux
 - Styled Components
 - JWT
 - Socket.io

 ### Descrição

 O desafio do projeto era criar um aplicativo de delivery com todas as funcionalidades de um app real, desde a página de login até finalizar a compra.

 O aplicativo se inicia na tela de login, onde será necessário colocar um login e senha válidos que serão verificados sua existência no banco de dados. 

![Login page](./prints/login.png?raw=true "Página de Login")

Se não houver cadastro é possível criar um clicando no botão "Ainda não tenho conta", você será redirecionado para a página de registro.

![Registro page](./prints/registro.png?raw=true "Página de Registro")

Após realizar o registro, a aplicação será redirecionada para a página principal de produtos, onde você pode colocar no carrinho os produtos e suas quantidades.

![Produtos page](./prints/produtos.png?raw=true "Página de Produtos")

Ao clicar no botão "Ver carrinho", você será redirecionado para o carrinho de compras, onde se encontra todos os produtos que você adicionou, podendo remover os mesmos. Abaixo na tela um form para detalhes da entrega e um botão de finalizar pedido.

![Carrinho page](./prints/carrinho.png?raw=true "Página de Carrinho")

Ao finalizar o pedido você é redirecionado para a página de detalhes do pedido, onde você consegue acompanhar o status do seu pedido.

![Detalhes page](./prints/detalhe-pedido.png?raw=true "Página de Detalhes do Pedido")

No Menu de navegação da página tem um botão "Meus Pedidos", que irá te redirecionar para a página contendo todos os seus pedidos. O botão de sair faz o logout da sua conta.

![Pedidos page](./prints/meus-pedidos.png?raw=true "Página de Pedidos")

### Detalhes Técnicos

Ao se registrar, seus dados são salvos no banco de dados, possibilitando fazer login novamente sem precisar se registrar outra vez. 

Ao finalizar um pedido ele é salvo no banco de dados.

Para essas requisições foi utilizado o banco de dados MySQL e o ORM Sequelize.

Em toda a aplicação é utilizado padrão de token JWT.

Para acompanhar o status do pedidos em tempo real foi utilizado a tecnologia Socket.io.

### PASSO A PASSO PARA RODAR O APLICATIVO NA SUA MÁQUINA
##### OBS: Antes de iniciar, certifique-se que o MySQL esteja instalado e rodando na sua máquina.

 - 1 - Faça o `git clone` do repositório, usando `git@github.com:victorfariass/project-delivery-app.git`;
 - 2 - Na raiz do projeto execute `npm install`;
 - 3 - Dê o `npm install` nas pastas `back-end` e `front-end`;
 - 4 - É necessário configuar o arquivo `.env.example` dentro da pasta de back-end e renomea-lo para `.env`, exemplo:
    ```
    //.env
    NODE_ENV=development
    API_PORT=3001
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    MYSQL_USER=victor //mudar essa linha
    MYSQL_PASSWORD=minhasenha //mudar essa linha
    MYSQL_DB_NAME=delivery-app
    EVAL_ALWAYS_RESTORE_DEV_DB=true
    ```
 - 5 - Dentro da pasta de back-end rode os seguintes comandos para criar o banco de dados e alimenta-lo:
   - `npx sequelize db:create`
   - `npx sequelize db:migrate`
   - `npx sequelize db:seed:all`
 - 6 - Ainda dentro da pasta de back-end, rode o `npm start`;
 - 7 - Dentro da pasta de front-end, rode o `npm start`.

