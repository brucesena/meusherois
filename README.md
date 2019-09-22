# meusherois
Projeto para teste da API Marvel comics, serão listados três heróis da marvel cada um em uma aba.

Projeto criado como teste para a Kinghost.

Foram usadas as técnologias:

Backend: Node.Js
  Apenas uma api rest para buscar os dados da api da Marvel e gerar as configurações de acesso exigidas pela api
  
Frontend: Html, Javascript, jquery e Bootstrap
  Uma página bastante simples para apresntar os dados da api criada em Node.js
  

Rodando o projeto será necessário:

Instalar o Node.js (https://nodejs.org/en/download/)

Na pasta do projeto rodar:

  npm install

o comando acima vai instalar as dependências do projeto.

Criar na pasta raiz do projeto um arquivo chamado .env, este arquivo conterá as chaves de acesso exigidas pela api da Marvel.
Para criar a sua acesse: https://developer.marvel.com. Existe um exemplo desse arquivo em env.examplo na raiz do projeto.

Finalmente para rodar o site execute:

node server.js

E acesse: http://localhost:3000/


