<?php

require "funcoesBD.php";

// Cadastro de Cliente
if(
    !empty($_POST['nome']) && 
    !empty($_POST['sobrenome']) && 
    !empty($_POST['cpf']) && 
    !empty($_POST['nascimento']) && 
    !empty($_POST['telefone']) && 
    !empty($_POST['email']) && 
    !empty($_POST['senha'])
){
    $nome = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];
    $cpf = $_POST['cpf'];
    $dataNasc = $_POST['nascimento'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    
    // Tratamento opcional para a foto de perfil (caso tenha sido enviada)
    if(isset($_FILES['foto']) && $_FILES['foto']['error'] === 0) {
        $nomeFoto = $_FILES['foto']['name'];
        $caminhoTemporario = $_FILES['foto']['tmp_name'];
        // Defina a pasta de destino, por exemplo: 'uploads/'
        $destino = 'uploads/' . basename($nomeFoto);
        move_uploaded_file($caminhoTemporario, $destino);
    }

    inserirCliente($nome, $sobrenome, $cpf, $dataNascimento, $telefone, $email, $senha);
    header('Location:../view/cadastroCliente.html');
    die();
}

?>