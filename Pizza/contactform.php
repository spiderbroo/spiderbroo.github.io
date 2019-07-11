<?php
$message = "Имя пользователя: " . $_POST['name'] . "<br/>";
$message = "Номер телефона: " . $_POST['phone'] . "<br/>";
send_mail($message);
$msg_box = "Сообщение успешно отправлено";
function send_mail($message){
	$mail_to = "ann.suhopleschenko@gmail.com";
	$subject = "Сообщение из Пиццы";
	mail($mail_to, $subject, $message,);
}
?>