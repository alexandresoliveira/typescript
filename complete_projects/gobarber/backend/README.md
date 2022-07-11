# Funcionalidades GoBarber

- Recuperação de senha
  - **RF** - *Requisitos Funcionais*
    - O usuário deve poder recuperar sua senha informando o seu e-mail;
    - O usuário deve receber um e-mail com instruções de recuperação de senha;
    - o usuário deve poder resetar a sua senha;
  - **RNF** - *Requisitos não funcionais*
    - Utilizar Mailtrap para testar os envios de e-mail em ambiente de desenvolvimento;
    - Utilizar Amazon SES para envios em produção;
    - O envio de e-mails deve acontecer em segundo plano (background job);
  - **RN** - *Regras de negócio*
    - O link enviado por email para resetar senha, deve expirar em 2h;
    - O usuário precisa confirmar a nova senha ao resetar sua senha;

- Atualização do perfil
  - **RF** - *Requisitos Funcionais*
    - O usuário deve poder atualiza o seu nome, email e senha;
  - **RNF** - *Requisitos não funcionais*
  - **RN** - *Regras de negócio*
    - O usuário não pode alterar o seu email para um e-mail já utilizado;
    - Para atualizar a sua senha, o usuário deve informar a senha antiga;
    - Para atualizar a sua senha, o usuário precisa confirmar a nova senha;

- Painel do prestador
  - **RF** - *Requisitos Funcionais*
    - O prestador deve poder listar seus agendamentos de um dia específico;
    - O prestador deve receber uma notificação sempre que houver um novo agendamento;
    - O prestador deve poder visualizar as notificações não lidas;
  - **RNF** - *Requisitos não funcionais*
    - Os agendamentos do prestador no dia devem ser armazenados em cache;
    - As notificações do prestador devem ser armazenadas no MongoDB;
    - As notificações do prestador dever ser enviadas em tempo-real utilizando Socket.io;
  - **RN** - *Regras de negócio*
    - A notificação deve ter um status de lida ou não-lida para que um prestador possa controlar;

- Agendamento de serviços
  - **RF** - *Requisitos Funcionais*
    - O usuário deve poder listar todos os prestadores de serviços cadastrados;
    - O usuário deve poder listar os dias de um mês com pelo menos um horário disponível;
    - O usuário deve poder listar os horários disponíveis em um dia especifico de um prestador;
    - O usuário deve poder realizar um novo agendamento com um prestador;
  - **RNF** - *Requisitos não funcionais*
    - A listagem de prestadores deve ser armazenada em cache;
  - **RN** - *Regras de negócio*
    - Cada agendamento deve durar 1h exatamente;
    - Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
    - O usuário não pode agendar em um horário já ocupado;
    - O usuário não pode agendar em um horário que já passou;
    - O usuário não pode agendar serviços consigo mesmo;

