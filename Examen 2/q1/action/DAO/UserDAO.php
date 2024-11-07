<?php


	class UserDAO {

		/**
		 * Cette méthode retourne le match selon le champ d'intérêt
		 *
		 * La méthode retourne un tableau qui contient deux informations :
		 * la température, ainsi que la météo actuelle.
		 */
		public static function getMatch($fieldOfInterest) {
			$result = array();
			
			$rnd = rand(1, 5);
			$result["picture"] = $rnd . ".jpg";
						
			if ($rnd == 1) $prefix = "Mad#";
			if ($rnd == 2) $prefix = "Pwn#";
			if ($rnd == 3) $prefix = "Bob#";
			if ($rnd == 4) $prefix = "Tri#";
			if ($rnd == 5) $prefix = "Neo#";
			
			$result["name"] = $prefix . strlen($fieldOfInterest);

			return $result;
		}
	}
