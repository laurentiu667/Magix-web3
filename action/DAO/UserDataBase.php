<?php
    require_once("action/DAO/Connection.php");
    class UserDataBase {
        public static function enregistrementPartie($joueur__nom, $ennemi__nom, $date__partie, $gagnant){
            try{
                // connection a la base de donnee
                $connection = Connection::getConnection();
                // preparation de la requete
                $sql = "INSERT INTO 
                        partie_magix(joueur__nom, ennemi__nom, date__partie, gagnant) 
                        VALUES (:joueur__nom, :ennemi__nom, :date__partie, :gagnant)";

                // preparation de la requete
                $statement = $connection->prepare($sql);
                // la liaison des parametres
                $statement->bindParam(":joueur__nom", $joueur__nom);
                $statement->bindParam(":ennemi__nom", $ennemi__nom);
                $statement->bindParam(":date__partie", $date__partie);
                $statement->bindParam(":gagnant", $gagnant);
                // execution de la requete
                $statement->execute();
                echo "partie enrégistrée";
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }

        public static function getParties(){
            try{
                // connection a la base de donnee
                $connection = Connection::getConnection();
                // preparation de la requete
                $sql = "SELECT * FROM partie_magix ORDERED BY date__partie DESC";
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
        
    }
?>