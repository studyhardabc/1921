<?php
// 防止中文乱码
header('content-type:text/html;charset="utf-8"');

$responseData = array("code" => 0, "message" => "", "message1" => "");

$username = $_GET['username'];
$passwork = $_GET['passwork'];

if(!$username){
    $responseData['code'] = 1;
    $responseData['message'] = '用户名不能为空';
    echo json_encode($responseData);
    exit;
}

if(!$passwork){
    $responseData['code'] = 2;
    $responseData['message1'] = '密码不能为空';
    echo json_encode($responseData);
    exit;
}

$link = mysqli_connect('localhost','root','','db1921');

//判断数据库是否链接成功
if(!$link){
    $responseData["code"] = 3;
    $responseData["message"] = "服务器忙";
    echo json_encode($responseData);
    exit;
}

//设置编码
mysqli_set_charset($link,'utf8');


$sql1 = "SELECT * FROM user1 where username='{$username}' AND passwork= {$passwork}";

$res = mysqli_query($link, $sql1);

$row = mysqli_fetch_assoc($res);

if(!$row){
    $responseData["code"] = 4;
    $responseData["message"] = "用户名或密码错误";
    echo json_encode($responseData);
    exit;
}

$responseData["message"] = "登陆成功";
echo json_encode($responseData);

mysqli_close($link);
?>