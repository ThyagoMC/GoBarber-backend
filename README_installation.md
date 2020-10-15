# Instalação do Docker
https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2

# Docker commands
**Instalação do postgres**  https://hub.docker.com/_/postgres
`docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres`
    *--name* 
      nome do docker container, escolha do usuário
    *"--env , -e"  XXXX=YYYY* 
      seta uma variável de ambiente dentro do container variável(XXXX)=valor(YYYY)
      a flag *-e* pode ser adicionada mais de uma vez, dependo do cenário é melhor usar *--env-file*
    *"--publish , -p"  XXX:YYY*  
      mapeia uma porta dentro do container(XXX) a uma porta externa(YYY)
      https://docs.docker.com/config/containers/container-networking/   
    *--detach , -d* 
      iniciar a execução em background
    *-t* 
      habilitar o terminal no container
    *postgres*
      nome da imagem  a ser instalada no container

**Intalação do mongodb** https://hub.docker.com/_/mongo
`docker run --name mongodb -p 27017:27017 -d -t mongo`
  *mongo* 
    nome da imagem a ser instalada no container

**Intalação do redis** https://hub.docker.com/_/redis
`docker run --name redis -p 6379:6379 -d -t redis:alpine`
  *redis:alpine*  redis rodando em cima da distro linux alpine, é uma distro simplificada com foco em performance

# Preparando o DB
  Após a instalação do postgres acessar o mesmo usando um gerenciador (ex.: DBeaver), e criar o DB com o mesmo nome presente no arquivo `ormconfig.js` (ex.: gostack_gobarber)


# TypeORM - o comando 'typeorm' depende da configuração disponíveis em package.json

`yarn typeorm`
  Lista os comandos disponíveis

`yarn typeorm migration:run`  
  Executa as migrations