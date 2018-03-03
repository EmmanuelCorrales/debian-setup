#!/bin/bash

#Installer for Javascript Development envronment."
sudo apt-get update
sudo apt-get install build-essential libssl-dev

# Download and run  Node.js installations script.
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh

source ~/.nvm/nvm.sh

# Install the LTS version
nvm install --lts

# Show currently installed Node.js version.
node -v

# Install typescript globally.
npm -g install typescript


# Install Yarn.
echo "Installing Yarn..."
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
yarn -v
