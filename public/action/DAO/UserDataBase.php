<?php
    require_once("action/DAO/Connection.php");
    class UserDataBase {
        public static function enregistrementPartie($joueur__nom, $ennemi__nom, $gagnant) {
            try {
                // Connexion à la base de données
                $connection = Connection::getConnection();
                
                // Préparation de la requête sans le champ date_partie
                $sql = "INSERT INTO parties_magix(joueur__nom, ennemi__nom, gagnant) 
                        VALUES (:joueur__nom, :ennemi__nom, :gagnant)";
        
                // Préparation de la requête
                $statement = $connection->prepare($sql);
        
                // Liaison des paramètres
                $statement->bindParam(":joueur__nom", $joueur__nom);
                $statement->bindParam(":ennemi__nom", $ennemi__nom);
                $statement->bindParam(":gagnant", $gagnant);
        
                // Exécution de la requête
                $statement->execute();
            
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }
        

        public static function getParties(){
            try{
                // connection a la base de donnee
                $connection = Connection::getConnection();
                // preparation de la requete
                $sql = "SELECT * FROM parties_magix ORDER BY date_partie DESC";


                // preparation de la requete
                $statement = $connection->prepare($sql);
                // execution de la requete
                $statement->execute();
                // recuperation des resultats
                $result = $statement->fetchAll();
                return $result;
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }

        public static function getNomDesUsagers(){
            try{
                // connection a la base de donnee
                $connection = Connection::getConnection();
                // preparation de la requete
                $sql = "SELECT DISTINCT ennemi__nom FROM parties_magix";
                // preparation de la requete
                $statement = $connection->prepare($sql);
                // execution de la requete
                $statement->execute();
                // recuperation des resultats
                $result = $statement->fetchAll();
                return $result;

            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }

        public static function getPartiesUsagerSpecifique($nom){
            try{
                // connection a la base de donnee
                $connection = Connection::getConnection();
                // preparation de la requete
                $sql = "SELECT * FROM parties_magix WHERE ennemi__nom = :nom";
                // preparation de la requete
                $statement = $connection->prepare($sql);

                $statement->bindParam(':nom', $nom);
                // execution de la requete
                $statement->execute();
                // recuperation des resultats
                $result = $statement->fetchAll();
                return $result;

            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }

        
    }
?>