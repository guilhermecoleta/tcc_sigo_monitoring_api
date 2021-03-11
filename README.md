#### PUC Minas - Arquitetura de Sistemas Distribuídos

### TCC - POC da api do módulo Sistema de Monitoramento de Vendas

Monitoramento de Vendas: sistema web/mobile, que funciona como um monitor de vendas da
empresa, permitindo acesso pelo pessoal de vendas, gestores e outros colaboradores envolvidos no
processo. Trata-se de uma solução multiplataforma desenvolvida internamente, com o uso de React
e React Native, sendo acessível a smartphones nas plataformas Android e iOS. A transferência das
informações do sistema central (backend) para a base de dados local existente no dispositivo móvel
ocorre por meio de arquivos JSON.

#### Stack utilizada

- NodeJs
- Restify 
- Chance
- RandomItem


### Executando o projeto localmente

###Pré requisitos
- Node instalado
https://nodejs.org/pt-br/download/package-manager/

#####Instalando modulos
`npm install`

#####Gerando o build do projeto
`npm start`


###Acessando a aplicação

###Swagger

#####Local
http://localhost:8080/monitors

#####Produção
https://sigo-monitoring-api.herokuapp.com/monitors
