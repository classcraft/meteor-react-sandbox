# Meteor React Sandbox

## Démarrer le serveur de développement local en exécutant les commandes suivantes:

```sh
# Installer Meteor si ce n'est déjà fait
curl https://install.meteor.com/ | sh
meteor --version

# Installer Yarn dans le contexte global de Meteor
meteor npm i -g yarn

# Installer les dépendances du projet
meteor yarn

# Démarrer le serveur local
meteor yarn start
```

## Lancer la validation Eslint du projet avec la commande suivante:

```sh
# Lancer la validation seulement
meteor yarn lint

# Lancer et fixer les erreurs automatiquement
meteor yarn lint-fix
```
