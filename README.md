[![Known Vulnerabilities](https://snyk.io/test/github/luzeduardo/proxyall/badge.svg?targetFile=package.json)](https://snyk.io/test/github/luzeduardo/proxyall?targetFile=package.json)

# ProxyAll

## Como executar localmente
```bash
git clone https://github.com/luzeduardo/proxyall
cd proxyall
docker-compose up
```

1. Subirá um servidor proxy na porta 8888 com contexto /search que redirecionará as requisições para o endereço escolhido.
2. Para adicionar mais contextos é necessário apenas editar o server.js e subir novamente o container.
3. Se for necessário deixar esse contexto público é necessário instalar ngrok e apontar para a porta 8888 e apontar sua requisição para o endereço retornado pelo ngrok.
```bash
ngrok http 127.0.0.1
```
