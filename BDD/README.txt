README

Méthode 1:
1) Copier le dossier "pizzatologue" dans le fichier data de mysql à l'adresse :

	C:\wamp64\bin\mysql\mysql5.7.21\data


Méthode 2 :
1) Se rendre sur phpmyadmin 

2) Créer une nouvelle base de données avec comme nom : "pizzatologue"

3) Aller dans la console sql et coller les instructions suivantes :

CREATE TABLE AdresseLivraison (
  idAdresseLivraison int(11) NOT NULL,
  nomLieu text NOT NULL,
  adresse text NOT NULL,
  codePostal varchar(5) NOT NULL,
  ville varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table Article
--

CREATE TABLE Article (
  idArticle int(11) NOT NULL,
  libelle varchar(30) NOT NULL,
  description text NOT NULL,
  prix float NOT NULL,
  idTypeArticle int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table Article
--

INSERT INTO Article (idArticle, libelle, description, prix, idTypeArticle) VALUES
(1, 'Margarita', 'Pizz tomate olive from', 14, 1),
(2, 'La Kostas', 'Pizz spéciale Grecque', 50, 1),
(3, 'Coca cola', 'Boisson 33cl', 1.5, 2);

-- --------------------------------------------------------

--
-- Structure de la table Client
--

CREATE TABLE Client (
  idClient int(11) NOT NULL,
  nom varchar(50) NOT NULL,
  prenom varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  numTel int(10) NOT NULL,
  adresseFacturation text NOT NULL,
  codePostal int(5) NOT NULL,
  ville varchar(30) NOT NULL,
  motDePasse varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table Commande
--

CREATE TABLE Commande (
  idCommande int(11) NOT NULL,
  date datetime NOT NULL,
  description text NOT NULL,
  prixTotal float NOT NULL,
  etatAvancement int(1) NOT NULL,
  estPaye tinyint(1) NOT NULL,
  idClient int(11) NOT NULL,
  idAdresseLivraison int(11) NOT NULL,
  idTournee int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table Contenir
--

CREATE TABLE Contenir (
  quantite int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table Livreur
--

CREATE TABLE Livreur (
  idLivreur int(11) NOT NULL,
  nom varchar(25) NOT NULL,
  prenom varchar(25) NOT NULL,
  statut varchar(25) NOT NULL,
  email varchar(50) NOT NULL,
  motDePasse varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table Tournee
--

CREATE TABLE Tournee (
  idTournee int(11) NOT NULL,
  coordoonneesX float NOT NULL,
  coordoonneesY float NOT NULL,
  estTerminee tinyint(1) NOT NULL,
  idLivreur int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table TypeArticle
--

CREATE TABLE TypeArticle (
  idTypeArticle int(11) NOT NULL,
  nom varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table TypeArticle
--

INSERT INTO TypeArticle (idTypeArticle, nom) VALUES
(1, 'Plat'),
(2, 'Boisson');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table AdresseLivraison
--
ALTER TABLE AdresseLivraison
  ADD PRIMARY KEY (idAdresseLivraison);

--
-- Index pour la table Article
--
ALTER TABLE Article
  ADD PRIMARY KEY (idArticle),
  ADD KEY fk_idTypeArticle (idTypeArticle);

--
-- Index pour la table Client
--
ALTER TABLE Client
  ADD PRIMARY KEY (idClient);

--
-- Index pour la table Commande
--
ALTER TABLE Commande
  ADD PRIMARY KEY (idCommande),
  ADD KEY fk_idclient (idClient),
  ADD KEY fk_idAdrLivraison (idAdresseLivraison),
  ADD KEY fk_idTournee (idTournee);

--
-- Index pour la table Livreur
--
ALTER TABLE Livreur
  ADD PRIMARY KEY (idLivreur);

--
-- Index pour la table Tournee
--
ALTER TABLE Tournee
  ADD PRIMARY KEY (idTournee),
  ADD KEY fk_idLivreur (idLivreur);

--
-- Index pour la table TypeArticle
--
ALTER TABLE TypeArticle
  ADD PRIMARY KEY (idTypeArticle);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table AdresseLivraison
--
ALTER TABLE AdresseLivraison
  MODIFY idAdresseLivraison int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table Article
--
ALTER TABLE Article
  MODIFY idArticle int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table Client
--
ALTER TABLE Client
  MODIFY idClient int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table Commande
--
ALTER TABLE Commande
  MODIFY idCommande int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table Livreur
--
ALTER TABLE Livreur
  MODIFY idLivreur int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table Tournee
--
ALTER TABLE Tournee
  MODIFY idTournee int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table TypeArticle
--
ALTER TABLE TypeArticle
  MODIFY idTypeArticle int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table Article
--
ALTER TABLE Article
  ADD CONSTRAINT fk_idTypeArticle FOREIGN KEY (idTypeArticle) REFERENCES TypeArticle (idTypeArticle);

--
-- Contraintes pour la table Commande
--
ALTER TABLE Commande
  ADD CONSTRAINT fk_idAdrLivraison FOREIGN KEY (idAdresseLivraison) REFERENCES AdresseLivraison (idAdresseLivraison),
  ADD CONSTRAINT fk_idTournee FOREIGN KEY (idTournee) REFERENCES Tournee (idTournee),
  ADD CONSTRAINT fk_idclient FOREIGN KEY (idClient) REFERENCES Client (idClient);

--
-- Contraintes pour la table Tournee
--
ALTER TABLE Tournee
  ADD CONSTRAINT fk_idLivreur FOREIGN KEY (idLivreur) REFERENCES Livreur (idLivreur);