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

Start from `kubectl` and k8s

Edit `templates/hardhat-mainnet-sandbox-env-configmap.yaml`

```yaml
apiVersion: v1
data:
  # Change to your provider url
  PROVIDER_URL: {{ .Values.provider.url }}
kind: ConfigMap
metadata:
  creationTimestamp: null
  labels:
    io.kompose.service: hardhat-mainnet-sandbox-env
  name: hardhat-mainnet-sandbox-env
```

```bash
kubectl apply -f templates/
```

Start from `helm`

Edit provider url in `values.yaml`.

```yaml
provider:
  url: <your_node_provider>
```

```bash
helm install hardhat-mainnet-sandbox .
```