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
 - React
 - Redux

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

