<?php

 $dbHost = "localhost";
 $dbUserName = "root";
 $dbPassword = "";
 $dbName = "ranking";

 $conexao = new mysqli($dbHost, $dbUserName, $dbPassword, $dbName);

 /* if ($conexao->connect_errno)
 {
    echo "Erro";
 } else {
    echo"Deu certo";
 }
 */