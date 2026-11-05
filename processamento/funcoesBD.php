<?php

function conectarBD()
{
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $conexao = mysqli_connect("localhost", "root", "", "xhopii");
    mysqli_set_charset($conexao, "utf8mb4");
    return $conexao;
}

function inserirCliente($nome, $sobrenome, $cpf, $dataNascimento, $telefone, $email, $senha, $fotoPerfil = null)
{
    $conexao = conectarBD();
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    $sql = "INSERT INTO clientes (nome, sobrenome, cpf, dataNascimento, telefone, email, senha, fotoPerfil)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    try {
        $stmt = mysqli_prepare($conexao, $sql);
        mysqli_stmt_bind_param(
            $stmt,
            "ssssssss",
            $nome,
            $sobrenome,
            $cpf,
            $dataNascimento,
            $telefone,
            $email,
            $senhaHash,
            $fotoPerfil
        );
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        mysqli_close($conexao);
        return true;
    } catch (mysqli_sql_exception $e) {
        error_log($e->getMessage());
        return false;
    }
}

function retornarClientes()
{
    $conexao = conectarBD();
    $consulta = "SELECT idCliente, nome, sobrenome, cpf, dataNascimento, telefone, email, fotoPerfil
                 FROM clientes ORDER BY nome";
    $resultado = mysqli_query($conexao, $consulta);
    $clientes = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
    mysqli_close($conexao);
    return $clientes;
}

?>