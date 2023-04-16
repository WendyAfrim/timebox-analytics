# Utilisez une image node.js comme image de base
FROM node:14

# Créez un répertoire de travail pour votre application
WORKDIR /app/

# Copiez le fichier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Exposez le port 3000 pour votre application
EXPOSE 3000

# Démarrez l'application
CMD [ "npm", "start" ]