# Hardhat Mainnet Sandbox

## Start Service

Start from `docker run` using dockerhub image.

```bash
docker run -p 8545:8545 -e PROVIDER_URL=<your_node_provider> benjaminlu/hardhat-mainnet-sandbox:1.0.0
```

Start from `docker-compose.yml`.

```bash
git clone https://github.com/BenjaminLu/hardhat-mainnet-sandbox.git

# Edit .env
echo 'PROVIDER_URL=<your_node_provider>' > .env

docker-compose up hardhat-mainnet-sandbox
```

Start from `kubectl` using NodePort mode

```bash
git clone https://github.com/BenjaminLu/hardhat-mainnet-sandbox.git

kubectl apply -f templates
```

Edit `templates/hardhat-mainnet-sandbox-service.yaml` if you wanna change the config.

```yml
ports:
    - name: "8545"
      port: 8545
      targetPort: 8545
      nodePort: 30000
```

Start from `helm`

```bash
git clone https://github.com/BenjaminLu/hardhat-mainnet-sandbox.git

helm install hardhat-mainnet-sandbox .
```