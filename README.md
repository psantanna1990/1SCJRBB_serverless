# Trabalho Serverless

Para desenvolvimento deste projeto foi utilizada a seguinte stack:

- framework : [serverless.com](https://www.serverless.com/)
- linguagem: node(javascript)

## Funcionalidade da aplicação

A aplicação consiste em uma função lambda que ao receber uma requisição HTTP (POST) envia uma notificação no MSTeams utilizado [AdaptativeCard](https://adaptivecards.io/).

Esta mensagem consiste em um título e um corpo ambos em texto.

![exemplo de notificação](./img//mensagemNoTeams.PNG)

Para enviar a mensgem necessário executar o seguinte POST (Alterar a URL pela fornecida no passo 5 da sessão Executando o Projeto):

`curl --request POST \
  --url <URL PASSO_5_DA _SESSAO_EXECUTANDO_ O _PROJETO> \
  --header 'Content-Type: application/json' \
  --data '{
	"titulo": "Titulo da Mensagem",
	"mensagem": "Esta mensagem chegou aqui através de uma Lambda"
}'`

## Executando o projeto

1. Configurar as credencias de usuário do IAM da AWS

   [https://www.serverless.com/framework/docs/providers/aws/guide/credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials)

2. Clonar o repositório

   `git clone https://github.com/psantanna1990/1SCJRBB_serverless.git`

3. Instalar as dependencias

   `npm install`

4. Fazer o deploy

   `serverless deploy`

5. Copiar o endpoint informado no final da execução do comando anterior

   ![local da url](./img/endpoint.PNG)


## Desprovisionamento do ambiente

Para desprovisionar o ambiente executar o comando: 

    `serverless remove`
## Equipe

- Carlos Mateus Borges Junior - RM344974
- Daniel de Oliveira Carvalho - RM344795
- Pedro Sant Anna Lima Oliveira - RM344804
- Willian Prestes Correia Cellos - RM344812
