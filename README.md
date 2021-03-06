# Serveur Web (Node.js / React.js / MySQL) fonctionnant sous Docker

## Développement Web

### 1. Installation de Node.js et du gestionnaire de paquets NPM

```
sudo apt install node npm
```

### 2. Backend - Node.js

Création du répertoire de développement :

```
mkdir back
cd back
```

Initialisation du projet :

```
npm init
npm install express mysql cors
touch index.js
```

### 3. Frontend - React.js

Initialisation de l'application React :

```
npx create-react-app front
cd front
```

Ajout du client HTTP Axios pour consommer des API :

```
npm install axios
```

* Démarrer en mode développement :

```
cd front
npm start
```

* Déployer en production :

```
cd front
npm run build
```

```
sudo npm install -g serve
serve -s build
```

## Intégration avec docker-compose

### 1. Installation

Télécharger la dernière version stable de `docker-compose` :

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Appliquer les droits d'exécution au binaire :

```
sudo chmod +x /usr/local/bin/docker-compose
```

Créer un lien dynamique vers le binaire :

```
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

Tester l'installation :

```
docker-compose --version
```

### 2. Configuration

Les containers de l'applicatif à créer sont décrit dans le fichier `docker-compose.yml` :

```
sudo nano docker-compose.yml
```

La configuration ci-dessous permet de créer deux conteneurs :
- `web` : construit à partir du fichier Dockerfile présent dans le répertoire actuel
- `redis` : une machine `alpine` issue de Docker Hub

```
version: "3.9"
services:
  web:
    build: .
    ports:
      - "5000:5000"
  redis:
    image: "redis:alpine"
```

### 3. Utilisation

* Créer & démarrer les services :

```
docker-compose up
```

* Créer & démarrer les services en mode détaché (tâche de fond) :

```
docker-compose up -d
```

* Arrêter & détruire les services :

```
docker-compose down
```

* Arrêter & détruire les services et les volumes :

```
docker-compose down -v
```

* Démarrer les services :

```
docker-compose start
```

* Arrêter les services :

```
docker-compose stop
```

* Détruire les services :

```
docker-compose rm
```

* Détruire les images :

```
docker-compose rmi
```

* Afficher les images crées :

```
docker-compose images
```

* Afficher les containers démarrés :

```
docker-compose ps
```
