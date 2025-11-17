-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 17 nov. 2025 à 16:59
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `trouve_ton_artisan`
--

-- --------------------------------------------------------

--
-- Structure de la table `data`
--

CREATE TABLE `data` (
  `id` int(11) NOT NULL,
  `Nom` varchar(22) DEFAULT NULL,
  `Spécialité` varchar(12) DEFAULT NULL,
  `Note` varchar(3) DEFAULT NULL,
  `Ville` varchar(16) DEFAULT NULL,
  `A propos` varchar(196) DEFAULT NULL,
  `Email` varchar(38) DEFAULT NULL,
  `Site Web` varchar(38) DEFAULT NULL,
  `Catégorie` varchar(12) DEFAULT NULL,
  `Top` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `data`
--

INSERT INTO `data` (`id`, `Nom`, `Spécialité`, `Note`, `Ville`, `A propos`, `Email`, `Site Web`, `Catégorie`, `Top`) VALUES
(1, 'Boucherie Dumont', 'Boucher', '4.5', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boucherie.dumond@gmail.com', '', 'Alimentation', 'FALSE'),
(2, 'Au pain chaud', 'Boulanger', '4.8', 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'aupainchaud@hotmail.com', '', 'Alimentation', 'TRUE'),
(3, 'Chocolaterie Labbé', 'Chocolatier', '4.9', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 'Alimentation', 'TRUE'),
(4, 'Traiteur Truchon', 'Traiteur', '4.1', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 'Alimentation', 'FALSE'),
(5, 'Orville Salmons', 'Chauffagiste', '5,0', 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'o-salmons@live.com', '', 'Bâtiment', 'TRUE'),
(6, 'Mont Blanc Eléctricité', 'Electricien', '4.5', 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 'Bâtiment', 'FALSE'),
(7, 'Boutot & fils', 'Menuisier', '4.7', 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 'Bâtiment', 'FALSE'),
(8, 'Vallis Bellemare', 'Plombier', '4,0', 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 'Bâtiment', 'FALSE'),
(9, 'Claude Quinn', 'Bijoutier', '4.2', 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'claude.quinn@gmail.com', '', 'Fabrication', 'FALSE'),
(10, 'Amitee Lécuyer', 'Couturier', '4.5', 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 'Fabrication', 'FALSE'),
(11, 'Ernest Carignan', 'Ferronier', '5,0', 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'e-carigan@hotmail.com', '', 'Fabrication', 'FALSE'),
(12, 'Royden Charbonneau', 'Coiffeur', '3.8', 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'r.charbonneau@gmail.com', '', 'Services', 'FALSE'),
(13, 'Leala Dennis', 'Coiffeur', '3.8', 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 'Services', 'FALSE'),
(14, 'C\'est sup\'hair', 'Coiffeur', '4.1', 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'sup-hair@gmail.com', 'https://sup-hair.fr', 'Services', 'FALSE'),
(15, 'Le monde des fleurs', 'Fleuriste', '4.6', 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 'Services', 'FALSE'),
(16, 'Valérie Laderoute', 'Toiletteur', '4.5', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v-laredoute@gmail.com', '', 'Services', 'FALSE'),
(17, 'CM Graphisme', 'Webdesign', '4.4', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 'Services', 'FALSE');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `data`
--
ALTER TABLE `data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
