<?php
    require_once("action/DAO/Connection.php");
    class UserDataBase {
        public static function enregistrementPartie($joueur__nom, $ennemi__nom, $gagnant) {
            try {
                $connection = Connection::getConnection();
        
                $sql = "INSERT INTO parties_magix(joueur__nom, ennemi__nom, gagnant) 
                        VALUES (:joueur__nom, :ennemi__nom, :gagnant)";

                $statement = $connection->prepare($sql);
                $statement->bindParam(1, $joueur__nom);
                $statement->bindParam(2, $ennemi__nom);
                $statement->bindParam(3, $gagnant);
                $statement->execute();
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }

        public static function getParties($joueurConnected) {
            try{
                $connection = Connection::getConnection();
                $sql = "SELECT * FROM parties_magix WHERE joueur__nom = :joueurConnected ORDER BY date_partie DESC";
                $statement = $connection->prepare($sql);
                $statement->bindParam(1, $joueurConnected);
                $statement->execute();
                $result = $statement->fetchAll();
                return $result;
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }

        public static function getNomDesUsagers() {
            try {
                $connection = Connection::getConnection();
                $sql = "
                    
                    SELECT DISTINCT ennemi__nom AS nom FROM parties_magix
                ";
                $statement = $connection->prepare($sql);
                $statement->execute();
                $result = $statement->fetchAll();
                return $result;
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }

        public static function getPartiesUsagerSpecifique($nom){
            try{
                $connection = Connection::getConnection();
                $sql = "SELECT * FROM parties_magix WHERE ennemi__nom = :nom";
                $statement = $connection->prepare($sql);
                $statement->bindParam(1, $nom); 
                $statement->execute();
                $result = $statement->fetchAll();
                return $result;
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }   

        public static function getPartieUserCount($userConnected){
            try{
                $connection = Connection::getConnection();
                $sql = "SELECT COUNT(*) FROM parties_magix WHERE gagnant = :userConnected AND joueur__nom = :userConnected";
                $statement = $connection->prepare($sql);
                $statement->bindParam(1, $userConnected);
                $statement->execute();
                $result = $statement->fetchAll();
                return $result;
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }
        
        public static function getPartieUserTotal($userConnected){
            try{
                $connection = Connection::getConnection();
                $sql = "SELECT COUNT(*) FROM parties_magix WHERE joueur__nom = :userConnected";
                $statement = $connection->prepare($sql);
                $statement->bindParam(1, $userConnected);
                $statement->execute();
                $result = $statement->fetchAll();
                return $result;
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }
    }
?>