FROM ubuntu:18.04

RUN mkdir -p /root/hardhat-mainnet-sandbox

WORKDIR /root/hardhat-mainnet-sandbox
SHELL ["/bin/bash", "-c"]

ENV NODE_VERSION 10.15.3
EXPOSE 8545

RUN apt update && \
    apt install -yqq git vim curl build-essential ca-certificates libssl-dev ssh python && \
    curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash && \
    source ~/.nvm/nvm.sh && \
    nvm install v$NODE_VERSION && \
    nvm use v$NODE_VERSION && \
    nvm alias default v$NODE_VERSION && \
    git clone https://github.com/BenjaminLu/hardhat-mainnet-sandbox.git /root/hardhat-mainnet-sandbox && \
    cd /root/hardhat-mainnet-sandbox && \
    npm install -g node-gyp && \
    npm install && \
    ln -s /root/.nvm/versions/node/v$NODE_VERSION/bin/node /usr/bin/node && \
    ln -s /root/.nvm/versions/node/v$NODE_VERSION/bin/npm /usr/bin/npm && \
    ln -s /root/.nvm/versions/node/v$NODE_VERSION/bin/npx /usr/bin/npx && \
    chmod +x /root/hardhat-mainnet-sandbox/entrypoint.sh

CMD ["/root/hardhat-mainnet-sandbox/entrypoint.sh"]