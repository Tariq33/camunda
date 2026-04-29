# Camunda — démo e-commerce et processus BPMN

Application de démonstration illustrant l’intégration de **Camunda Platform 7** avec **Spring Boot** : un parcours utilisateur type boutique (consulter une fiche, panier, achat) est piloté par un processus BPMN, tandis qu’une interface **Angular** appelle l’API REST du backend.

Projet issu d’un point technique (démo pédagogique).

## Sommaire

- [Architecture](#architecture)
- [Prérequis](#prérequis)
- [Base de données](#base-de-données)
- [Démarrage du backend](#démarrage-du-backend)
- [Démarrage du frontend](#démarrage-du-frontend)
- [API REST](#api-rest)
- [Camunda (Cockpit / Tasklist)](#camunda-cockpit--tasklist)
- [Structure du dépôt](#structure-du-dépôt)

## Architecture

| Composant | Rôle |
|-----------|------|
| **Camunda backend** | Spring Boot 2.7, Java 11, JPA, **PostgreSQL**, **Liquibase**, déploiement du modèle `product.bpmn` et délégués Java |
| **Camunda frontend** | Angular 13 + Angular Material, consommation de l’API sur `http://localhost:8080` |
| **Processus `product`** | Événements conditionnels sur la variable `etat` (`read`, `open`, `add`, achat, retrait du panier, etc.) et tâches utilisateur / service tasks |

Le backend expose l’application Camunda embarquée (webapps) en plus de l’API métier.

## Prérequis

- **JDK 11**
- **Maven** (ou utilisation du wrapper `mvnw` / `mvnw.cmd` fourni dans le backend)
- **Node.js** et **npm** (versions compatibles avec Angular CLI 13)
- **PostgreSQL** avec une base créée pour l’application (voir ci-dessous)

## Base de données

1. Créez une base PostgreSQL (par défaut le projet attend une base nommée `camunda` sur `localhost:5432`).
2. Ajustez si besoin les identifiants dans `Camunda backend/src/main/resources/application.yml` :

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/camunda
    username: postgres
    password: admin
```

Les schémas applicatifs et les données initiales (par ex. produits) sont gérés via **Liquibase** (`src/main/resources/liquibase/`).

## Démarrage du backend

Depuis le dossier `Camunda backend` :

```bash
./mvnw spring-boot:run
```

Sous Windows :

```cmd
mvnw.cmd spring-boot:run
```

L’API REST écoute par défaut sur le port **8080** (port Spring Boot par défaut).

## Démarrage du frontend

Depuis le dossier `Camunda frontend` :

```bash
npm install
npm start
```

Par défaut, `ng serve` sert l’application en développement (souvent **http://localhost:4200**). Les appels HTTP pointent vers `http://localhost:8080` (voir `src/app/service/product.service.ts`).

## API REST

Préfixe : `/product` (CORS ouvert sur toutes les origines côté backend).

| Méthode | Chemin | Description |
|---------|--------|-------------|
| `GET` | `/product` | Liste des produits |
| `GET` | `/product/{id}` | Détail d’un produit |
| `POST` | `/product/process` | Corps JSON `ProductProcessDto` : démarre ou fait avancer l’instance de processus Camunda liée à l’utilisateur et au produit (clé métier `userId` + `productId`) |

Le corps `POST /product/process` contient notamment `userId`, `productId`, `etat` et `quantity`, alignés sur les variables et conditions du BPMN.

## Camunda (Cockpit / Tasklist)

Après démarrage du backend, les webapps Camunda sont généralement accessibles sous :

**http://localhost:8080/camunda/**

Compte administrateur configuré dans `application.yml` :

- **Identifiant :** `demo`
- **Mot de passe :** `demo`

Vous pouvez y suivre les instances du processus `product`, les tâches et les variables d’exécution.

## Structure du dépôt

```
camunda-main/
├── Camunda backend/          # Spring Boot + Camunda + JPA + Liquibase
│   └── src/main/
│       ├── java/...           # REST, services, délégués Camunda
│       └── resources/
│           ├── application.yml
│           ├── camunda/product.bpmn
│           └── liquibase/
└── Camunda frontend/         # Angular (IHM démo)
    └── src/app/              # composants, services, modèles
```

## Auteur

Démo décrite dans le `pom.xml` : **Tariq Farud** (projet Camunda / `CamundaArtifact`).

---

*Pour un dépôt distant GitLab, vous pouvez lier ce dépôt avec `git remote add origin` et la branche `main` selon votre hébergeur.*
