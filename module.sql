-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 17, 2026 at 02:07 PM
-- Server version: 11.5.2-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e_learning`
--

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `id` int(11) NOT NULL,
  `moduleName` varchar(255) NOT NULL,
  `moduleCode` varchar(50) NOT NULL,
  `moduleTrainer` varchar(255) NOT NULL,
  `moduleDescription` text DEFAULT NULL,
  `createAt` datetime NOT NULL,
  `updateAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`id`, `moduleName`, `moduleCode`, `moduleTrainer`, `moduleDescription`, `createAt`, `updateAt`) VALUES
(1, 'Database Development with postgres', 'SODDB202', 'IMPANO', 'Development of relational database using mysql', '2026-04-14 10:13:44', '2026-04-14 11:01:47'),
(2, 'Frontend Development With Reactjs', 'SODFDR500', 'IMPANO', 'Advanced fronted ui development with react js library.', '2026-04-14 10:34:25', NULL),
(4, 'Database Development with mongodb', 'SODDNM785', 'IMPANO', 'Development of database using non sql engine mongo db.', '2026-04-14 10:34:25', NULL),
(5, 'Frontend Development', 'SOD405', 'impano', 'this is module escription', '2026-04-16 11:28:24', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `module`
--
ALTER TABLE `module`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
