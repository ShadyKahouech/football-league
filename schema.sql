-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema league
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema league
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `league` DEFAULT CHARACTER SET utf8 ;
USE `league` ;

-- -----------------------------------------------------
-- Table `league`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idadmin`),
  UNIQUE INDEX `idadmin_UNIQUE` (`idadmin` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `league`.`clubs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`clubs` (
  `idteam` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `code` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  `founded` INT NULL,
  `logo` VARCHAR(255) NULL,
  PRIMARY KEY (`idteam`),
  UNIQUE INDEX `idteam_UNIQUE` (`idteam` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `league`.`players`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`players` (
  `idplayers` INT NOT NULL AUTO_INCREMENT,
  `nationality` VARCHAR(255) NULL,
  `age` INT NULL,
  `clubs_idteam` INT NULL,
  `firstname` VARCHAR(255) NULL,
  `lastname` VARCHAR(255) NULL,
  `birth` VARCHAR(45) NULL,
  `height` VARCHAR(45) NULL,
  `weight` VARCHAR(45) NULL,
  `photo` VARCHAR(255) NULL,
  PRIMARY KEY (`idplayers`),
  UNIQUE INDEX `idplayers_UNIQUE` (`idplayers` ASC) VISIBLE,
  INDEX `fk_players_clubs1_idx` (`clubs_idteam` ASC) VISIBLE,
  CONSTRAINT `fk_players_clubs1`
    FOREIGN KEY (`clubs_idteam`)
    REFERENCES `league`.`clubs` (`idteam`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
