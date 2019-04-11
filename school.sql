-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2019 at 09:41 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(50) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `email`, `is_active`, `date_created`, `date_updated`) VALUES
(1, 'student1@test.com', 0, '2019-04-05 10:08:00', '2019-04-05 10:08:00'),
(2, 'student2@test.com', 0, '2019-04-05 10:08:00', '2019-04-05 10:08:00'),
(3, 'studentjon@example.com', 0, '2019-04-08 16:27:32', '2019-04-08 16:27:32'),
(4, 'studenthon@example.com', 0, '2019-04-08 16:27:32', '2019-04-08 16:27:32'),
(5, 'studentjon1@example.com', 1, '2019-04-08 17:48:43', '2019-04-08 17:48:43'),
(6, 'studenthon1@example.com', 1, '2019-04-08 17:48:43', '2019-04-08 17:48:43'),
(7, 'studentjon2@example.com', 1, '2019-04-08 17:50:56', '2019-04-08 17:50:56'),
(8, 'studenthon2@example.com', 1, '2019-04-08 17:50:56', '2019-04-08 17:50:56'),
(9, 'studentjon3@example.com', 1, '2019-04-08 17:52:31', '2019-04-08 17:52:31'),
(10, 'studenthon3@example.com', 1, '2019-04-08 17:52:31', '2019-04-08 17:52:31'),
(11, 'studentjon4@example.com', 1, '2019-04-08 17:53:08', '2019-04-08 17:53:08'),
(12, 'studenthon4@example.com', 1, '2019-04-08 17:53:08', '2019-04-08 17:53:08'),
(13, 'studentjon5@example.com', 1, '2019-04-08 17:54:03', '2019-04-08 17:54:03'),
(14, 'studenthon5@example.com', 1, '2019-04-08 17:54:03', '2019-04-08 17:54:03'),
(15, 'studentjon6@example.com', 1, '2019-04-08 17:58:27', '2019-04-08 17:58:27'),
(16, 'studenthon6@example.com', 1, '2019-04-08 17:58:27', '2019-04-08 17:58:27'),
(17, 'studentjon7@example.com', 1, '2019-04-08 18:03:13', '2019-04-08 18:03:13'),
(18, 'studenthon7@example.com', 1, '2019-04-08 18:03:13', '2019-04-08 18:03:13'),
(19, 'studentjon8@example.com', 1, '2019-04-08 18:05:39', '2019-04-08 18:05:39'),
(20, 'studenthon8@example.com', 1, '2019-04-08 18:05:39', '2019-04-08 18:05:39'),
(21, 'studentjon9@example.com', 1, '2019-04-08 18:06:43', '2019-04-08 18:06:43'),
(22, 'studenthon9@example.com', 1, '2019-04-08 18:06:43', '2019-04-08 18:06:43'),
(23, 'studentjon10@example.com', 1, '2019-04-08 18:11:02', '2019-04-08 18:11:02'),
(24, 'studenthon10@example.com', 1, '2019-04-08 18:11:02', '2019-04-08 18:11:02'),
(25, 'studentjon11@example.com', 1, '2019-04-08 18:11:48', '2019-04-08 18:11:48'),
(26, 'studenthon11@example.com', 1, '2019-04-08 18:11:48', '2019-04-08 18:11:48'),
(27, 'studentjon12@example.com', 1, '2019-04-08 18:12:11', '2019-04-08 18:12:11'),
(28, 'studenthon12@example.com', 1, '2019-04-08 18:12:11', '2019-04-08 18:12:11'),
(29, 'studentjon13@example.com', 1, '2019-04-08 18:13:27', '2019-04-08 18:13:27'),
(30, 'studenthon13@example.com', 1, '2019-04-08 18:13:27', '2019-04-08 18:13:27'),
(31, 'studentjon14@example.com', 1, '2019-04-08 18:19:13', '2019-04-08 18:19:13'),
(32, 'studenthon14@example.com', 1, '2019-04-08 18:19:13', '2019-04-08 18:19:13'),
(33, 'studentjon15@example.com', 1, '2019-04-08 18:22:31', '2019-04-08 18:22:31'),
(34, 'studenthon15@example.com', 1, '2019-04-08 18:22:31', '2019-04-08 18:22:31'),
(35, 'studentjon16@example.com', 1, '2019-04-08 18:34:47', '2019-04-08 18:34:47'),
(36, 'studentjon17@example.com', 1, '2019-04-08 18:37:39', '2019-04-08 18:37:39'),
(37, 'studenthon17@example.com', 1, '2019-04-08 18:37:39', '2019-04-08 18:37:39'),
(38, 'studentjon18@example.com', 1, '2019-04-08 18:40:27', '2019-04-08 18:40:27'),
(39, 'studenthon18@example.com', 1, '2019-04-08 18:40:27', '2019-04-08 18:40:27'),
(40, 'studentjon19@example.com', 1, '2019-04-08 18:52:43', '2019-04-08 18:52:43'),
(41, 'studenthon19@example.com', 1, '2019-04-08 18:52:43', '2019-04-08 18:52:43'),
(42, 'studenthon20@example.com', 1, '2019-04-08 18:52:57', '2019-04-08 18:52:57'),
(43, 'studentjon21@example.com', 1, '2019-04-08 19:00:29', '2019-04-08 19:00:29'),
(44, 'studenthon21@example.com', 1, '2019-04-08 19:00:29', '2019-04-08 19:00:29'),
(45, 'studenthon22@example.com', 1, '2019-04-08 19:04:01', '2019-04-08 19:04:01'),
(46, 'studentjon23@example.com', 1, '2019-04-11 07:41:20', '2019-04-11 07:41:20'),
(47, 'studenthon23@example.com', 1, '2019-04-11 07:41:20', '2019-04-11 07:41:20'),
(48, 'studentjon24@example.com', 1, '2019-04-11 07:46:13', '2019-04-11 07:46:13'),
(49, 'studenthon24@example.com', 1, '2019-04-11 07:46:13', '2019-04-11 07:46:13'),
(50, 'studentjon25@example.com', 1, '2019-04-11 08:00:30', '2019-04-11 08:00:30'),
(51, 'studenthon25@example.com', 1, '2019-04-11 08:00:31', '2019-04-11 08:00:31'),
(52, 'studentjon@example.com', 0, '2019-04-11 11:36:20', '2019-04-11 11:36:20'),
(53, 'studenthon@example.com', 0, '2019-04-11 11:36:20', '2019-04-11 11:36:20'),
(54, 'studentjon@example.com', 0, '2019-04-11 11:53:56', '2019-04-11 11:53:56'),
(55, 'studentjon@example.com', 0, '2019-04-11 12:16:27', '2019-04-11 12:16:27'),
(56, 'studentjon@example.com', 0, '2019-04-11 12:31:31', '2019-04-11 12:31:31'),
(57, 'studenthon@example.com', 0, '2019-04-11 12:31:31', '2019-04-11 12:31:31'),
(58, 'studentjon@example.com', 0, '2019-04-11 12:44:56', '2019-04-11 12:44:56'),
(59, 'studenthon@example.com', 0, '2019-04-11 12:44:57', '2019-04-11 12:44:57'),
(60, 'studentjon@example.com', 0, '2019-04-11 12:45:41', '2019-04-11 12:45:41'),
(61, 'studentjon@example.com', 0, '2019-04-11 12:49:47', '2019-04-11 12:49:47'),
(62, 'studenthon@example.com', 0, '2019-04-11 12:49:47', '2019-04-11 12:49:47'),
(63, 'studentjon@example.com', 0, '2019-04-11 13:03:53', '2019-04-11 13:03:53'),
(64, 'studenthon@example.com', 0, '2019-04-11 13:03:53', '2019-04-11 13:03:53');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(50) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `email`, `is_active`, `date_created`, `date_updated`) VALUES
(1, 'teacher1@test.com', 1, '2019-04-05 10:08:33', '2019-04-05 10:08:33'),
(2, 'teacher2@test.com', 1, '2019-04-05 10:08:33', '2019-04-05 10:08:33'),
(3, 'teacherken@gmail.com', 1, '2019-04-08 15:54:52', '2019-04-08 15:54:52'),
(7, 'teacherken1@gmail.com', 1, '2019-04-11 07:41:20', '2019-04-11 07:41:20'),
(8, 'teacherken2@gmail.com', 1, '2019-04-11 07:45:42', '2019-04-11 07:45:42'),
(9, 'teacherken3@gmail.com', 1, '2019-04-11 08:00:30', '2019-04-11 08:00:30');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_students`
--

CREATE TABLE `teacher_students` (
  `teacher_id` int(10) UNSIGNED NOT NULL,
  `student_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher_students`
--

INSERT INTO `teacher_students` (`teacher_id`, `student_id`) VALUES
(1, 1),
(2, 2),
(2, 1),
(3, 39),
(3, 38),
(3, 41),
(3, 42),
(3, 44),
(3, 43),
(3, 45),
(7, 46),
(7, 47),
(8, 47),
(8, 46),
(8, 48),
(8, 49),
(9, 50),
(9, 51),
(3, 4),
(3, 3),
(3, 52),
(3, 53),
(3, 54),
(3, 55),
(3, 1),
(3, 56),
(3, 57),
(3, 58),
(3, 59),
(3, 60),
(3, 61),
(3, 62),
(3, 63),
(3, 64);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_email` (`email`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_index` (`email`);

--
-- Indexes for table `teacher_students`
--
ALTER TABLE `teacher_students`
  ADD KEY `teacher_students_teacher_index` (`teacher_id`),
  ADD KEY `teacher_students_student_index` (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `teacher_students`
--
ALTER TABLE `teacher_students`
  ADD CONSTRAINT `fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
