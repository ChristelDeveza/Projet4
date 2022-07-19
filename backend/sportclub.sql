-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema sportclub
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sportclub
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sportclub` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `sportclub` ;

-- -----------------------------------------------------
-- Table `sportclub`.`abonnement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportclub`.`abonnement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NOT NULL,
  `Price` INT NOT NULL,
  `Description` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sportclub`.`adherent`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportclub`.`adherent` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NOT NULL,
  `Firstname` VARCHAR(255) NOT NULL,
  `Address` VARCHAR(255) NULL DEFAULT NULL,
  `E-mail` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(255) NOT NULL,
  `IsCoach` TINYINT NOT NULL DEFAULT '0',
  `abonnement_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_adherent_abonnement_idx` (`abonnement_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sportclub`.`exercice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportclub`.`exercice` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sportclub`.`programme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportclub`.`programme` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NOT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sportclub`.`adherent_has_programme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportclub`.`adherent_has_programme` (
  `adherent_id` INT NOT NULL,
  `programme_id` INT NOT NULL,
  PRIMARY KEY (`adherent_id`, `programme_id`),
  INDEX `fk_adherent_has_programme_programme1_idx` (`programme_id` ASC) VISIBLE,
  INDEX `fk_adherent_has_programme_adherent1_idx` (`adherent_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sportclub`.`programme_has_exercice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportclub`.`programme_has_exercice` (
  `programme_id` INT NOT NULL,
  `exercice_id` INT NOT NULL,
  PRIMARY KEY (`programme_id`, `exercice_id`),
  INDEX `fk_programme_has_exercice_exercice1_idx` (`exercice_id` ASC) VISIBLE,
  INDEX `fk_programme_has_exercice_programme1_idx` (`programme_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
