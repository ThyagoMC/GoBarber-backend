# Dependencias
**aws-sdk**
  + Implementação do storage provider, provedor de conteúdo estático, ex.: imagens, documentos, etc.
  ex: `src/shared/container/providers/StorageProvider/implementations/S3StorageProvider` 

**bcryptjs**
  + Implementação do hash provider, verificação de password.
  ex: `src/modules/users/providers/HashProvider/implementations/BCryptHashProvider`

**celebrate**
  + Midleware para implementação de validação de dados.
  ex: `src\modules\appointments\infra\http\routes\appointments.routes.ts`

**class-transformer**
  + Transformação de entidade que será enviada como resposta na api, consiste em duas etapas.
  1. Marcação da entidade. ex: `src\modules\users\infra\typeorm\entities\User.ts`
  2. Chamada da transformação. ex: `src\modules\users\infra\http\controllers\UsersController.ts`

**cors**
  + Habilitar respostas cors.
  ex: `src\shared\infra\http\server.ts`

**date-fns**
  + Operações com data.
  ex: `src\modules\appointments\repositories\fakes\FakeAppointmentsRepository.ts`

**dotenv**
  + Habilitar leitura|escrita de variáveis de ambiente apartir de um arquivo.
  ex: `src\shared\infra\http\server.ts`

**express**
  + Servidor web.
  ex: `src\shared\infra\http\server.ts`

**express-async-errors**
  + Habilitar a captura de erros assyncronos.
  ex: `src\shared\infra\http\server.ts`

**handlebars**
  + Usada na transformação de templates html em htmls.
  1. Template.
  `src\modules\users\views\forgot_password.hbs`
  2. Transformação.
  `src\shared\container\providers\MailTemplateProvider\implementations\HandlebarsMailTemplateProvider.ts` 

**ioredis**
  + Driver para trabalhar com o redis, performático e permite uso de promises.
  1. Configuração.
  `src\config\cache.ts`
  2. Implementação.
  `src\shared\container\providers\CacheProvider\implementations\RedisCacheProvider.ts`
  3. Uso.
  ex: `src\modules\appointments\services\CreateAppointmentService.ts` 

**jsonwebtoken**
  + Usado para autenticação e validação JWT.

**mime**
  + Usado para identificação do tipo de arquivo uploaded para armazenar no provedor de conteúdo.
  `src\shared\container\providers\StorageProvider\implementations\S3StorageProvider.ts`

**mongodb**
  + Driver utilizado para trabalhar com o MongoDB, é utilizado pelo typeorm e possui utilização direto no FakeNotificationRepository.
  ex: `src\modules\notifications\repositories\fakes\FakeNotificationsRepository.ts`

**multer**
  + Midleware responsável por controlar o upload de arquivos.
  1. Configuração.
  `src\config\upload.ts`
  2. Uso.
  `src\modules\users\infra\http\routes\users.routes.ts`

**nodemailer**
  + Utilizado para disparar email, funciona com diferentes provedores de serviço. ex: AWS, Etheral.
  `src\shared\container\providers\MailProvider\implementations\EtherealMailProvider.ts`

**pg**
  + Driver utilizado para trabalhar com PostgreSQL, é utilizado internamente pelo TypeORM.

**rate-limiter-flexible**
  + Utilizado como seguração contra ataques do tipo DDOS, usa o Redis como controle de quantidade de requisição.
  `src\shared\infra\http\middlewares\rateLimiter.ts`

**redis**
  + Driver de acesso ao Redis, utilizado pelo ioredis e o rateLimiter.

**reflect-metadata**
  + Permite a utilização de decorators.
  1. Configuração.
  `src\shared\infra\http\server.ts`
  2. Uso.
  ex: `src\modules\appointments\infra\typeorm\entities\Appointment.ts`

**tsyringe**
  + Utilizada na implementação de IoC e D.I.
  1. Registro das implementações.
  `src\shared\container\index.ts`
  2. Marcação das dependencias.
  `src\modules\appointments\services\CreateAppointmentService.ts`

**typeorm**
  + Marcação das entidades e comunicação com o banco de dados.
  1. Marcação.
  `src\modules\appointments\infra\typeorm\entities\Appointment.ts`
  2. Comunicação.
  `src\modules\appointments\infra\typeorm\repositories\AppointmentsRepository.ts`

**uuidv4**
  Gerador de uuid quando o mesmo não é gerado pelo banco de dados. ex: Fake_Repository.
  ex: `src\modules\appointments\repositories\fakes\FakeAppointmentsRepository.ts`


# Dependencias de desenvolvimento
**@babel/...**
**babel-plugin-...**
  + Dependências usadas pelo Babel na transpilação dos arquivos.

**@types/...**
  + Dependências usadas pelo intelisense para fornecer os tipo em tempo de desenvolvimento.

**eslint...**
  + Dependências usadas pelo intelisense para validação do código e formatação do código em conjunto com o prettier.

**prettier**
  + Dependência usada pelo intelisense para formatação do código.

**ts-jest**
  + Dependência usada para execução de testes com typescript.

**ts-node**
  + Dependência usada para execução de servidor com typescript.

**ts-node-dev**
  + Dependência usada para execução de servidor com typescript em tempo de desenvolvimento (nodemon).

**tsconfig-paths**
  + Dependência usada para simplificar caminhos relativos na aplicação.
  1. Configurações.
  `tsconfig.json`
  `babel.config.js` 
  2. Uso.
  ex: `src\modules\appointments\infra\http\controllers\AppointmentsController.ts`

**typescript**
  + Denpendência para uso do Typescript.

# Scripts
  + `"build": "babel src --extensions \".js,.ts\" --out-dir dist --copy-files",`
  Script para compilação da aplicação.

  + `"dev:server": "ts-node-dev -r tsconfig-paths/register --inspect --transpile-only --ignore-watch node_modules src/shared/infra/http/server.ts",`
  - **--inspect**
    enable debug in vscode.
  - **--transpile-only**
    for fast generation.

  + `"start": "ts-node src/shared/infra/http/server.ts",`
    Execução do servidor node.

  + `"typeorm": "ts-node-dev -r tsconfig-paths/register ./node_modules/typeorm/cli.js",`
    Para a execução do typeorm utilizando as variáveis de caminhos relativos.

  + `"test": "jest"`
    Para a execução dos tests com jest.
