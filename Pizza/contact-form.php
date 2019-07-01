<?php
  //Если форма отправлена
  if(isset($_POST['submit'])) {
 //Проверка Поля ИМЯ
  if(trim($_POST['name']) == '') {
  $hasError = true;
  } else {
  $name = trim($_POST['name']);
  }
   //Проверка Поля ТЕЛЕФОН
   if(trim($_POST['phone']) == '') {
    $hasError = true;
    } else {
    $phone = trim($_POST['phone']);
    }
 //Если ошибок нет, отправить email
  if(!isset($hasError)) {
  $emailTo = 'ann.suhopleschenko@gmail.com'; //Сюда введите Ваш email
  $body = "Имя: $name \n\nТелефон: $phone;
  $headers = 'From: My Site <'.$emailTo.'>';
  $emailSent = true;
  }
  }
  ?>