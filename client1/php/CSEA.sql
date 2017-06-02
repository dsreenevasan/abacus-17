CREATE TABLE `personal_details` (
  `EMAIL` varchar(30) NOT NULL PRIMARY KEY,
  `NAME` varchar(50) NOT NULL,
  `DEPARTMENT` varchar(40) NOT NULL,
  `PHONE_NUMBER` varchar(13) NOT NULL,
  `COLLEGE` varchar(50) NOT NULL,
  `YEAR` varchar(8) NOT NULL,
  `A_ID` varchar(10) NOT NULL,
  `PASSWORD` varchar(50) NOT NULL
);

CREATE TABLE `workshop_reg` (
  `A_ID`  varchar(30) NOT NULL,
  `EMAIL` varchar(30) NOT NULL ,
  `WORKSHOP_NAME` varchar(50) NOT NULL,
  `STATUS` varchar(40) DEFAULT 'NOT PAID',
    PRIMARY KEY(`EMAIL`,`WORKSHOP_NAME`)
);

CREATE TABLE `response`(

        `id` VARCHAR(100) NOT NULL,
        `phone` VARCHAR(100),
        `email` VARCHAR(100),
        `buyer_name` VARCHAR(100),
        `amount` VARCHAR(100),
        `purpose` VARCHAR(100),
        `status` VARCHAR(100),
        `send_sms`,
        `send_email`,
        `sms_status`,
        `email_status`,`shorturl`,`longurl`,`redirect_url`,`webhook`,`created_at`,`modified_at`,`allow_repeated_payments`);