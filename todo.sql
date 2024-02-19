-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 04, 2023 at 01:07 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `task` varchar(255) NOT NULL,
  `addTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` text NOT NULL,
  `complete` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `task`, `addTime`, `status`, `complete`) VALUES
(86, '101', '2023-12-03 10:26:41', 'live', 'no'),
(88, '303', '2023-12-01 14:58:07', 'delete', 'no'),
(89, '404', '2023-12-03 10:26:40', 'live', 'no'),
(90, '50515', '2023-12-01 15:34:05', 'live', 'yes'),
(91, '606', '2023-12-03 12:10:26', 'live', 'no'),
(92, '707', '2023-12-01 14:58:17', 'delete', 'no'),
(93, '808', '2023-12-01 14:58:04', 'live', 'yes'),
(94, 'erll111111111122222222222', '2023-12-01 15:46:24', 'live', 'yes'),
(96, 'asdffs', '2023-12-01 15:50:25', 'delete', 'yes'),
(97, 'hgfddsasa', '2023-12-03 10:26:19', 'delete', 'yes'),
(98, 'ygfssd', '2023-12-02 11:00:57', 'delete', 'yes'),
(99, 'dsfdfsdf', '2023-12-01 15:34:30', 'live', 'yes'),
(101, 'pikaqiu', '2023-12-01 15:50:12', 'live', 'yes'),
(103, '网球运动2020', '2023-12-03 10:26:12', 'live', 'no'),
(104, 'lkok火火2020', '2023-12-03 10:26:00', 'live', 'yes'),
(105, 'laksldjsajdasasdasdasdsaf', '2023-12-02 11:09:39', 'live', 'yes'),
(106, 'sahdksahdsa', '2023-12-03 10:26:21', 'delete', 'yes'),
(107, 'shdsikhdas12', '2023-12-03 10:26:29', 'live', 'yes'),
(108, 'wouewue23432', '2023-12-03 10:26:16', 'live', 'no'),
(109, 'wu7e928', '2023-12-03 10:26:35', 'delete', 'yes'),
(110, '278398u2', '2023-12-02 11:05:28', 'live', 'yes'),
(111, 'bagayalu', '2023-12-03 10:26:05', 'live', 'yes'),
(112, '2784723', '2023-12-03 12:10:46', 'live', 'no'),
(113, '32432423@#@@#¥#@¥', '2023-12-03 12:10:51', 'live', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`) VALUES
(1, '123', '123', 'Ming', 'Xiao'),
(2, '123456', '123456', 'Wang', 'Mei');

-- --------------------------------------------------------

--
-- Table structure for table `user_todo`
--

CREATE TABLE `user_todo` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `task` varchar(255) NOT NULL,
  `addTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` text NOT NULL,
  `complete` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_todo`
--

INSERT INTO `user_todo` (`id`, `user_id`, `task`, `addTime`, `status`, `complete`) VALUES
(1, 1, 'buy pen', '2023-12-03 12:45:00', 'delete', 'yes'),
(2, 1, 'buy pork', '2023-12-03 02:14:30', 'live', 'no'),
(3, 1, 'go to supermarket one time', '2023-12-03 04:27:52', 'live', 'yes'),
(5, 1, 'watch movie', '2023-12-03 06:21:35', 'delete', 'no'),
(6, 1, '看电视！', '2023-12-04 04:42:57', 'live', 'no'),
(7, 2, 'pikaqiu', '2023-12-03 13:55:46', 'live', 'no'),
(8, 2, '皮卡丘', '2023-12-03 13:55:50', 'live', 'no'),
(9, 2, 'play yoga', '2023-12-03 13:56:04', 'live', 'yes'),
(10, 2, 'eat pork', '2023-12-04 09:42:10', 'live', 'no');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_todo`
--
ALTER TABLE `user_todo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_todo`
--
ALTER TABLE `user_todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_todo`
--
ALTER TABLE `user_todo`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
